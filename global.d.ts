// globals.d.ts

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "swiper/css/*" {
  const content: { [key: string]: string };
  export default content;
}
