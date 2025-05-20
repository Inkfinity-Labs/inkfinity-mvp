"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function MintNFTPage() {
  return (
    <main className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Mint New NFT</CardTitle>
          <CardDescription>
            Create a new NFT for your tattoo design
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium">
                Image URI
              </label>
              <Input
                id="image"
                placeholder="https://example.com/your-image.png"
                type="url"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input id="title" placeholder="Enter the title of your design" />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Describe your tattoo design"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Mint NFT
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
