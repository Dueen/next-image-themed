# Next-Image-Themed

A Next.js Image Component that allows you to shows a different image in light and dark-mode, based on the users preference.

## Installation

Using Yarn:

```bash
yarn add next-image-themed
```

Using NPM:

```bash
npm install next-image-themed
```

## Usage

```tsx
import ThemedImage from "next-image-themed";

import LightModeImage from "assets/images/light-mode.png";
import DarkModeImage from "assets/images/dark-mode.png";

const MyComponent = () => (
  <ThemedImage
    // The image to show in light-mode.
    light={LightModeImage}
    // The image to show in dark-mode.
    dark={DarkModeImage}
    // Pass the rest of the props to the Image component as you normally would.
    alt='My Image'
    loading='lazy'
  />
);
```
