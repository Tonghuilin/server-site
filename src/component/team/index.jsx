import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';

// styled component
import { Wrapper, Container, TextWrapper, Title, Body } from './index.style';
import TeamList                                         from './teamList';

const Team = ({ title, desc, team }) => {
    const teamLen   = team.length;
    const teamArr   = [].concat(team);

    const firstHalf = teamArr.splice(0, Math.floor(teamLen / 2));

    return (
        <Wrapper>
            <Container>
                <TeamList team={firstHalf}/>

                <TextWrapper>
                    <Title>{title}</Title>
                    <Body>
                    <div dangerouslySetInnerHTML={{ __html: desc }}/>
                    </Body>
                </TextWrapper>

                <TeamList team={teamArr} reflective />
            </Container>
        </Wrapper>
    );
};

Team.propTypes = {
    title: string,
    desc:  string,
    team:  arrayOf(shape({})),
};

Team.defaultProps = {
    title: '',
    desc:  '',
    team:  [],
};

export default Team;
