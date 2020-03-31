const colorBases = {
  background: {
    primary: "--background-primary",
    secondary: "--background-secondary",
  },
  text: {
    primary: "--text-primary",
    secondary: "--text-secondary",
    active: "--text-active",
  },
  actionable: "--actionable",
};

export const colorVariables = {
  ":root": {
    [colorBases.background.primary]: "hsl(0, 0%, 100%)",
    [colorBases.background.secondary]: "hsl(0, 0%, 96%)",
    [colorBases.text.primary]: "hsl(0, 0%, 30%)",
    [colorBases.text.secondary]: "hsl(0, 0%, 60%)",
    [colorBases.text.active]: "hsl(0, 0%, 0%)",
    [colorBases.actionable]: "hsl(44, 100%, 75%)",

    "@media (prefers-color-scheme: dark)": {
      [colorBases.background.primary]: "hsl(0, 0%, 10%)",
      [colorBases.background.secondary]: "hsl(0, 0%, 16%)",
      [colorBases.text.primary]: "hsl(0, 0%, 80%)",
      [colorBases.text.secondary]: "hsl(0, 0%, 40%)",
      [colorBases.text.active]: "hsl(0, 0%, 70%)",
      [colorBases.actionable]: "hsla(44, 100%, 33%, 0.4)",
    },
  },
};

export const colors = {
  background: {
    primary: `var(${colorBases.background.primary})`,
    secondary: `var(${colorBases.background.secondary})`,
  },
  text: {
    primary: `var(${colorBases.text.primary})`,
    secondary: `var(${colorBases.text.secondary})`,
    active: `var(${colorBases.text.active})`,
  },
  actionable: `var(${colorBases.actionable})`,
};
