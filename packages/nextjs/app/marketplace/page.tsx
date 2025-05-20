"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock NFT data
const mockNFTs = [
  {
    id: 1,
    title: "Geometric Wolf",
    description: "A minimalist geometric wolf design",
    imageUrl: "https://placehold.co/400x400",
    price: 0.5,
    artist: {
      name: "Alex Rivera",
      imageUrl: "https://placehold.co/100x100",
      bio: "Contemporary artist specializing in geometric designs and minimalist art.",
      reputation: 4.8,
      totalSales: 156,
      totalNFTs: 23,
    },
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
      bio: "Digital artist with a passion for creating intricate patterns and mandalas.",
      reputation: 4.9,
      totalSales: 203,
      totalNFTs: 45,
    },
  },
  {
    id: 3,
    title: "Japanese Wave",
    description: "Traditional Japanese wave design",
    imageUrl: "https://placehold.co/400x400",
    price: 1.0,
    artist: {
      name: "Yuki Tanaka",
      imageUrl: "https://placehold.co/100x100",
      bio: "Traditional Japanese artist bringing classic designs to the digital world.",
      reputation: 4.7,
      totalSales: 178,
      totalNFTs: 32,
    },
  },
  {
    id: 4,
    title: "Abstract Lines",
    description: "Dynamic abstract line composition",
    imageUrl: "https://placehold.co/400x400",
    price: 0.6,
    artist: {
      name: "Marcus Lee",
      imageUrl: "https://placehold.co/100x100",
      bio: "Abstract artist exploring the intersection of geometry and emotion.",
      reputation: 4.6,
      totalSales: 142,
      totalNFTs: 28,
    },
  },
];

export default function MarketplacePage() {
  return (
    <main className="container mx-auto p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Discover NFTs</h1>
          <div className="flex gap-4">
            <Input
              placeholder="Search NFTs, artists, or collections..."
              className="max-w-md"
            />
            <Button variant="outline">Filter</Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All NFTs</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockNFTs.map((nft) => (
                <Card key={nft.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={nft.imageUrl}
                      alt={nft.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={nft.artist.imageUrl}
                        alt={nft.artist.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-muted-foreground">
                        {nft.artist.name}
                      </span>
                    </div>
                    <CardTitle className="mb-1">{nft.title}</CardTitle>
                    <CardDescription className="mb-2">
                      {nft.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">${nft.price} USD</span>
                      <Button>Buy Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockNFTs.slice(0, 2).map((nft) => (
                <Card key={nft.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={nft.imageUrl}
                      alt={nft.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={nft.artist.imageUrl}
                        alt={nft.artist.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-muted-foreground">
                        {nft.artist.name}
                      </span>
                    </div>
                    <CardTitle className="mb-1">{nft.title}</CardTitle>
                    <CardDescription className="mb-2">
                      {nft.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">${nft.price} USD</span>
                      <Button>Buy Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockNFTs.slice(2).map((nft) => (
                <Card key={nft.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={nft.imageUrl}
                      alt={nft.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={nft.artist.imageUrl}
                        alt={nft.artist.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-muted-foreground">
                        {nft.artist.name}
                      </span>
                    </div>
                    <CardTitle className="mb-1">{nft.title}</CardTitle>
                    <CardDescription className="mb-2">
                      {nft.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">${nft.price} USD</span>
                      <Button>Buy Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
