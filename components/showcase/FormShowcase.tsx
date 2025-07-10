import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function FormShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Elements</CardTitle>
        <CardDescription>Input fields and form controls</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter password" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
