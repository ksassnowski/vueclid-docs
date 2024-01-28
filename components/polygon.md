# Drawing Polygons

Draws a polygon for a set of vertices.

<div class="justify-center items-center flex">
  <Graph :domain-x="[0, 5]" :domain-y="[0, 5]" :origin="[0, 5]" :units="false">
    <Polygon :vertices="[[4.5, 1], [0.5, 1], [4.5, 4.5]]" angles :angle-radius="0.75" />
  </Graph>
</div>

::: warning

A polygon requires at least three vertices. Otherwise, an error will be thrown.

:::

## Props

| Name           | Description                                                       | Type                | Default |
| -------------- | ----------------------------------------------------------------- | ------------------- | ------- |
| `vertices`     | The vertices of the polygon.                                      | `PossibleVector2[]` | _none_  |
| `color`        | The stroke color of the polygon.                                  | `string`            | `#000`  |
| `line-width`   | The stroke line width of the polygon.                             | `number`            | `1.25`  |
| `fill`         | The fill color of the polygon.                                    | `string`            | _none_  |
| `dashed`       | Whether the polygon should be drawn with a dashed stroke.         | `boolean`           | `false` |
| `angles`       | Whether to draw the interior angles of the polygon.               | `boolean`           | `false` |
| `angle-radius` | The radius of the interior angles.                                | `number`            | `1`     |
| `angle-dashed` | Whether the interior angles should be drawn with a dashed stroke. | `boolean`           | `false` |

## Examples

### Triangle

::: example

```vue
<template>
  <Graph :units="false" :grid="false" :axis="false">
    <Polygon
      :vertices="[
        [-3, -2],
        [-3, 4],
        [4.5, -2],
      ]"
    />
  </Graph>
</template>
```

:::

### Regular Hexagon with Angles

::: example

```vue
<template>
  <Graph :units="false" :grid="false" :axis="false">
    <Polygon
      :vertices="[
        [-1, 0.732],
        [0, 2.464],
        [2, 2.464],
        [3, 0.732],
        [2, -1],
        [0, -1],
      ]"
      angles
      :angle-radius="0.7"
    />
  </Graph>
</template>
```

:::
