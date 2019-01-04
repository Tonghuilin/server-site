import React                                    from 'react';
import { string, func, shape, arrayOf, number } from 'prop-types';
import debounce                                 from 'lodash/debounce';
import TextInput                                from '../../input/textInput';
import FoundPlaces                              from './foundPlaces';
import { getPlace }                             from '../../provider/map';

// styled component
import { Wrapper } from './placeFinder.style';

let getPlaceDebounced;

const PlaceFinder = ({ query, setQuery, places, setPlaces, coolDown }) => {
    /**
     * define getPlaceDebounced
     */
    if (!getPlaceDebounced) {
        getPlaceDebounced = debounce(
            async (...args) => {
                const res = await getPlace(...args);
                setPlaces(res);
            },
            coolDown,
        );
    }

    /**
     * debounce getPlace
     * @type {Function}
     */

    /**
     * onChange handler
     * @param e
     */
    const onChange = async (e) => {
        const val = e.target.value;

        setQuery(val);

        !val && setPlaces([]); // reset places immediately if no value
        if (val) {
            getPlaceDebounced({ query: val, region: 316 });
        }
    };
    return (
        <Wrapper>
            <TextInput
                id="map-find-place"
                mode="inline-std"
                onChange={onChange}
                label="搜起点"
                value={query}
            />
            {query && places.length ? <FoundPlaces places={places}/> : null}
        </Wrapper>
    );
};

PlaceFinder.propTypes = {
    query:     string,
    setQuery:  func,
    places:    arrayOf(shape({})),
    setPlaces: func,
    coolDown:  number,
};

PlaceFinder.defaultProps = {};

export default PlaceFinder;
