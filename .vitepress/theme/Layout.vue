<template>
  <Layout />
</template>

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { configureGraphs } from "@ksassnowski/vueclid";
import { onMounted } from "vue";

const { Layout } = DefaultTheme;

onMounted(() => {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        configureGraphs({
          // @ts-ignore
          darkMode: mutation.target.classList.contains("dark"),
        });
      }
    }
  });
  const node = document.getElementsByTagName("html")[0];
  observer.observe(node, { attributes: true });

  configureGraphs({
    darkMode: node.classList.contains("dark"),
  });
});
</script>
