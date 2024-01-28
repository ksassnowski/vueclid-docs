# Getting Started

## Installation

Vueclid can be installed with your favorite package manager:

::: code-group

```bash [npm]
npm install @ksassnowski/vueclid
```

```bash [pnpm]
pnpm add @ksassnowski/vueclid
```

```bash [yarn]
yarn add @ksassnowski/vueclid
```

```bash [bun]
bun add @ksassnowski/vueclid
```

:::

After that, you're ready to create stunning diagrams!

## Usage Example

::: example

```vue
<template>
  <Graph
    :domain-x="[-1.5, 1.5]"
    :domain-y="[-1.5, 1.5]"
    :grid-size="0.5"
    :units="false"
  >
    <Circle :radius="1" color="#aaa" />
    <Line
      :to="[1, Math.tan(0.8)]"
      :line-width="1.5"
      color="lightseagreen"
      dashed
    />
    <Line
      :from="[1, 0]"
      :to="[1, Math.tan(0.8)]"
      :line-width="1.5"
      color="lightseagreen"
      dashed
    />
    <Point
      :position="[1, Math.tan(0.8)]"
      color="lightseagreen"
      label="(1,tan(x))"
      label-position="top"
    />
    <Angle
      :a="[1, 0]"
      :b="[0, 0]"
      :c="[1, Math.tan(0.8)]"
      :radius="0.4"
      dashed
    />
    <Vector :to="[Math.cos(0.8), Math.sin(0.8)]" />
    <Line
      :from="[Math.cos(0.8), 0]"
      :to="[Math.cos(0.8), Math.sin(0.8)]"
      :line-width="1.5"
      color="hotpink"
      dashed
    />
    <Line
      :from="[0, Math.sin(0.8)]"
      :to="[Math.cos(0.8), Math.sin(0.8)]"
      :line-width="1.5"
      color="#33aabb"
      dashed
    />
    <Point :position="[Math.cos(0.8), 0]" color="hotpink" label="cos(x)" />
    <Point
      :position="[0, Math.sin(0.8)]"
      color="#33aabb"
      label="sin(x)"
      label-position="top"
    />
  </Graph>
</template>
```

:::
