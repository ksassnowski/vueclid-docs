# Plotting Functions

<div class="flex justify-center items-center">
    <Graph :domain-y="[-2, 2]" :domain-x="[-6, 6]">
        <FunctionPlot :function="(x) => Math.cos(x)" color="#33aabb" :line-width="2" />
        <FunctionPlot :function="(x) => Math.sin(x)" color="hotpink" :line-width="2" />
    </Graph>
</div>

::: tip

Plotting discontinuous functions requires a little bit of extra work. See [this guide](/guides/discontinuous-functions) for more details.

:::

## Props

| Name         | Description                                         | Type                                   | Default                           |
| ------------ | --------------------------------------------------- | -------------------------------------- | --------------------------------- |
| `function`   | The function to plot.                               | `(x: number, time?: number) => number` | _none_                            |
| `color`      | The color of the plot.                              | `string`                               | `#000`                            |
| `line-width` | The width of the plot's line.                       | `number`                               | `1.5`                             |
| `animated`   | Whether the plot should be animated.                | `boolean`                              | `false`                           |
| `domain`     | The domain in which the function should be plotted. | `PossibleVector2`                      | The parent `<Graph>`'s `domain-x` |

## Animating Plots

The `FunctionPlot` component can be animated by setting the `animated` prop. This will cause the plot to be redrawn every frame using `requestAnimationFrame`. In this case, the `time` parameter of the function will be set to the current timestamp on each frame.

This can be used to plot functions that change over time, such as the following:

::: example

```vue
<template>
  <Graph :domain-y="[-2, 2]" :domain-x="[-2, 2]" :units="false">
    <FunctionPlot
      :function="(x, time) => Math.cos(x + time / 500)"
      :line-width="2"
      animated
    />
  </Graph>
</template>
```

:::

## Examples

### Basic Function Plot

::: example

```vue
<template>
  <Graph :domain-y="[-2, 2]" :domain-x="[-6, 6]">
    <FunctionPlot :function="(x) => Math.cos(x)" :line-width="2" />
  </Graph>
</template>
```

:::
