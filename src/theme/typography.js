import { css } from 'styled-components'

const defaultFontFamily = `'Mulish', sans-serif`

export const typography = {
    heading1: css`
        font-family: ${defaultFontFamily};
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 3.5rem;
        letter-spacing: -0.5px;
    `,
    heading2: css`
        font-family: ${defaultFontFamily};
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.5rem;
        letter-spacing: -0.5px;
    `,
    heading3: css`
        font-family: ${defaultFontFamily};
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: -0.5px;
    `,
    heading4: css`
        font-family: ${defaultFontFamily};
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
        letter-spacing: -0.5px;
    `,

    heading5: css`
        font-family: ${defaultFontFamily};
        font-weight: 700;
        font-size: max(0.83rem, min(1rem + 16vw, 1.25rem));
        line-height: 1.4rem;
        letter-spacing: 0;
    `,
    heading6: css`
        font-family: ${defaultFontFamily};
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: -0.5px;
    `,

    paragraph: css`
        font-family: ${defaultFontFamily};
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: -0.5px;
    `,

    small: css`
        font-family: ${defaultFontFamily};
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: -0.5px;
    `,
}
