import { css } from '@emotion/core';

/**
 * get global style by theme, e.g. body style
 *
 * @param theme
 * @returns {{body: SerializedStyles, all: SerializedStyles}}
 */
export default ({ theme }) => {
    const body = css`
        body {
            background-color: ${theme.backgroundColor.body};
            color: ${theme.color.body};
            font-family: ${theme.font};
            font-size: ${theme.fontSize}px;
        }
    `;

    const all = css`
        * {
            box-sizing: border-box;
        }
    `;

    const a = css`
        a {
            color: ${theme.color.a};
            font-weight: bold;
        }
    `;

    return {
        body,
        all,
        a,
    };
};
