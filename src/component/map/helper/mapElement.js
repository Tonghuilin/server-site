import color       from '../../style/color';
import { pxToRem, rgba } from '../../style/mixin';
import vars        from '../../style/variable';

export const infoWrapperCss = `
    background-color: ${color.periglacialBlue};
    color: ${color.cadet};
    border: ${pxToRem(2)} solid ${color.cadet};
    border-radius: ${pxToRem(5)};
    font-size: ${vars.fontSize};
    height: 100%;
    position: relative;
    z-index: -1;
`;

export const infoInner = `
    background-color: inherit;
    height: 100%;
    padding: ${pxToRem(8)};
    position: relative;
    z-index: 1;
`;

export const infoArrowCss = `
    background-color: ${color.cadet};
    bottom: ${pxToRem(-8)};
    height: ${pxToRem(16)};
    left: 50%;
    position: absolute;
    transform: translateX(-50%) rotate(45deg);
    width: ${pxToRem(16)};
`;

export const infoTitle = `
    margin: 0 0 .5rem 0;
`;

export const infoBody = `
    border-top: ${pxToRem(1)} solid ${rgba(color.cadet, 0.1)};
    font-size: 0.9em;
`;

export const infoItemCss = `
    margin: ${pxToRem(6)} 0;
`;


export const getInfoBoxHtml = ({ info }) => {
    const { name, phone, mobile, address } = info;

    return `
        <div style="${infoWrapperCss}">
            <div style="${infoInner}">
                <h4 style="${infoTitle}">${name}</h4>
            
                <div style="${infoBody}">
                    <p style="${infoItemCss}">座机： ${phone}</p>
                    <p style="${infoItemCss}">手机：${mobile}</p>
                    <p style="${infoItemCss}">地址：${address}</p>
                </div>
            </div>
                
            <div style="${infoArrowCss}"/>
        </div>
    `;
};
