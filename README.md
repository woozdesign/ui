![header](https://capsule-render.vercel.app/api?type=rect&color=000&fontColor=fff&height=148&section=header&text=Wooz%20Design&fontSize=52)

## 🖥 Environment Support

- Modern browsers
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                      |

## 📦 Install

> [!WARNING]  
> This project is very early-stage. Please be aware that the code structure changes frequently.

```bash
npm install woozdesign-ui
```

```bash
yarn add woozdesign-ui
```

```bash
pnpm add woozdesign-ui
```

## 🔨 Usage

```jsx
import React from 'react';
import { Button, Layout } from 'woozdesign-ui';

const App = () => (
  <Layout.Container>
    <Layout.Row>
      <Layout.Col xs={24}>
        <Button type="primary">PRESS ME</Button>
      </Layout.Col>
    </Layout.Row>
  </Layout.Container>
);
```

### TypeScript

`woozdesign` is written in TypeScript with complete definitions, check [Use in TypeScript] to get started.

## ⌨️ Development

Clone locally:

```bash
$ git clone git@github.com:woozdesign/woozdesign-ui.git
$ cd woozdesign-ui
$ npm install
$ npm start
```

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Read our [contributing guide] and let's build a better woozdesign together.

We welcome all contributions. Please read our [CONTRIBUTING.md] first. You can submit any ideas as [pull requests] or as [GitHub issues]. If you'd like to improve code, check out the [Development Instructions] and have a good time! :)

If you are a collaborator, please follow our [Pull Request principle] to create a Pull Request with [collaborator template].
