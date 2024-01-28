# Plotting Discontinuous Functions

Say you want to plot a function like `f(x) = 1/x` in the interval `[-5, 5]`.
This function has a vertical asymptote at `x = 0`. If we were to try to plot
this function as-is, this vertical asymptote would show up as a vertical line.

::: example

```vue
<template>
  <Graph>
    <Label text="f(x) = 1/x" :position="[-2.8, 4]" />
    <FunctionPlot :function="(x) => 1 / x" color="red" :line-width="1.75" />
  </Graph>
</template>
```

:::

Instead, you have to break the function up into two or more parts around its
discontinuities.

::: example

```vue
<template>
  <Graph>
    <Label text="f(x) = 1/x" :position="[-2.8, 4]" />
    <FunctionPlot :function="(x) => 1 / x" :domain="[-5, -0.1]" />
    <FunctionPlot :function="(x) => 1 / x" :domain="[0.1, 5]" />
  </Graph>
</template>
```

:::
