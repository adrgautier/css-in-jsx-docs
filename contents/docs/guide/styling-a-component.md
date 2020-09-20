---
title: Styling a component
sidebar: Docs
showTitle: true
---


In order to style a react component, this component need to be "stylable". When a component is stylable, it accepts a style tag as children.

Base stylable element can be created like this.

```jsx
import { Stylable } from "css-in-jsx";

function MyComponent() {
  return (
    <Stylable.div>
      <style>
        text-align: center;
        .link <>
          color: {LINK_COLOR};
        </>
      </style>
      Lorem <a className="link">ipsum</a>...
    </Stylable.div>
  );
}
```

You can style any component that accept a `className` prop like so:

```jsx
import { Stylable } from "css-in-jsx";
import Card from "components/card";

const StylableCard = Stylable(Card);

function MyComponent() {
  return (
    <StylableCard>
      <style>
        text-align: center;
        .link <>
          color: {LINK_COLOR};
        </>
      </style>
      Lorem <a className="link">ipsum</a>...
    </StylableCard>
  );
}
```

You can also create a prestyled component using the styled approach:

```jsx
import { Styled } from "css-in-jsx";

const Wrapper = Styled.div(<>
  text-align: center;
  .link <>
    color: {LINK_COLOR};
  </>
</>);

function MyComponent() {
  return (
    <Wrapper>
      Lorem <a className="link">ipsum</a>...
    </Wrapper>
  );
}
```

Any component that accept a `className` prop can also be styled with the same approach:

```jsx
import { Stylable } from "css-in-jsx";
import Card from "components/card";

const StyledCard = Styled(Card)(<>
  text-align: center; 
  .link <>
    color: {LINK_COLOR};
  </>
</>);

function MyComponent() {
  return (
    <StyledCard>
      <style>
        text-align: center;
        .link <>
          color: {LINK_COLOR};
        </>
      </style>
      Lorem <a className="link">ipsum</a>...
    </StyledCard>
  );
}
```
