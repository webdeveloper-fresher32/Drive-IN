import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function ModalShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dialog and Modal Components</CardTitle>
        <CardDescription>
          Dialogs, sheets, and overlay components
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="mr-2 h-4 w-4" />
                Open Sheet
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                  This is a sheet component that slides in from the side.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Sheet content goes here. You can add any components or
                  content.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </CardContent>
    </Card>
  );
}
