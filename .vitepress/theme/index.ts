import DefaultTheme from "vitepress/theme";

import {
  Angle,
  Arc,
  Circle,
  Ellipse,
  FunctionPlot,
  Graph,
  Label,
  Line,
  Point,
  Polygon,
  PolyLine,
  Sector,
  Vector,
} from "@ksassnowski/vueclid";

import "./styles.css";

import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component("Angle", Angle);
    app.component("Arc", Arc);
    app.component("Graph", Graph);
    app.component("Ellipse", Ellipse);
    app.component("Circle", Circle);
    app.component("Line", Line);
    app.component("Label", Label);
    app.component("Vector", Vector);
    app.component("Polygon", Polygon);
    app.component("PolyLine", PolyLine);
    app.component("Point", Point);
    app.component("Sector", Sector);
    app.component("FunctionPlot", FunctionPlot);
  },
};
