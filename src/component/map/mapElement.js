import { infoWrapperCss, infoTitle, infoBody, infoItemCss } from './mapElement.Style';
export const getInfoBoxHtml = ({ who }) => {
    const { name, phone, mobile, address } = who;

    return `
        <div style="${infoWrapperCss}">
            <h4 style="${infoTitle}">${name}</h4>
        
            <div style="${infoBody}">
                <p style="${infoItemCss}">座机： ${phone}</p>
                <p style="${infoItemCss}">手机：${mobile}</p>
                <p style="${infoItemCss}">地址：${address}</p>
            </div>
        </div>
    `;
};
