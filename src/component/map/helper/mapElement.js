export const infoWrapperCss = `
    background-color: white;
    border: 2px solid green;
    font-size: 14px;
    height: 100%;
    padding: 10px;
`;

export const infoTitle = `
    margin: 0 0 .5rem 0;
`;

export const infoBody = `
    border-top: 2px solid green;
`;

export const infoItemCss = `
    margin: .5rem 0;
`;


export const getInfoBoxHtml = ({ info }) => {
    const { name, phone, mobile, address } = info;

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
