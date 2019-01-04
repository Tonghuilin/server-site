import React, { useState }                from 'react';
import { number, string, arrayOf, shape } from 'prop-types';
import PlaceFinder                        from './placeFinder';
import HotPlaces                          from './hotPlaces';

// styled component
import { Container, Content } from '../../style/styled-component';
import { Wrapper }            from './index.style';

export const RouteFinderContext = React.createContext();

const RouteFinder = ({ coolDown, hotPlaces }) => {
    const [places, setPlaces] = useState([]);
    const [query, setQuery]   = useState('');

    return (
        <RouteFinderContext.Provider value={{ places, setPlaces, query, setQuery }}>
            <Wrapper>
                <Container>
                    <Content>
                        <HotPlaces places={hotPlaces}/>

                        <PlaceFinder
                            places={places}
                            setPlaces={setPlaces}
                            query={query}
                            setQuery={setQuery}
                            coolDown={coolDown}
                        />
                    </Content>
                </Container>
            </Wrapper>
        </RouteFinderContext.Provider>
    );
};

RouteFinder.propTypes = {
    coolDown:  number,
    hotPlaces: arrayOf(shape({
        lat:   number,
        lng:   number,
        title: string,
    })),
};

RouteFinder.defaultProps = {
    coolDown:  300,
    hotPlaces: [],
};

export default RouteFinder;
