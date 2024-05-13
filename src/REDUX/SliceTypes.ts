export const lightTheme = {
    bg:"white",
    text:"black",
    theme:"light",
    tree_info_bg:"white",
    tree_info_border:"#8181815a",
    window:"linear-gradient(30deg, rgb(231 231 231), rgb(247 247 247), rgb(231 231 231))",
    window_bd:"#bebebe",
    svg_black:"invert(100%)",
    svg_white:"invert(0%)"
}

export const darkTheme = {
    bg:"black",
    text:"white",
    theme:"dark",
    tree_info_bg:"rgba(132, 132, 132, 0.438)",
    tree_info_border:"#ffffff42",
    window:"linear-gradient(31deg, rgb(36, 36, 36), rgb(51, 51, 51) 75%)",
    window_bd:"#bebebe",
    svg_black:"invert(0%)",
    svg_white:"invert(100%)"
}

export type Theme = typeof lightTheme

