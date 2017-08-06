---
title: "Writing Styled Components"
date: "2017-08-06"
slug: "writing-styled-components"
---

Lately I have been working on projects that use [styled-components](https://github.com/styled-components/styled-components). It is a really nice library for manipulating and processing styles alongside the rest of your application.

To create a styled component, you first create a new definition of the style, and then use it a regular tag, like so:

```javascript
import React from "react";
import styled from "styled-components";

const RedText = styled.p`
  color: red;
`;

export default = () =>
  <RedText>This text is red!</RedText>;
```

This is pretty straightforward, but has its disadvantages.

## There is a cleaner way

When creating an actual rich web application with styled-components, you will usually end up with several complex styles and their tags. Looking at the _default export_, it can get difficult to tell what is what. Is `RedText` a `<p>` or an `<h1>`? Can’t tell without browsing through tons of definitions.

How about when you no longer want to use _styled-components_? You will have to strip out all the custom styled components and replace them with regular tags, rewriting all the styles.

This is why I think it’s better to separate the actual _component_ and its styles, even when using styled-components. It is not that difficult either. The only thing you have to do is pass a `className` into the “pure component” you are creating, and then wrap it in a default export, that is the _styled component_, like so:

```javascript
const RedText = ({ className }) =>
  <p className={className}>
    This text should be red!
  </p>;

export default styled(RedText)`
  color: red;
`;
```

Now the actual `RedText` component doesn’t really care where the styles come from, since it can inherit a nice auto-generated className from whatever you decide to use, be it _styled-component_ or [styled-jsx](https://github.com/zeit/styled-jsx), for example. The component is easy to read, since it contains no custom tags.

We can also do some nice “scoping” of styles inside the component:

```javascript
const MyComponent = ({ className }) =>
  <div className={className}>
    <p className="red-text">
      This text should be red!
    </p>
    <p> className="blue-text">
      This text should be blue!
    </p>
  </div>;

export default styled(RedText)`
  padding: 10px

  .red-text {
    color: red;
  }

  .blue-text {
    color: blue;
  }
`;
```

As you can see, both the component and its styles are clear and simple. You can also swap out styled-components to something else trivially. Because of scoping, the generated css for the container will be something like `<div class="af3G3af" />` and its children’s style definitions nicely scoped:

```css
.af3G3af.red-text {
  color: red;
}

.af3G3af.red.blue-text {
  color: blue;
}
```

## Extending styled components’ styles

In the first example, what you are exporting is a normal React component containing a styled component `<RedText />`. One powerful feature of styled-components is _extending_, or _inheriting_ styles from other styled-components. We lost this ability in the example.

Styled-components allows you to wrap another styled component and change/extend its styles:

```javascript
import RedText from "RedText";

const BlueText = styled(RedText)`
  color: blue;
`;
```

This now works because later we defined the default export as a styled component that wraps the “pure” React component. In the first example, it was the other way around.

What now happens is `<BlueText />` will inherit two classes, the latter overriding the text colour as blue. We could also extend the style, creating only a single class:

```javascript
const BlueText = RedText.extend`...`;
```

## Summary

We now learned that a nice way to use [styled-components](https://github.com/styled-components/styled-components) is to create a normal React component that is wrapped with `styled` when exporting. This allows us to keep the component’s structure obvious, separate the styles in a future-proof way, and use all the nice features of extending other styled components.

The only downside of this is having to pass the `className` manually as a prop to the normal component.
