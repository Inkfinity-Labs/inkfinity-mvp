"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { WalletConnectButton } from "../components/WalletConnectButton";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/marketplace");
  }, [router]);

  return null;
}
