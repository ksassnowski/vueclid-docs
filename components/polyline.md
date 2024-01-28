# Drawing Polylines

A polyline is a series of connected line segments.

<div class="justify-center items-center flex">
    <Graph :units="false">
      <PolyLine :points="[[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]]" />
      <PolyLine :points="[[-4, 2.8], [-2, 3], [-1, -4], [0, 2]]" dashed />
    </Graph>
</div>

::: tip

To draw simple lines or line segments, use the [`Line`](/components/line) component.

:::

## Props

| Name         | Type                | Default | Description                            |
| ------------ | ------------------- | ------- | -------------------------------------- |
| `points`     | `PossibleVector2[]` | _none_  | The points of the polyline.            |
| `line-width` | `number`            | `1.75`  | The width of the polyline.             |
| `color`      | `string`            | `#000`  | The stroke color of the polyline.      |
| `dashed`     | `boolean`           | `false` | Whether the polyline should be dashed. |

## Examples

### Simple Polyline

::: example

```vue
<template>
  <Graph>
    <PolyLine
      :points="[
        [0, 0],
        [1, 1],
        [2, 0],
        [3, 1],
        [4, 0],
      ]"
    />
  </Graph>
</template>
```

:::
