"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock featured NFT data
const featuredNFTs = [
  {
    id: 1,
    title: "Geometric Wolf",
    description: "A minimalist geometric wolf design",
    imageUrl: "https://placehold.co/400x400",
    price: 0.5,
    artist: {
      name: "Alex Rivera",
      imageUrl: "https://placehold.co/100x100",
    },
    featuredReason: "Top seller this week",
  },
  {
    id: 2,
    title: "Floral Mandala",
    description: "Intricate floral mandala pattern",
    imageUrl: "https://placehold.co/400x400",
    price: 0.75,
    artist: {
      name: "Sarah Chen",
      imageUrl: "https://placehold.co/100x100",
    },
    featuredReason: "Editor's choice",
  },
];

export default function FeaturedPage() {
  return (
    <main className="container mx-auto p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Featured NFTs</h1>
          <p className="text-muted-foreground">
            Discover our handpicked selection of exceptional NFT designs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredNFTs.map((nft) => (
            <Card key={nft.id} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={nft.imageUrl}
                    alt={nft.title}
                    className="w-full h-full object-cover aspect-square"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                      {nft.featuredReason}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <img
                        src={nft.artist.imageUrl}
                        alt={nft.artist.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-muted-foreground">
                        {nft.artist.name}
                      </span>
                    </div>
                    <CardTitle className="text-2xl mb-2">{nft.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {nft.description}
                    </CardDescription>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${nft.price} USD</span>
                    <Button size="lg">Buy Now</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
