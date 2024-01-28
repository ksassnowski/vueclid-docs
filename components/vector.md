# Drawing Vectors

<div class="justify-center items-center flex">
  <Graph :units="false" :domain-x="[0, 5]" :domain-y="[0, 5]" :origin="[0, 5]" :grid-size="0.5">
    <Vector :to="[3, 2]" label="a" />
    <Vector :to="[1, 4]" color="lightseagreen" label="b" />
    <Vector :from="[1, 4]" :to="[3, 2]" color="#33aabb" label="a-b" dashed />
  </Graph>
</div>

## Props

| Name         | Type                          | Description                                           | Default     |
|--------------|-------------------------------|-------------------------------------------------------|-------------|
| `from`       | `PossibleVector2`             | The start position of the vector in local units       | `[0,0]`     |
| `to`         | `PossibleVector2`             | The end position of the vector in local units         | _none_      |
| `color`      | `string`                      | The color of the vector                               | `#000`      |
| `dashed`     | `boolean`                     | Whether the vector should be drawn with a dashed line | `false`     |
| `label`      | `string`                      | The label text for this vector.                       | `undefined` |
| `label-size` | `"small"\| "normal"\|"large"` | The size of the label text                            | `"normal"`  |
| `line-width` | `number`                      | The line width of the vector                          | `1.75`      |
| `arrow-size` | `number`                      | The size of the vector's arrow                        | `13`        |

## Examples

### Basic Vector

::: example

```vue
<template>
  <Graph>
    <Vector :to="[3, 2]" />
  </Graph>
</template>
```

:::


### Vector with a label

::: example

```vue
<template>
  <Graph>
    <Vector :to="[-2, -3]" label="a" />
  </Graph>
</template>
```

:::


### Vector not starting at the origin

::: example

```vue
<template>
  <Graph>
    <Vector :from="[3, 3]" :to="[1, 1]" />
  </Graph>
</template>
```

:::


### Multiple Vectors

::: example

```vue
<template>
  <Graph>
    <Vector :to="[4, 1]" label="a" />
    <Vector :to="[1, 4]" color="lightseagreen" label="b" />
    <Vector :from="[1, 4]" :to="[4, 1]" color="steelblue" label="a-b" dashed />
  </Graph>
</template>
```

:::