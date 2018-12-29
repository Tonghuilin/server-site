const font            = 'Helvetica, Tahoma, Arial, STXihei, “华文细黑”, ' +
                        '“Microsoft YaHei”, “微软雅黑”, SimSun, “宋体”, Heiti, “黑体”, sans-serif';
const fontSize        = 16;
const transitionStyle = 'cubic-bezier(.88,.01,.68,1)';
const transitionTime  = '0.2s';
const transition      = `${transitionTime} cubic-bezier(.88,.01,.68,1)`;
const breakpoint      = {
    mobile:          320,
    tablet:          640,
    tabletLandscape: 900,
    desktop:         1200,
};

export default {
    font,
    fontSize,
    transitionStyle,
    transitionTime,
    transition,
    breakpoint,
};
