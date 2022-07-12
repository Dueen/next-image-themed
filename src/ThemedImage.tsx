import * as React from "react";
import Image, { type ImageProps } from "next/image";

type ThemedImageProps = Omit<ImageProps, "src"> & {
  light: ImageProps["src"];
  dark: ImageProps["src"];
};

export default function ThemedImage({
  light,
  dark,
  ...props
}: ThemedImageProps) {
  const [src, setSrc] = React.useState<ImageProps["src"]>(light);

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    if (mql.matches) {
      setSrc(dark);
    }

    mql.onchange = (e: MediaQueryListEvent) =>
      e.matches ? setSrc(dark) : setSrc(light);
  }, []);

  return <Image {...props} src={src} />;
}
