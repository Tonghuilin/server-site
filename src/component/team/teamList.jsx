import React                            from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import TeamItem                         from './teamItem';

// styled component
import { List } from './index.style';

const TeamList = ({ team, reflective }) => {
    return team.length ? (
        <List>
            {
                team.map((props, index) => (
                    <TeamItem
                        key={props.username}
                        {...props}
                        index={index}
                        reflective={reflective}
                    />
                ))
            }
        </List>
    ) : null;
};

TeamList.propTypes = {
    team:       arrayOf(shape({
        username:  string,
        name:      string,
        thumbnail: string,
        position:  string,
    })),
    reflective: bool,
};

TeamList.defaultProps = {
    team:       [],
    reflective: false,
};

export default TeamList;
