import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ButtonShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>Different button variants and sizes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </CardContent>
    </Card>
  );
}
