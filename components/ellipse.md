# Drawing Ellipses

Draws ellipses with the given x and y radii.

<div class="justify-center items-center flex">
  <Graph :units="false">
    <Ellipse :radius="[3, 2]" />
  </Graph>
</div>

::: info

For an easier way to draw circles, see the [Circle](/components/circle) component.

:::


## Props

| Name | Description                                               | Type              | Default |
| --- |-----------------------------------------------------------|-------------------|---------|
| `radius` | The x and y radii of the ellipse.                         | `PossibleVector2` | `[1,1]` |
| `position` | The position of the center of the ellipse.                | `PossibleVector2` | `[0,0]` |
| `color` | The stroke color of the ellipse.                          | `string`          | `#000`  |
| `line-width` | The stroke line width of the ellipse.                     | `number`          | `1.5`   |
| `fill` | The fill color of the ellipse.                            | `string`          | _none_  |
| `dashed` | Whether the ellipse should be drawn with a dashed stroke. | `boolean`         | `false` |

## Examples

### Basic Ellipse

::: example

```vue
<template>
  <Graph :units="false">
    <Ellipse :radius="[3, 2]" />
  </Graph>
</template>
```

:::


### Filled Ellipse

::: example

```vue
<template>
  <Graph :units="false">
    <Ellipse :radius="[3, 2]" fill="#33aabb33" color="#33aabb" />
  </Graph>
</template>
```

:::