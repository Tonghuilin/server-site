import axios            from 'axios';
import { formatSearch } from '../../helper/url';
import logger           from '../../helper/logger';

const URL = 'http://api.map.baidu.com/place/v2/suggestion';

/**
 *
 *
 * @param {{}}              params
 * @param {string}          params.query
 * @param {string}          params.region
 * @param {boolean}         [params.city_limit]
 * @param {string}          [params.location]       e.g. 40.047857537164,116.31353434477
 * @param {string|number}   [params.coord_type]     1（WGS84ll）2（GCJ02ll）3（BD09ll）4（BD09mc）
 * @param {string}          [params.ret_coordtype]
 * @param {string}          [params.output]         json/xml
 * @param {{}}              config
 *
 * @returns {Promise<array>}
 */
export const getPlace = async (params = {}, config = {}) => {
    const defaultRes = [];
    const isValid    = params.hasOwnProperty('query') && params.hasOwnProperty('region');

    if (!isValid) {
        logger.warn('param "query" or "region" not found', params);
        return defaultRes;
    }

    const paramsWithConfig = {
        ak:         process.env.KEY_BMAP,
        city_limit: true,
        output:     'json',
        ...params,
    };

    try {
        const { data } = await axios.get(`${URL}?${formatSearch(paramsWithConfig)}`);

        if (data.status !== 0) {
            logger.warn(data);
            return defaultRes;
        }
        return data.result;
    } catch (error) {
        logger.warn(error);
        return defaultRes;
    }
};

export default {
    getPlace,
};
