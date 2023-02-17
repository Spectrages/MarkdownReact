import { ITheme } from "./theme";

export const downMd = ({ theme }: ITheme) => theme.breakpoints.down("md");

export const primaryMain = ({ theme }: ITheme) => theme.palette.primary.main;
export const primaryBackground = ({ theme }: ITheme) => theme.palette.primary.backgroundColor;