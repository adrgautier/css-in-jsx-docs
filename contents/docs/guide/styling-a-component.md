---
title: Styling a component
sidebar: Docs
showTitle: true
---


In order to style a react component, this component need to be "stylable". When a component is stylable, it accepts a style tag as children.

Base stylable element can be created like this.

```jsx
import Stylable from "css-in-jsx";

function MyComponent() {
  return (
    <Stylable.div>
      <style>
        text-align: center; .link <>color: {LINK_COLOR};</>
      </style>
      Lorem <a className="link">ipsum</a>...
    </Stylable.div>
  );
}
```

You can also style any component that accept a `className` prop like so:

```jsx
import Stylable from "css-in-jsx";
import Card from "./components/card";

const StylableCard = Stylable(Card);

function MyComponent() {
  return (
    <StylableCard>
      <style>
        text-align: center; .link <>color: {LINK_COLOR};</>
      </style>
      Lorem <a className="link">ipsum</a>...
    </StylableCard>
  );
}
```