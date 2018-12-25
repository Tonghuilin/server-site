import Color from './color';

export const light = {
    font:            'Helvetica, Tahoma, Arial, STXihei, “华文细黑”, ' +
                     '“Microsoft YaHei”, “微软雅黑”, SimSun, “宋体”, Heiti, “黑体”, sans-serif',
    color:           {
        body:   Color.dune,
        button: Color.white,
    },
    backgroundColor: {
        body:   Color.white,
        button: Color.puertoRico,
    },
};

const theme = {
    light,
};

export default theme;
