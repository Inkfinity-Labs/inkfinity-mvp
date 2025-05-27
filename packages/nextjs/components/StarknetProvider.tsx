"use client";

import React, { useEffect, useState } from "react";
import { StarknetConfig, jsonRpcProvider, starkscan } from "@starknet-react/core";
import { sepolia, mainnet } from "@starknet-react/chains";
import ControllerConnector from "@cartridge/connector/controller";
import { SessionPolicies } from "@cartridge/controller";

// Define tus policies y provider aquí
const ETH_TOKEN_ADDRESS =
  '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';

const policies: SessionPolicies = {
  contracts: {
    [ETH_TOKEN_ADDRESS]: {
      methods: [
        {
          name: "approve",
          entrypoint: "approve",
          description: "Approve spending of tokens",
        },
        { name: "transfer", entrypoint: "transfer" },
      ],
    },
  },
};

const provider = jsonRpcProvider({
  rpc: (chain) => {
    switch (chain) {
      case mainnet:
        return { nodeUrl: 'https://api.cartridge.gg/x/starknet/mainnet' };
      case sepolia:
      default:
        return { nodeUrl: 'https://api.cartridge.gg/x/starknet/sepolia' };
    }
  },
});

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const [connector, setConnector] = useState<ControllerConnector | null>(null);

  useEffect(() => {
    const c = new ControllerConnector({
      policies,
      chains: [
        { rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia" },
        { rpcUrl: "https://api.cartridge.gg/x/starknet/mainnet" },
      ],
      defaultChainId: "0x534e5f5345504f4c4941",
    })
    setConnector(c);
  }, []);

  if (!connector) return null; // o un loader

  return (
    <StarknetConfig
      autoConnect
      chains={[mainnet, sepolia]}
      provider={jsonRpcProvider({
        rpc: (chain) => ({
          nodeUrl:
            chain === mainnet
              ? "https://api.cartridge.gg/x/starknet/mainnet"
              : "https://api.cartridge.gg/x/starknet/sepolia",
        }),
      })}
      connectors={[connector]}
      explorer={starkscan}
    >
      {children}
    </StarknetConfig>
  );
}