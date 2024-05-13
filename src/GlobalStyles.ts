import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html {
        font-size: 16px;
    }
    body {
        background: ${({ theme }: { theme: any }) => theme.bg};
        color:${({ theme }: { theme: any }) => theme.text};
        display: block;
        width: 100%;
        height: 100%;
        font-family:monospace, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: background-color 0.5s, color 0.5s;
    }
    .container-about-in{
        border: 1px solid ${({theme}:{theme:any})=>theme.window_bd}
    }.base-black-svg{
        filter:${({ theme }: { theme: any }) => theme.svg_white};
    }.base-white-svg{
        filter:${({ theme }: { theme: any }) => theme.svg_black};
    }
}

`;