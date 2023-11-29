const tokens = {
  "colors.blueBase": {
    "value": "#00a0d0",
    "variable": "var(--colors-blue-base)"
  },
  "colors.light": {
    "value": "#c8c8c8",
    "variable": "var(--colors-light)"
  },
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar