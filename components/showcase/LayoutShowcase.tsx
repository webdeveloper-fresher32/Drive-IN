import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

export function LayoutShowcase() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Layout Components</CardTitle>
        <CardDescription>
          Tabs, accordions, and layout utilities
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Separator</h4>
          <div className="space-y-1">
            <p className="text-sm">Content above</p>
            <Separator />
            <p className="text-sm">Content below</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Tabs</h4>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-sm">Account settings and preferences.</p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-sm">Change your password here.</p>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Accordion</h4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the aesthetic.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Date Picker</h4>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[240px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
}
