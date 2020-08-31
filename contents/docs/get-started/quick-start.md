---
title: Quick Start
sidebar: Docs
showTitle: true
---

CSS-in-JSX is not yet released on NPM. Thus, if you want to try this concept, you will need to install it manually on your project.

## Setting up the module

Please first clone the [repository](https://github.com/adrgautier/css-in-jsx).

Then build the library.

```sh
npm run-script build
```

Link the module globally.

```sh
npm link
```

## Link the module to your project

In your project link the module.

```sh
npm link css-in-jsx
```

## Start developing

You should now be able to import the module in your project:

```js
import Stylable from "css-in-jsx";
```