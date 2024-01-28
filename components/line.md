# Drawing Lines

<div class="justify-center items-center flex">
  <Graph :units="false">
    <Line :slope="-2" />
    <Line :from="[1, 3]" :to="[3, 3]" color="red" />
    <Line :from="[-4, -3]" :to="[-3, 2]" color="lightseagreen" dashed />
  </Graph>
</div>

## Defining Lines

Lines can either be defined by a slope and a y-intercept, or by two points.

To draw a line using slope and y-intercept, use the `slope` and `y-intercept`
props:

::: example

```vue
<template>
  <Graph>
    <Line :slope="-2" :y-intercept="2" />
  </Graph>
</template>
```

:::

To draw a line segment using two points, use the `from` and `to` props:

::: example

```vue
<template>
  <Graph>
    <Line :from="[-2, -4]" :to="[3, 3]" />
  </Graph>
</template>
```

:::

::: info

When defining lines, you should either use the `slope` and `y-intercept` props,
or the `from` and `to` props. Using both will prefer `from` and `to`.

:::

## Props

| Name          | Type              | Default | Description                        |
| ------------- | ----------------- | ------- | ---------------------------------- |
| `from`        | `PossibleVector2` | `[0,0]` | The starting point of the line.    |
| `to`          | `PossibleVector2` | _none_  | The ending point of the line.      |
| `slope`       | `number`          | _none_  | The slope of the line.             |
| `y-intercept` | `number`          | _none_  | The y-intercept of the line.       |
| `line-width`  | `number`          | `1.75`  | The width of the line.             |
| `color`       | `string`          | `#000`  | The color of the line.             |
| `dashed`      | `boolean`         | `false` | Whether the line should be dashed. |
| `label`       | `string`          | _none_  | The label of the line.             |

## Examples

### Basic Line with Slope and Y-Intercept

::: example

```vue
<template>
  <Graph>
    <Line :slope="-2" :y-intercept="2" />
  </Graph>
</template>
```

:::

### Line Segment Between Two Points

::: example

```vue
<template>
  <Graph>
    <Line :from="[-2, -4]" :to="[3, 3]" />
  </Graph>
</template>
```

:::

### Line with a Label

::: example

```vue
<template>
  <Graph>
    <Line :slope="-2" :y-intercept="2" label="y = -2x+2" />
  </Graph>
</template>
```

:::

### Complex Example

::: example

```vue
<template>
  <Graph>
    <Line
      :from="[-5, -1.5]"
      :to="[0.9, -1.5]"
      label="(-∞,1)"
      label-size="normal"
      dashed
    />
    <Line :from="[1, 1]" :to="[5, 5]" label="[1,∞)" label-size="normal" />
    <Point :position="[1, -1.5]" :filled="false" />
    <Point :position="[1, 1]" />
  </Graph>
</template>
```

:::
