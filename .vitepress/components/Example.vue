<template>
  <div class="flex flex-col items-center justify-center">
    <Graph :units="false" :grid="false" :axis="false">
      <Sector :radius="3" :from="-angle" :to="0" :fill="currentColor" />
      <Arc :from="0" :to="-angle" :radius="1.5" dashed />
    </Graph>

    <input
      type="range"
      :min="-359.9"
      :max="-0.01"
      v-model.number="angle"
      :step="0.01"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useColors } from "@ksassnowski/vueclid";

const { setColors } = useColors();
setColors({
  light: {
    stroke: "hotpink",
  },
});
const angle = ref(-90);

const fromColor = {
  light: "#e84ee0",
  dark: "#4ec4e8",
};
const toColor = {
  light: "#3aa6d5",
  dark: "#e74b62",
};

const currentColor = computed(() => {
  const t = (angle.value + 360) / 360;

  return {
    light: `${rgbToHex(
      lerpRGB(hexToRGB(fromColor.light), hexToRGB(toColor.light), t),
    )}88`,
    dark: `${rgbToHex(
      lerpRGB(hexToRGB(fromColor.dark), hexToRGB(toColor.dark), t),
    )}88`,
  };
});

function lerpRGB(
  from: [number, number, number],
  to: [number, number, number],
  t: number,
): [number, number, number] {
  return [
    from[0] + (to[0] - from[0]) * t,
    from[1] + (to[1] - from[1]) * t,
    from[2] + (to[2] - from[2]) * t,
  ];
}

function rgbToHex(rgb: [number, number, number]) {
  return (
    "#" +
    rgb
      .map((c) => Math.round(c).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function hexToRGB(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}
</script>
