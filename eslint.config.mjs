import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default withNuxt().prepend(
  {
    name: "custom-eslint-config",
    files: ["**/*.js", "**/*.mjs", "**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/attribute-hyphenation": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "any",
            normal: "never",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
    },
  },
  eslintConfigPrettier,
);
