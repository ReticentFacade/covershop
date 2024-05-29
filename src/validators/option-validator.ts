import { PRODUCT_PRICES } from "@/config/products";

// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-900 border-rose-900
// bg-orange-600 border-orange-600
// bg-violet-900 border-violet-900

export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900", // tw = tailwind color
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-900",
  },
  {
    label: "Orange",
    value: "orange",
    tw: "orange-600",
  },
  {
    label: "Violet",
    value: "violet",
    tw: "violet-900",
  },
] as const;

// MODELS:
export const MODELS = {
  name: "models",
  options: [
    { label: "iPhone X", value: "iphonex" },
    { label: "iPhone 11", value: "iphone11" },
    { label: "iPhone 12", value: "iphone12" },
    { label: "iPhone 13", value: "iphone13" },
    { label: "iPhone 14", value: "iphone14" },
    { label: "iPhone 15", value: "iphone15" },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
