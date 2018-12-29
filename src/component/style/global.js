import { css }  from '@emotion/core';
import variable from './variable';

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
            font-family: ${variable.font};
            font-size: ${variable.fontSize}px;
            margin: 0;
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

    const animationFloat = css`
        @keyFrames float {
            0% {transform: translateY(0)}
            25% {transform: translateY(15%)}
            50% {transform: translateY(0)}
            75% {transform: translateY(-15%)}
            100% {transform: translateY(0)}
        }
    `;

    return {
        body,
        all,
        a,
        animationFloat,
    };
};
