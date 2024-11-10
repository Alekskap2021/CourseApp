declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
declare module "*.svg" {
  // eslint-disable-next-line no-undef
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const png: string;
  export default png;
}

declare module "*.gif" {
  const gif: string;
  export default gif;
}

declare module "*.jpeg" {
  const jpeg: string;
  export default jpeg;
}

declare module "*.jpg" {
  const jpg: string;
  export default jpg;
}

declare module "*.webp" {
  const webp: string;
  export default webp;
}

declare const __IS_DEV__: boolean;
