import React                    from 'react';
import { string, number, bool } from 'prop-types';
import Avatar                   from '../avatar';
import TeamItemInfo             from './teamItemInfo';

// styled component
import { Item, ItemInner } from './teamItem.style';

const TeamItem = ({ thumbnail, name, position, description, index, reflective }) => {

    return (
        <Item index={index} reflective={reflective}>
            <ItemInner index={index} hoverable={Boolean(description)}>
                <Avatar title={`${name}, ${position}`} url={thumbnail}/>
                <TeamItemInfo name={name} position={position} description={description} />
            </ItemInner>
        </Item>
    );
};

TeamItem.propTypes = {
    thumbnail:   string,
    name:        string,
    position:    string,
    description: string,
    index:       number.isRequired,
    reflective:  bool,
};

TeamItem.defaultProps = {
    thumbnail:   '',
    name:        '',
    position:    '',
    description: '',
    reflective:  false,
};

export default TeamItem;
