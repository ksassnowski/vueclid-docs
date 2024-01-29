import { defineConfig } from "vitepress";
import container from "markdown-it-container";
import { nanoid } from "nanoid";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vueclid-docs/",
  title: "vueclid",
  description: "Delightfully simple math diagrams",
  themeConfig: {
    logo: {
      light: "/images/logo.svg",
      dark: "/images/logo_dark.svg",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/installation" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/installation" },
          { text: "Basic Usage", link: "/basic-usage" },
          { text: "Configuration", link: "/configuration" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Graph", link: "/components/graph" },
          { text: "Vector", link: "/components/vector" },
          { text: "Line", link: "/components/line" },
          { text: "Polyline", link: "/components/polyline" },
          { text: "Arc", link: "/components/arc" },
          { text: "Angle", link: "/components/angle" },
          { text: "Point", link: "/components/point" },
          { text: "Label", link: "/components/label" },
          { text: "Circle", link: "/components/circle" },
          { text: "Ellipse", link: "/components/ellipse" },
          { text: "Sector", link: "/components/sector" },
          { text: "Polygon", link: "/components/polygon" },
          { text: "Plot", link: "/components/function-plot" },
        ],
      },
      {
        text: "Guides",
        items: [
          {
            text: "Plotting discontinuous functions",
            link: "/guides/discontinuous-functions",
          },
          {
            text: "Adding Interactivity",
            link: "/guides/interactivity",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ksassnowski/vueclid" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(container, "example", {
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            let component = "";
            const name = nanoid(5);
            for (
              let i = idx + 1;
              !(
                tokens[i].nesting === -1 &&
                tokens[i].type === "container_example_close"
              );
              ++i
            ) {
              if (tokens[i].type === "fence" && tokens[i].tag === "code") {
                component += tokens[i].content.replace(/<\/?template>/g, "");
              }
            }

            return `<div class="flex items-center justify-center">${component}</div><details class="details custom-block">\n<summary>Code</summary>\n`;
          }
          return `</details>\n`;
        },
      });
    },
  },
});
