# Configuration

Unless otherwise specified, all configuration options are global and affect all `<Graph>` components on the page.

## Dark Mode

Vueclid comes with both a light and a dark theme. The light theme is used by default. To enable the dark theme use the `setDarkMode` function provided by the `useColors` hook:

```ts
import { useColors } from "@ksassnowski/vueclid";

const { setDarkMode } = useColors();
setDarkMode(true);
```

::: tip

All colors are reactive so no reload is required after toggling dark mode on or off.

:::

Since there are different ways for enabling dark mode on a website (e.g. via a class on the `<body>` tag or with a CSS media query), `vueclid` does not make any assumptions about how to detect dark mode.

Here are the two most common ways to detect dark mode.

### Using a CSS class

If you are using a CSS class to enable dark mode, you can use [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to watch for changes to the `<body>` tag and update the dark mode accordingly. This is how dark mode is handled on this documentation site:

```ts
import { useColors } from "@ksassnowski/vueclid";

const { setDarkMode } = useColors();

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const target = mutation.target as HTMLElement;
      const darkMode = target.classList.contains("dark");
      setDarkMode(darkMode);
    }
  }
});
// Or whatever element you're setting the class on
const body = document.querySelector("body")!;

observer.observe(body, { attributes: true });

// Make sure to set the initial dark mode since MutationObserver
// will not fire for the initial state.
setDarkMode(body.classList.contains("dark"));
```

### Using a CSS media query

If you are using a CSS media query to detect the user's preference, you can use [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) to watch for changes and update the dark mode accordingly.

```ts
import { useColors } from "@ksassnowski/vueclid";

const { setDarkMode } = useColors();

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeQuery.addEventListener("change", (event) => setDarkMode(event.matches));

// Set the initial state
setDarkMode(darkModeQuery.matches);
```

## Customizing Colors

To change the default colors `vueclid` uses, you can use the `setColors` function provided by the `useColors` hook.

```ts
function setColors(colors: {
  light?: Partial<ColorScheme>;
  dark?: Partial<ColorScheme>;
}): void;
```

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
import { useColors } from "@ksassnowski/vueclid";

const { setColors } = useColors();

setColors({
  dark: {
    stroke: "hotpink",
  },
});
```

::: tip

All colors are reactive, so no reload is required after changing the color scheme. This means that you could let the user choose their own color scheme at runtime if you wished.

:::
