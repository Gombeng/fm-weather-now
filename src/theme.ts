import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// * run this cmd: npx @chakra-ui/cli typegen ./theme.ts

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1440px",
    },

    tokens: {
      colors: {
        neutral: {
          900: { value: "hsl(243, 96%, 9%)" },
          800: { value: "hsl(243, 27%, 20%)" },
          700: { value: "hsl(243, 23%, 24%)" },
          600: { value: "hsl(243, 23%, 30%)" },
          300: { value: "hsl(240, 6%, 70%)" },
          200: { value: "hsl(250, 6%, 84%)" },
          0: { value: "hsl(0, 0%, 100%)" },
        },

        orange: {
          500: { value: "hsl(28, 100%, 52%)" },
        },

        blue: {
          500: { value: "hsl(233, 67%, 56%)" },
          700: { value: "hsl(248, 70%, 36%)" },
        },
      },

      fonts: {
        body: {
          value: "'DM Sans', system-ui, sans-serif",
        },
        heading: {
          value: "'Bricolage Grotesque', system-ui, sans-serif",
        },
      },

      fontSizes: {
        body: { value: "18px" },
      },
    },

    semanticTokens: {
      colors: {
        bg: {
          default: { value: "{colors.neutral.0}" },
          muted: { value: "{colors.neutral.200}" },
        },
        text: {
          primary: { value: "{colors.neutral.900}" },
          secondary: { value: "{colors.neutral.600}" },
          muted: { value: "{colors.neutral.300}" },
        },
        accent: {
          default: { value: "{colors.orange.500}" },
          subtle: { value: "{colors.blue.500}" },
        },
      },
    },

    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
