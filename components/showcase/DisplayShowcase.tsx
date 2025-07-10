import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Heart, Share, MessageCircle } from "lucide-react";

export function DisplayShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Display Components</CardTitle>
        <CardDescription>Badges, avatars, and visual elements</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Badges</Label>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Avatars</Label>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Icons</Label>
          <div className="flex gap-4 text-2xl">
            <Star className="text-yellow-500" />
            <Heart className="text-red-500" />
            <Share className="text-blue-500" />
            <MessageCircle className="text-green-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-medium">{children}</div>;
}
