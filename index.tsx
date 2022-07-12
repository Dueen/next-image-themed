import * as React from "react";
import Image, { type ImageProps } from "next/image";

type ThemedImageProps = Omit<ImageProps, "src"> & {
  light: ImageProps["src"];
  dark: ImageProps["src"];
};

const ThemedImage: React.FC<ThemedImageProps> = ({ light, dark, ...props }) => {
  const [src, setSrc] = React.useState<ImageProps["src"]>(light);

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    if (mql.matches) {
      setSrc(dark);
    }

    mql.onchange = (e: MediaQueryListEvent) =>
      e.matches ? setSrc(dark) : setSrc(light);
  }, []);

  return <Image src={src} {...props} />;
};

export default ThemedImage;
