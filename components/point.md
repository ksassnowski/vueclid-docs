# Drawing Points

<div class="flex items-center justify-center">
  <Graph>
    <Point :position="[0, 0]" />
    <Point :position="[2, 3]" :filled="false" label="(2,3)" />
    <Point :position="[-3, 2]" color="hotpink" label="a" label-position="right" />
    <Point :position="[1.5, -3]" color="#33aabb" label="(1.5,-3)" label-position="top" />
  </Graph>
</div>

## Props

| Name             | Type                               | Default  | Description                                                                      |
|------------------| ---------------------------------- | -------- | -------------------------------------------------------------------------------- |
| `position`       | `PossibleVector2`                  | `[0,0]`  | The position of the point.                                                       |
| `color`          | `string`                           | `#000`   | The color of the point and label (if applicable).                               |
| `label`          | `string`                           | _none_   | The label of the point.                                                          |
| `label-position` | `"left"\|"right"\|"top"\|"bottom"` | `bottom` | The position of the label relative to the point.                                 |
| `filled`         | `boolean`                          | `true`   | Whether the point should be filled.                                              |
| `radius`         | `number`                           | `4`      | The radius of the point in pixels.                                               |
| `line-width`     | `number`                           | `1.5`    | The width of the point's outline. Only applicable if `filled` is set to `false`. |

## Examples
