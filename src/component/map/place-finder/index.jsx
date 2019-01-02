import React, { useState } from 'react';
import { number }          from 'prop-types';
import debounce            from 'lodash/debounce';
import TextInput           from '../../input/textInput';
import { getPlace }        from '../../provider/map';
import PlaceList           from './placeList';

// styled component
import { Wrapper } from './index.style';

let getPlaceDebounced;

const PlaceFinder = ({ coolDown }) => {
    const [places, setPlaces] = useState([]);
    const [query, setQuery]   = useState('');

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
            <TextInput id="map-find-place" onChange={onChange} value={query}/>
            {query ? <PlaceList places={places}/> : null}
        </Wrapper>
    );
};

PlaceFinder.propTypes = {
    coolDown: number,
};

PlaceFinder.defaultProps = {
    coolDown: 300,
};

export default PlaceFinder;
