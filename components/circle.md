# Drawing Circles

<div class="flex justify-center items-center">
    <Graph>
        <Circle :radius="2" />
        <Circle :position="[-2.3, 2]" :radius="1" color="steelblue" />
        <Circle :position="[2.3, 2]" :radius="1" color="steelblue" />
    </Graph>
</div>

## Props

| Name | Description                                               | Type              | Default |
| --- |-----------------------------------------------------------|-------------------|---------|
| `radius` | The radius of the circle.                                | `number`          | `1`     |
| `position` | The position of the center of the circle.                | `PossibleVector2` | `[0,0]` |
| `color` | The stroke color of the circle.                          | `string`          | `#000`  |
| `line-width` | The stroke line width of the circle.                     | `number`          | `1.5`   |
| `fill` | The fill color of the circle.                            | `string`          | _none_  |
| `dashed` | Whether the circle should be drawn with a dashed stroke. | `boolean`         | `false` |

## Examples

### Basic Circle

::: example

```vue
<template>
  <Graph :units="false">
    <Circle :radius="3" />
  </Graph>
</template>
```

:::


### Filled Circle

::: example

```vue
<template>
  <Graph :units="false">
    <Circle :radius="3" fill="#33aabb33" color="#33aabb" />
  </Graph>
</template>
```

:::