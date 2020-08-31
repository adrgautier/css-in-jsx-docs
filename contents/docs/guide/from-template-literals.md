---
title: Coming from template literals
sidebar: Docs
showTitle: true
---

## The power of JSX

Unlike most CSS-in-JS libraries, styles interpolation is not powered by template literals, but rather by JSX itself. That means:

```js
`color: ${PRIMARY_COLOR};`;
```

Becomes:

```jsx
<>color: {LINK_COLOR};</>
```

The interpolation is powered by the `{`AssignmentExpression`}` from jsx.

```js
css`
  color: ${(props) => (props.active ? PRIMARY_COLOR : "white")};
`;
```

Becomes:

```jsx
<>color: {props.active ? PRIMARY_COLOR : "white"};</>
```