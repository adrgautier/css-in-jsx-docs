---
title: Introduction
sidebar: Docs
showTitle: true
---
CSS-in-JSX (stylized <>**CSS**</> or <>**CSS** in **JSX**</>) is yet another approach to style in React.

## Disclaimer

⚠️ This is a proof of concept and should not be used on any production website. ⚠️

## Features

* Powered by JSX
* Style nesting
* Template literal free
* Hybrid syntax

## Motivations

As much as I find the styled-components powerful, I do not find it pleasing to write nor to read.

Template litterals are especially a pain in the ass to write using AZERTY keyboard and this was the initial motivation behind the concept of CSS in JSX.

I started to ask myself, how a frictionless syntax for CSS in JS would look like ?

The idea of styles in JSX was a good place to start. For example, [styled-jsx](https://github.com/vercel/styled-jsx) showcases the benefits of not naming, neither the styles, nor the props used for interpolation.

However the use of template litterals was a deal breaker for me. From there came the idea of using fragments to structure the CSS.
