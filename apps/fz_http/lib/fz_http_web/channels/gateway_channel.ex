defmodule FzHttpWeb.GatewayChannel do
  @moduledoc """
  Error handler for halting pipe processing when erroring out when communicating with the gateway
  """
  alias FzHttp.Gateways

  use FzHttpWeb, :channel

  require Logger

  @impl Phoenix.Channel
  def join("gateway:all", _payload, socket) do
    {:ok, socket}
  end

  @impl Phoenix.Channel
  def join("gateway:" <> id, payload, socket) do
    case Map.fetch(payload, "public_key") do
      {:ok, pub_key} -> handle_join(id, pub_key, socket)
      :error -> {:error, %{reason: "must provide your current public key to join the channel"}}
    end
  end

  defp handle_join(id, pub_key, socket) do
    gateway = Guardian.Phoenix.Socket.current_resource(socket)

    if gateway.id == id do
      if gateway.public_key != nil && gateway.public_key != pub_key do
        Logger.error("Public key has changed, old devices won't be able to connect")
      end

      Gateways.update_gateway(gateway, %{public_key: pub_key})

      send(self(), :after_join)
      {:ok, socket}
    else
      {:error, %{reason: "Channel id doesn't match token's id"}}
    end
  end

  @impl Phoenix.Channel
  def handle_info(:after_join, socket) do
    gateway_config = Gateways.gateway_config(Gateways.get_gateway!())

    push(socket, "init", %{init: gateway_config})

    {:noreply, socket}
  end

  @impl Phoenix.Channel
  def handle_in("stats", stats, socket) do
    dbg(stats)
    {:noreply, socket}
  end
end