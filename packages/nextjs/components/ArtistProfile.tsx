"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ArtistProfileProps {
  artist: {
    name: string;
    imageUrl: string;
    bio: string;
    reputation: number;
    totalSales: number;
    totalNFTs: number;
  };
}

export function ArtistProfile({ artist }: ArtistProfileProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={artist.imageUrl} alt={artist.name} />
          <AvatarFallback>
            {artist.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{artist.name}</CardTitle>
          <CardDescription>Artist</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Bio</h3>
            <p className="text-muted-foreground">{artist.bio}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{artist.reputation}</div>
              <div className="text-sm text-muted-foreground">Reputation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{artist.totalSales}</div>
              <div className="text-sm text-muted-foreground">Total Sales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{artist.totalNFTs}</div>
              <div className="text-sm text-muted-foreground">Total NFTs</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
