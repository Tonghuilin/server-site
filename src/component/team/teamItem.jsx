import React                    from 'react';
import { string, number, bool } from 'prop-types';
import Avatar                   from '../avatar';

import { Item } from './index.style';

const TeamItem = ({ thumbnail, name, position, index, reflective }) => {

    return (
        <Item index={index} reflective={reflective}>
            <Avatar title={`${name}, ${position}`} url={thumbnail}/>
        </Item>
    );
};

TeamItem.propTypes = {
    thumbnail:  string,
    name:       string,
    position:   string,
    index:      number.isRequired,
    reflective: bool,
};

TeamItem.defaultProps = {
    thumbnail:  '',
    name:       '',
    position:   '',
    reflective: false,
};

export default TeamItem;
