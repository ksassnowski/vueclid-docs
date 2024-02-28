# Drawing Labels

<div class="flex justify-center items-center">
    <Graph>
        <Label :position="[0, 0]" text="(0,0)" />
        <Label :position="[2, 3]" text="Such wow!" color="hotpink" />
    </Graph>
</div>


## Props

| Name       | Type                             | Default    | Description                                                  |
| ---        | ------------------------------   | ---------- | ------------------------------------------------------------ |
| `text`     | `string`                         | _none_     | The text of the label.                                       |
| `position` | `PossibleVector2`                | `[0,0]`    | The position of the label. Relative to the label's center.   |
| `color`    | `string`                         | `#000`     | The color of the label.                                      |
| `size`     | `"small"`\|`"normal"`\|`"large"` | `normal`   | The size of the label.                                       |
| `rotation` | `number`                         | `0`        | The counter-clockwise rotation of the label in degrees.      |
| `border`   | `boolean`                        | `true`     | Whether the label should be drawn with a border.             |

## Examples

### Basic Label

::: example

```vue
<template>
  <Graph :units="false">
    <Label :position="[2, 3]" text="Hello, World!" />
  </Graph>
</template>
```

:::


### Different sizes

::: example

```vue
<template>
  <Graph :units="false" :grid="false" :axis="false">
    <Label :position="[0, 2]" text="Small" size="small" />
    <Label :position="[0, 0]" text="Normal" size="normal" />
    <Label :position="[0, -2]" text="Large" size="large" />
  </Graph>
</template>
```

:::


### Custom colors

::: example

```vue
<template>
  <Graph :units="false" :grid="false" :axis="false">
    <Label :position="[0, 2]" text="Hot Pink!" color="hotpink" />
    <Label :position="[0, 0]" text="Light Sea Green!" color="lightseagreen" />
    <Label :position="[0, -2]" text="Dark Slate Blue!" color="darkslateblue" />
  </Graph>
</template>
```

:::


### Rotated Label

::: example

```vue
<template>
  <Graph :units="false" :grid="false" :axis="false">
    <Label :position="[0, 2]" text="30° rotation!" :rotation="30" />
  </Graph>
</template>
```

:::


### Label Without Border


::: example

```vue
<template>
  <Graph :units="false" :grid="false" :axis="false">
    <Label text="Just Text" :border="false" />
  </Graph>
</template>
```

:::

