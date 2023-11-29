/* eslint-disable */
export type Token = "colors.blueBase" | "colors.light" | "colors.white" | "colors.colorPalette"

export type ColorPalette = "blueBase" | "light" | "white"

export type ColorToken = "blueBase" | "light" | "white" | "colorPalette"

export type AnimationName = 

export type Tokens = {
		colors: ColorToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"