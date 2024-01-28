<template>
  <Layout />
</template>

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useColors } from "@ksassnowski/vueclid";
import { onMounted } from "vue";

const { Layout } = DefaultTheme;

const { setDarkMode } = useColors();

onMounted(() => {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        // @ts-ignore
        setDarkMode(mutation.target.classList.contains("dark"));
      }
    }
  });
  const node = document.getElementsByTagName("html")[0];
  observer.observe(node, { attributes: true });

  setDarkMode(node.classList.contains("dark"));
});
</script>
