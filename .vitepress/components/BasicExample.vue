<template>
  <div class="flex flex-col items-center justify-center">
    <Graph>
      <Circle :radius="4" />
      <Angle
        :a="[1, 0]"
        :b="[0, 0]"
        :c="to"
        :radius="1.5"
        color="#33aabb"
        :fill="{ light: '#33aabb33', dark: '#33aabb66' }"
        label="θ"
        dashed
      />
      <Vector :to="to" />
    </Graph>

    <input
      type="range"
      :min="0"
      :max="2 * Math.PI - 0.001"
      v-model.number="angle"
      :step="0.01"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Graph, Circle, Angle, Vector, Vector2 } from "@ksassnowski/vueclid";

const angle = ref(Math.PI / 4);
const to = computed(() => Vector2.fromPolar(angle.value, 4));
</script>
