import React, { useState }                from 'react';
import { number, string, arrayOf, shape } from 'prop-types';
import PlaceFinder                        from './placeFinder';
import HotPlaces                          from './hotPlaces';

// styled component
import { Container, Content } from '../../style/styled-component';
import { Wrapper, Heading }   from './index.style';

export const RouteFinderContext = React.createContext();

const RouteFrom = ({ title, coolDown, hotPlaces }) => {
    const [places, setPlaces] = useState([]);
    const [query, setQuery]   = useState('');

    return (
        <RouteFinderContext.Provider value={{ places, setPlaces, query, setQuery }}>
            <Wrapper>
                <Container>
                    <Content>
                        { Boolean(title) && <Heading>{title}</Heading> }

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

RouteFrom.propTypes = {
    title:     string,
    coolDown:  number,
    hotPlaces: arrayOf(shape({
        lat:   number,
        lng:   number,
        title: string,
    })),
};

RouteFrom.defaultProps = {
    title:     '',
    coolDown:  300,
    hotPlaces: [],
};

export default RouteFrom;
