# `<Graph>` component

<div class="flex justify-center items-center">
  <Graph>
  </Graph>
</div>

The `<Graph>` component is the top-level component of every graph.
It is responsible for drawing the axes, grid, and origin, and for providing the
coordinate system for all other components.

Even when drawing a diagram without axes or a grid, you still need to wrap the
other components inside a `<Graph>` component.

## Props

| Name        | Type              | Description                                 | Default                                   |
| ----------- | ----------------- | ------------------------------------------- | ----------------------------------------- |
| `width`     | `number`          | The width of the graph, in pixels           | `200`                                     |
| `height`    | `number`          | The height of the graph, in pixels          | `200`                                     |
| `padding`   | `number`          | The padding around the graph, in pixels     | `30`                                      |
| `domain-x`  | `PossibleVector2` | The domain of the graph's x-axis            | `[-5, 5]`                                 |
| `domain-y`  | `PossibleVector2` | The domain of the graph's y-axis            | `[-5, 5]`                                 |
| `origin`    | `PossibleVector2` | The origin of the axes of the graph         | Halfway between `domain-x` and `domain-y` |
| `grid-size` | `number`          | The size of the grid squares in local units | `1`                                       |
| `axis`      | `boolean`         | Whether to draw the axes                    | `true`                                    |
| `grid`      | `boolean`         | Whether to draw the grid                    | `true`                                    |
| `units`     | `boolean`         | Whether to draw the units on the axes       | `true`                                    |

## Examples

### Moving the origin

::: example

```vue
<template>
  <Graph :origin="[2, 5]" />
</template>
```

:::

### Changing the domain

::: example

```vue
<template>
  <Graph :domain-x="[-2, 2]" :domain-y="[-4, 4]" />
</template>
```

:::

### Changing the grid size

::: example

```vue
<template>
  <Graph :grid-size="2.5" />
</template>
```

:::

### Drawing only the axes

::: example

```vue
<template>
  <Graph :grid="false" :units="false" />
</template>
```

:::

### Drawing only the grid

::: example

```vue
<template>
  <Graph :axis="false" :units="false" />
</template>
```

:::
