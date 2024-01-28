# Drawing Circular Sectors

Draws circular sectors with the given radius, start angle, and end angle.

<div class="flex justify-center items-center">
    <Graph>
        <Sector :radius="2" :from="90" :to="135" :position="[-2,-4]" />
        <Sector :radius="3" :from="-30" :to="30" color="lightseagreen" fill="#33aabb33" />
        <Sector :radius="1.5" :from="-10" :to="-90" :position="[-2, 3]" dashed />
    </Graph>
</div>

## Props

| Name | Description                                                        | Type | Default |
| --- |--------------------------------------------------------------------|-------------------|---------|
| `radius` | The radius of the circle.                                          | `number` | `1`     |
| `position` | The position of the center of the circle.                          | `PossibleVector2` | `[0,0]` |
| `from` | The start angle of the sector. In degrees unless `radians` is set. | `number` | `0`     |
| `to` | The end angle of the sector. In degrees unless `radians` is set.   | `number` | _none_  |
| `color` | The stroke color of the sector.                                    | `string` | `#000`  |
| `line-width` | The stroke line width of the sector.                           | `number` | `1.5`   |
| `fill` | The fill color of the sector.                                      | `string` | _none_  |
| `dashed` | Whether the sector should be drawn with a dashed stroke.           | `boolean` | `false` |
| `radians` | Whether the `from` and `to` angles are in radians.                 | `boolean` | `false` |


## Examples

### Basic Sector

::: example

```vue
<template>
  <Graph :units="false">
    <Sector :radius="3" :from="45" :to="135" />
  </Graph>
</template>
```

:::

### Filled Sector

::: example

```vue
<template>
  <Graph :units="false">
    <Sector :radius="3" :from="45" :to="135" fill="#33aabb33" color="#33aabb" />
  </Graph>
</template>
```

:::