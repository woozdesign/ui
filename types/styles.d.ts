// For CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [key: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const content: { [key: string]: string };
  export default content;
}
