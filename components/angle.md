# Drawing Angles

An angle is defined by three points `a`, `b`, and `c`.
The angle is the angle between the vectors `a-b` and `c-b`.
The angle is drawn with the vertex at `b`.

<div class="justify-center items-center flex">
    <Graph :units="false">
        <Line :from="[1, 2]" :to="[0, -2]" />
        <Line :from="[1, 2]" :to="[-3, 1]" />
        <Point label="a" :position="[-3, 1]" />
        <Point label="b" :position="[1, 2]" label-position="top" />
        <Point label="c" :position="[0, -2]"label-position="left" />
        <Angle :a="[-3, 1]" :b="[1, 2]" :c="[0, -2]" :radius="1.25" />
        <Line :from="[2, 0]" :to="[2.5, -3]" />
        <Line :from="[2, 0]" :to="[4, -2]" />
        <Angle :c="[2.5, -3]" :b="[2, 0]" :a="[4, -2]" :radius="0.7" dashed />
        <Point label="a" :position="[4, -2]" label-position="top" />
        <Point label="b" :position="[2, 0]" label-position="top" />
        <Point label="c" :position="[2.5, -3]"label-position="left" />
    </Graph>
</div>

::: tip

The angle is always drawn **counter-clockwise** from the first vector to the second vector. In other words, the line segment `ab` is the initial side of the angle, and the line segment `bc` is the terminal side of the angle.

:::

## Props

| Name         | Type                             | Default     | Description                         |
| ------------ | -----------------                | -------     | ----------------------------------- |
| `a`          | `PossibleVector2`                | `null`      | The first point of the angle.       |
| `b`          | `PossibleVector2`                | `null`      | The second point of the angle.      |
| `c`          | `PossibleVector2`                | `null`      | The second point of the angle.      |
| `radius`     | `number`                         | `3`         | The radius of the angle's arc.      |
| `line-width` | `number`                         | `1.75`      | The line width of the angle's arc.  |
| `color`      | `string`                         | `#000`      | The stroke color of the angle.      |
| `dashed`     | `boolean`                        | `false`     | Whether the angle should be dashed. |
| `label`      | `string\|undefined`              | `undefined` | The label of the angle.             |
| `label-size` | `"small"\|"normal"\|"large"`     | `small`     | The size of the label.              |

## Examples

### Simple Angle

::: example

```vue
<template>
  <Graph :origin="[0, 5]" :domain-x="[0, 5]" :domain-y="[0, 5]">
    <Vector :to="[4, 2]" />
    <Vector :to="[1, 3]" />
    <Angle :a="[4, 2]" :b="[0, 0]" :c="[1, 3]" :radius="1.25" />
  </Graph>
</template>
```

:::

### Angle with fill color

::: example

```vue
<template>
  <Graph :units="false" :grid="false">
    <Circle :radius="4" />
    <Angle
      :a="[Math.cos(Math.PI / 7), Math.sin(Math.PI / 7)]"
      :b="[0, 0]"
      :c="[Math.cos(Math.PI / 2.5), Math.sin(Math.PI / 2.5)]"
      :radius="1.5"
      fill="#33aabb33"
      color="#33aabbff"
    />
    <Line
      :to="[Math.cos(Math.PI / 2.5) * 4, Math.sin(Math.PI / 2.5) * 4]"
      dashed
    />
    <Line :to="[Math.cos(Math.PI / 7) * 4, Math.sin(Math.PI / 7) * 4]" dashed />
  </Graph>
</template>
```

:::

### Inner and Outer Angles

::: example

```vue
<template>
  <Graph :units="false" :grid="false">
    <Angle
      :a="[Math.cos(Math.PI / 7), Math.sin(Math.PI / 7)]"
      :b="[0, 0]"
      :c="[Math.cos(Math.PI / 2.5), Math.sin(Math.PI / 2.5)]"
      :radius="1.5"
    />
    <Angle
      :a="[Math.cos(Math.PI / 2.5), Math.sin(Math.PI / 2.5)]"
      :b="[0, 0]"
      :c="[Math.cos(Math.PI / 7), Math.sin(Math.PI / 7)]"
      :radius="1"
    />
    <Line
      :to="[Math.cos(Math.PI / 2.5) * 5, Math.sin(Math.PI / 2.5) * 5]"
      dashed
    />
    <Line :to="[Math.cos(Math.PI / 7) * 5, Math.sin(Math.PI / 7) * 5]" dashed />
  </Graph>
</template>
```

:::


### Angle with Label

::: example

```vue
<template>
  <Graph :units="false">
    <Vector :to="[3, -2.2]" />
    <Vector :to="[1, 3]" />
    <Angle :a="[3, -2.2]" :b="[0, 0]" :c="[1, 3]" :radius="1.25" label="θ" />
  </Graph>
</template>
```

:::


### Complex Example

::: example

```vue
<template>
  <Graph :units="false">
    <Line :from="[1, 2]" :to="[0, -2]" />
    <Line :from="[1, 2]" :to="[-3, 1]" />
    <Point label="a" :position="[-3, 1]" />
    <Point label="b" :position="[1, 2]" label-position="top" />
    <Point label="c" :position="[0, -2]" label-position="left" />
    <Angle :a="[-3, 1]" :b="[1, 2]" :c="[0, -2]" :radius="1.25" label="α" />
    <Line :from="[2, 0]" :to="[2.5, -3]" />
    <Line :from="[2, 0]" :to="[4, -2]" />
    <Angle :c="[2.5, -3]" :b="[2, 0]" :a="[4, -2]" :radius="0.7" dashed />
    <Point label="a" :position="[4, -2]" label-position="top" />
    <Point label="b" :position="[2, 0]" label-position="top" />
    <Point label="c" :position="[2.5, -3]" label-position="left" />
  </Graph>
</template>
```

:::
