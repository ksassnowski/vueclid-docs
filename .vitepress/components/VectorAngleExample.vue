<template>
  <Graph
    :width="600"
    :height="300"
    :domain-x="[-5, 5]"
    :domain-y="[0, 5]"
    :origin="[5, 5]"
    :padding="20"
  >
    <Label :text="`Area: ${area.toFixed(2)}`" :position="[3, 4.35]" />
    <Sector
      :to="angle"
      :radius="radius"
      fill="#33aabb33"
      color="#33aabb"
      radians
    />
    <Angle :a="[1, 0]" :b="[0, 0]" :c="vectorTo" :radius="1.5" dashed />
    <Vector :to="vectorTo" />
  </Graph>

  <div class="flex items-center justify-center">
    <input
      v-model.number="angle"
      class="mt-6"
      type="range"
      :min="0"
      :max="Math.PI"
      step="0.01"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  Graph,
  Vector,
  Angle,
  Label,
  Sector,
  Vector2,
} from "@ksassnowski/vueclid";

const angle = ref(Math.PI / 4);

const radius = 4;
const vectorTo = computed(() => Vector2.fromPolar(angle.value, radius));
const area = computed(() => 0.5 * angle.value * radius ** 2);
</script>
