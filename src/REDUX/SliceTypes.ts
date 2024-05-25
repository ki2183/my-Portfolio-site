export const lightTheme = {
    bg:"white",
    text:"black",
    theme:"light",
    tree_info_bg:"white",
    tree_info_border:"#8181815a",
    window:"linear-gradient(30deg, rgb(231 231 231), rgb(247 247 247))",
    window_bd:"#bebebe",
    svg_black:"invert(100%)",
    svg_white:"invert(0%)",
    modal_svg_bg:"linear-gradient(135deg, #dddddd, #e7e7e7 75%)",
    modal_svg_bd:"1px solid rgb(203 203 203)",
    modal_scroll_button:"#d2d2d2",
}

export const darkTheme = {
    bg:"black",
    text:"white",
    theme:"dark",
    tree_info_bg:"rgba(132, 132, 132, 0.438)",
    tree_info_border:"#ffffff42",
    window:"linear-gradient(31deg, rgb(36, 36, 36), rgb(48 48 48) 75%)",
    window_bd:"#bebebe",
    svg_black:"invert(0%)",
    svg_white:"invert(100%)",
    modal_svg_bg:"linear-gradient(135deg, black, #0d0d0d 75%)",
    modal_svg_bd:"1px solid rgb(70, 70, 70)",
    modal_scroll_button:"#4b4b4b",
}

export type Theme = typeof lightTheme