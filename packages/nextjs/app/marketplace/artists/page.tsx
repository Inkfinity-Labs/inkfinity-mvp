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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock artists data
const mockArtists = [
  {
    id: 1,
    name: "Alex Rivera",
    imageUrl: "https://placehold.co/100x100",
    bio: "Contemporary artist specializing in geometric designs and minimalist art.",
    reputation: 4.8,
    totalSales: 156,
    totalNFTs: 23,
    specialties: ["Geometric", "Minimalist", "Abstract"],
  },
  {
    id: 2,
    name: "Sarah Chen",
    imageUrl: "https://placehold.co/100x100",
    bio: "Digital artist with a passion for creating intricate patterns and mandalas.",
    reputation: 4.9,
    totalSales: 203,
    totalNFTs: 45,
    specialties: ["Patterns", "Mandala", "Digital Art"],
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    imageUrl: "https://placehold.co/100x100",
    bio: "Traditional Japanese artist bringing classic designs to the digital world.",
    reputation: 4.7,
    totalSales: 178,
    totalNFTs: 32,
    specialties: ["Japanese", "Traditional", "Ink"],
  },
  {
    id: 4,
    name: "Marcus Lee",
    imageUrl: "https://placehold.co/100x100",
    bio: "Abstract artist exploring the intersection of geometry and emotion.",
    reputation: 4.6,
    totalSales: 142,
    totalNFTs: 28,
    specialties: ["Abstract", "Contemporary", "Mixed Media"],
  },
];

export default function ArtistsPage() {
  return (
    <main className="container mx-auto p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Discover Artists</h1>
          <div className="flex gap-4">
            <Input placeholder="Search artists..." className="max-w-md" />
            <Button variant="outline">Filter</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockArtists.map((artist) => (
            <Card key={artist.id} className="overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={artist.imageUrl} alt={artist.name} />
                    <AvatarFallback>{artist.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{artist.name}</CardTitle>
                    <CardDescription>
                      {artist.reputation} ★ ({artist.totalSales} sales)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  {artist.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {artist.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {artist.totalNFTs} NFTs
                  </span>
                  <Button variant="outline">View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
