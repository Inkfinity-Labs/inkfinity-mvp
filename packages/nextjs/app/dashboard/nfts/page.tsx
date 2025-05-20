"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock NFT data
const mockNFTs = [
  {
    id: 1,
    title: "Geometric Wolf",
    description: "A minimalist geometric wolf design",
    imageUrl: "https://placehold.co/400x400",
  },
  {
    id: 2,
    title: "Floral Mandala",
    description: "Intricate floral mandala pattern",
    imageUrl: "https://placehold.co/400x400",
  },
  {
    id: 3,
    title: "Japanese Wave",
    description: "Traditional Japanese wave design",
    imageUrl: "https://placehold.co/400x400",
  },
];

export default function MyNFTsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">My NFTs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNFTs.map((nft) => (
          <Card key={nft.id}>
            <CardHeader>
              <img
                src={nft.imageUrl}
                alt={nft.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{nft.title}</CardTitle>
              <CardDescription>{nft.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
