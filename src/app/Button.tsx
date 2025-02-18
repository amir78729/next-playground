'use client'
import { createComponent } from "@lit/react";
import { TapsiButton } from "@tapsioss/web-components/button";
import React from "react";

const Button = createComponent({
  tagName: "tapsi-button",
  elementClass: TapsiButton,
  react: React
});

export default Button;
