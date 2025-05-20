"use client";

import { Button } from "../components/ui/button";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";

export const WalletConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <Button variant="outline" onClick={() => disconnect()}>
        Disconnect {address?.slice(0, 6)}...{address?.slice(-4)}
      </Button>
    );
  }

  return (
    <Button onClick={() => connect({ connector: connectors[0] })}>
      Connect Cartridge
    </Button>
  );
};
