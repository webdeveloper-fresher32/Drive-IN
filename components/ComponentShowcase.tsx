"use client";

import React from "react";
import { ButtonShowcase } from "./showcase/ButtonShowcase";
import { FormShowcase } from "./showcase/FormShowcase";
import { InteractiveShowcase } from "./showcase/InteractiveShowcase";
import { DisplayShowcase } from "./showcase/DisplayShowcase";
import { AlertShowcase } from "./showcase/AlertShowcase";
import { LayoutShowcase } from "./showcase/LayoutShowcase";
import { ModalShowcase } from "./showcase/ModalShowcase";

export function ComponentShowcase() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Component Showcase</h1>
        <p className="text-muted-foreground">
          Explore the various UI components available in this design system
        </p>
      </div>

      <ButtonShowcase />
      <FormShowcase />
      <InteractiveShowcase />
      <DisplayShowcase />
      <AlertShowcase />
      <LayoutShowcase />
      <ModalShowcase />
    </div>
  );
}
