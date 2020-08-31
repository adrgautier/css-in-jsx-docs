---
title: Hybrid syntax
sidebar: Docs
showTitle: true
---

## Writing css with fragments

CSS blocks are usually shaped using the `{` and `}` characters. Since they are used for JSX assignment expressions, we leverage on fragments in order to write our CSS blocks.

#### Why fragments ?

Fragments create quite a small footprint when writing CSS. With indentation, it becomes as readable as the original CSS syntax.

Fragments can also be used for interpolated CSS properties. This creates a nice visual consistency:
