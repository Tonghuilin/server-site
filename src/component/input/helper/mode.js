import { MODE } from '../const';

const hasMode = (mode) => MODE.indexOf(mode) > -1;

const validateMode = (mode) => {
    const exist = hasMode(mode);

    if (!exist) {

    }
};
