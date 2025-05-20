"use client";

import React from "react";
import { sepolia, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  voyager,
  Connector,
  cartridgeProvider,
} from "@starknet-react/core";
import { ControllerConnector } from "@cartridge/connector";

const cartridgeConnector = new ControllerConnector({
  chains: [
    { rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia" },
    { rpcUrl: "https://api.cartridge.gg/x/starknet/mainnet" },
  ],
  defaultChainId: "0x534e5f5345504f4c4941",
});

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  return (
    <StarknetConfig
      chains={[mainnet, sepolia]}
      provider={cartridgeProvider()}
      connectors={[cartridgeConnector as never as Connector]}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
