# Configuration

Unless otherwise specified, all configuration options are global and affect all `<Graph>` components on the page.

## Dark Mode

Vueclid comes with both a light and a dark theme. The light theme is used by default. To enable the dark theme call `configureGraphs` and set the `darkMode` option to `true`.

```ts
import { configureGraphs } from "@ksassnowski/vueclid";

configureGraphs({ darkMode: true });
```

::: tip

All colors are reactive so no reload is required after toggling dark mode on or off.

:::

Since there are different ways for enabling dark mode on a website (e.g. via a class on the `<body>` tag or with a CSS media query), `vueclid` does not make any assumptions about how to detect dark mode.

Here are the two most common ways to detect dark mode.

### Using a CSS class

If you are using a CSS class to enable dark mode, you can use [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to watch for changes to the `<body>` tag and update the dark mode accordingly. This is how dark mode is handled on this documentation site:

```ts
import { configureGraphs } from "@ksassnowski/vueclid";

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const target = mutation.target as HTMLElement;
      const darkMode = target.classList.contains("dark");
      configureGraphs({ darkMode });
    }
  }
});
// Or whatever element you're setting the class on
const body = document.querySelector("body")!;

observer.observe(body, { attributes: true });

// Make sure to set the initial dark mode since MutationObserver
// will not fire for the initial state.
configureGraphs({
  darkMode: body.classList.contains("dark"),
});
```

### Using a CSS media query

If you are using a CSS media query to detect the user's preference, you can use [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) to watch for changes and update the dark mode accordingly.

```ts
import { configureGraphs } from "@ksassnowski/vueclid";

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

darkModeQuery.addEventListener("change", (event) =>
  configureGraphs({ darkMode: event.matches }),
);

// Set the initial state
configureGraphs({ darkMode: darkModeQuery.matches });
```

## Customizing Colors

To change the default colors `vueclid` uses, you can use the provide the `colors` option to `configureGraphs`. The `colors` option accepts an object with two properties: `light` and `dark`. Each of these properties is an object that contains the colors for the respective theme.

::: details `ColorScheme` type

```ts
interface ColorScheme {
  /**
   * Stroke color of the grid.
   */
  grid: string;

  /**
   * Color of the unit labels.
   */
  units: string;

  /**
   * Stroke color of the grid axis.
   */
  axis: string;

  /**
   * Stroke color for all shapes except points.
   */
  stroke: string;

  /**
   * Label text color.
   */
  text: string;

  /**
   * Background color of the label.
   */
  labelBackground: string;

  /**
   * Stroke color for points.
   */
  points: string;
}
```

:::

You can override colors selectively, so there is no need to provide all colors. For example, to change just the default stroke color `vueclid` uses in dark mode, you can do the following:

```ts
import { configureGraphs } from "@ksassnowski/vueclid";

configureGraphs({
  colors: {
    dark: {
      stroke: "hotpink",
    },
  },
});
```

::: tip

All colors are reactive, so no reload is required after changing the color scheme. This means that you could let the user choose their own color scheme at runtime if you wished.

:::

## Customizing Component Colors

Using the `configureGraphs` function sets the default colors for all `<Graph>` components on the page. You can override these colors on a per-component basis.
Check the component's documentation for the exact property to use.

All properties that deal with colors accept a `Color` value.

```ts
type Color = string | { light: string; dark: string };
```

If only a `string` is provided, the same color will be used for both light and dark mode.

```vue
<template>
  <!-- This will be hotpink in both light and dark mode -->
  <Line color="hotpink" />

  <!-- This will be hotpink in light mode and limegreen in dark mode -->
  <Line :color="{ light: 'hotpink', dark: 'limegreen' }" />
</template>
```

Colors can also be computed values.

```vue
<template>
  <Line :color="color" />
</template>

<script setup lang="ts">
import { Line } from "@ksassnowski/vueclid";
import { computed } from "vue";

// This computed value doesn't actually do anything
// useful, but you get the point.
const color = computed(() => ({
  light: "hotpink",
  dark: "limegreen",
}));
</script>
```
