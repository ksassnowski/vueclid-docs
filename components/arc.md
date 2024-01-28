# Drawing Arcs

Draws a circular arc with a given radius, position, and angle.

<div class="justify-center items-center flex">
    <Graph :units="false">
        <Arc :from="0" :to="180" :radius="2" :line-width="1.75" />
        <Arc :position="[2, 0]" :from="180" :to="0" :radius="1" color="red" />
        <Arc :position="[0, -2]" :from="0" :to="270" :radius="1" dashed />
    </Graph>
</div>

::: info

The arc is always drawn **counter-clockwise** from the `from` angle to the `to`
angle.

:::

::: tip

For an easier way to draw angles between lines or vectors,
see the [Angle](/components/angle) component.

To draw a circular sector, see the [Sector](/components/sector) component.

:::

## Props

| Name         | Type              | Default | Description                                                                 |
| ------------ | ----------------- | ------- | --------------------------------------------------------------------------- |
| `from`       | `number`          | `0`     | The starting angle of the arc. Defaults to degrees unless `radians` is set. |
| `to`         | `number`          | `0`     | The ending angle of the arc. Defaults to degrees unless `radians` is set.   |
| `position`   | `PossibleVector2` | `[0,0]` | The position of the center of the arc.                                      |
| `radius`     | `number`          | `3`     | The radius of the arc.                                                      |
| `line-width` | `number`          | `1.25`  | The width of the arc.                                                       |
| `color`      | `string`          | `#000`  | The stroke color of the arc.                                                |
| `dashed`     | `boolean`         | `false` | Whether the arc should be dashed.                                           |
| `radians`    | `boolean`         | `false` | Whether `to` and `from` are provided in radians.                            |

## Examples

### Simple Arc

::: example

```vue
<template>
  <Graph :units="false">
    <Arc :from="0" :to="180" :radius="2" />
  </Graph>
</template>
```

:::

### Arc with Position

::: example

```vue
<template>
  <Graph :units="false">
    <Arc :position="[2, 0]" :from="180" :to="0" :radius="1" color="red" />
  </Graph>
</template>
```

:::

### Arc with Dashed Stroke

::: example

```vue
<template>
  <Graph :units="false">
    <Arc :from="0" :to="270" :radius="2" :line-width="1.75" dashed />
  </Graph>
</template>
```

:::
