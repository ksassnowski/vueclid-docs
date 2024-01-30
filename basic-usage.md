# Basic Usage

<script setup>
import BasicExample from "./.vitepress/components/BasicExample.vue";
</script>

This page provides a short walk through on how to set up a basic, interactive diagram.

## Drawing the Grid

The easiest possible diagram is a blank grid.

::: example

```vue
<template>
  <Graph />
</template>
```

:::

Every diagram consists of a top-level [`Graph`](/components/graph) component. This component is responsible for drawing the axes, grid and units, all of which can be turned on and off with the respective props.

::: warning

Even when drawing a diagram without axes or a grid, you still need to wrap the other components inside a `Graph` component. This is because the `Graph` component provides the coordinate system for all other components.

:::

## Adding Elements

To add more elements to the diagram, you add them as children of the `Graph` component. For example, let's add a circle and a vector to the diagram.

::: example

```vue
<template>
  <Graph>
    <Circle :radius="4" />
    <Vector :to="[Math.cos(0.8) * 4, Math.sin(0.8) * 4]" />
  </Graph>
</template>
```

:::

Notice that both the circle's radius and the vector's coordinates are given in local units. Vueclid will take care of converting them to the correct pixel coordinates.

All properties that deal with coordinates take a `PossibleVector2` as their value. This is a type alias in order to provide maximum compatibility with other libraries you might be using.

```ts
type PossibleVector2 =
  | number
  | Vector2
  | [number, number]
  | { x: number; y: number };
```

`Vector2` is a class provided by Vueclid which represents a 2D vector. It is mostly used internally by Vueclid, but you can also use it in your own code if you want.

```ts
import { Vector2 } from "@ksassnowski/vueclid";

const vector = new Vector2(1, 2);
```

Let's also draw the angle between the vector and the positive x-axis.

::: example

```vue
<template>
  <Graph>
    <Circle :radius="4" />
    <Vector :to="[Math.cos(0.8) * 4, Math.sin(0.8) * 4]" />
    <Angle
      :a="[1, 0]"
      :b="[0, 0]"
      :c="[Math.cos(0.8), Math.sin(0.8)]"
      :radius="1.5"
      :fill="{ light: '#33aabb33', dark: '#33aabb66' }"
      color="#33aabb"
      dashed
    />
  </Graph>
</template>
```

:::

Notice the value we're passing to the `fill` prop.

```vue{6}
<Angle
  :a="[1, 0]"
  :b="[0, 0]"
  :c="[Math.cos(0.8), Math.sin(0.8)]"
  :radius="1.5"
  :fill="{ light: '#33aabb33', dark: '#33aabb66' }"
  color="#33aabb"
  dashed
/>
```

This is a `Color` object that specifies the fill color for both light and dark mode. You can also pass a single color string, which will be used for both modes. Check out the [Configuration](/configuration) page for more information on how to configure the colors.

## Making things interactive

Finally, let's add some basic interactivity to the diagram by letting the user change the angle of the vector.

First, we'll add a slider and hook it up to a regular Vue `ref`. This will be the value for our angle.

```vue
<template>
  <!-- Graph component cut for brevity -->

  <input
    v-model.number="angle"
    type="range"
    :min="0"
    :max="2 * Math.PI - 0.001"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Graph, Circle, Vector, Angle } from "@ksassnowski/vueclid";

const angle = ref(Math.PI / 4);
</script>
```

Next, instead of hard-coding the vector's `to` position, we'll use a computed property to calculate it from the angle. This way, the vector will automatically point in the correct direction whenever the angle changes.

```vue
<template>
  <Graph>
    <Circle :radius="4" />
    <Vector :to="to" />
  </Graph>

  <input
    v-model.number="angle"
    type="range"
    :min="0"
    :max="2 * Math.PI - 0.001"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Graph, Circle, Vector, Angle, Vector2 } from "@ksassnowski/vueclid";

const angle = ref(Math.PI / 4);
const to = computed(() => Vector2.fromPolar(angle.value, 4)); // [!code ++]
</script>
```

Finally, we'll update the angle component to use the computed property as well.

```vue {7}
<template>
  <Graph>
    <Circle :radius="4" />
    <Angle
      :a="[1, 0]"
      :b="[0, 0]"
      :c="to"
      :radius="1.5"
      :fill="{ light: '#33aabb33', dark: '#33aabb66' }"
      color="#33aabb"
      dashed
    />
    <Vector :to="to" />
  </Graph>

  <input
    v-model.number="angle"
    type="range"
    :min="0"
    :max="2 * Math.PI - 0.001"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Graph, Circle, Vector, Angle, Vector2 } from "@ksassnowski/vueclid";

const angle = ref(Math.PI / 4);
const to = computed(() => Vector2.fromPolar(angle.value, 4));
</script>
```

That's it! You can now drag the slider to change the angle of the vector.

<BasicExample />

::: details Code

<<< @/.vitepress/components/BasicExample.vue

:::
