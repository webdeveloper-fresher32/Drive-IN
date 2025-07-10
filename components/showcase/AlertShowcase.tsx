import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Info, CheckCircle, X } from "lucide-react";

export function AlertShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
        <CardDescription>Different alert types and states</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is an informational alert with some helpful content.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>

        <Alert className="border-green-200 bg-green-50 text-green-800">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your operation completed successfully!
          </AlertDescription>
        </Alert>

        <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800">
          <X className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Please review your settings before proceeding.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
