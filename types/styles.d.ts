// For CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
