import { css }     from '@emotion/core';
import variable    from './variable';
import { pxToRem } from './mixin';
import mq          from './mq';

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
            font-size: ${variable.fontSize * 14 / 16}px;
            font-weight: 100;
            letter-spacing: ${pxToRem(.4)};
            line-height: 1.5;
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
            25% {transform: translateY(5%)}
            50% {transform: translateY(0)}
            75% {transform: translateY(-5%)}
            100% {transform: translateY(0)}
        }
    `;

    const animationRiseSet = css`
        @keyFrames rise-set {
            0% {transform: translate(0, 60%)}
            25% {transform: translate(25%, 20%)}
            50% {transform: translate(50%, 10%)}
            75% {transform: translate(75%, 20%)}
            100% {transform: translate(100%, 60%)}
        }
    `;

    const animationLdsFacebook = css`
        @keyframes lds-facebook {
            0% {
                top: 6px;
                height: 51px;
            }
            50%, 100% {
                top: 19px;
                height: 26px;
            }
        }
    `;

    const mediaQueries = css`        
        ${mq.tabletLandscape} {
            body {
                font-size: ${variable.fontSize}px;
            }
        }
    `;

    return {
        body,
        all,
        a,
        animationFloat,
        animationRiseSet,
        animationLdsFacebook,
        mediaQueries,
    };
};
