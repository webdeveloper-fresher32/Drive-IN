import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

export function InteractiveShowcase() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [progress] = useState(33);
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Components</CardTitle>
        <CardDescription>
          Toggles, sliders, and progress indicators
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            checked={isToggled}
            onCheckedChange={setIsToggled}
          />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked === true)}
          />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>

        <div className="space-y-2">
          <Label>Notification Settings</Label>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="important" id="important" />
              <Label htmlFor="important">Important only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none">No notifications</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Volume: {sliderValue[0]}%</Label>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Loading Progress</Label>
          <Progress value={progress} className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
