import React      from 'react';
import { string } from 'prop-types';
import Icon       from '../icon';
import color      from '../style/color';

// styled component
import { Container } from '../style/styled-component';
import {
    Wrapper, Content,
    PathHead, PathTail, PathTailBody,
    CourseWrapper, CourseItem, CourseMarkerWrapper, CourseTextWrapper, CourseTitle, CourseBody,
}                    from './homeCourse.style';

const HomeCourse = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <PathHead>
                        <Icon name="path-curve-quarter-top-right" color={color.dune} width="60" height="60"/>
                    </PathHead>

                    <CourseWrapper>
                        <CourseItem>
                            <CourseMarkerWrapper>
                                <Icon name="marker" color={color.persianRed} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper>
                                <CourseTitle>Grade 1-2</CourseTitle>
                                <CourseBody>
                                    Our debut ARK project this December is to share happiness with as many people as we
                                    can. We believe Happiness is only real when shared
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>

                        <CourseItem>
                            <CourseMarkerWrapper>
                                <Icon name="marker" color={color.casablanca} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper>
                                <CourseTitle>Grade 3</CourseTitle>
                                <CourseBody>
                                    Description
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>

                        <CourseItem>
                            <CourseMarkerWrapper>
                                <Icon name="marker" color={color.bitterSweet} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper>
                                <CourseTitle>Grade 4</CourseTitle>
                                <CourseBody>
                                    Description
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>

                        <CourseItem>
                            <CourseMarkerWrapper>
                                <Icon name="marker" color={color.mantis} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper>
                                <CourseTitle>Grade 5-6</CourseTitle>
                                <CourseBody>
                                    Our debut ARK project this December is to share happiness with as many people as we
                                    can. We believe Happiness is only real when shared
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>

                        <CourseItem>
                            <CourseMarkerWrapper>
                                <Icon name="marker" color={color.puertoRico} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper>
                                <CourseTitle>Grade 7-10</CourseTitle>
                                <CourseBody>
                                    Description
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>
                    </CourseWrapper>

                    <PathTail>
                        <div>
                            <Icon name="path-curve-quarter-bottom-left" color={color.dune} width="60" height="60"/>
                        </div>
                        <PathTailBody>
                            <Icon name="children" width="180" height="90"/>
                        </PathTailBody>
                        <div style={{ transform: `translateY(1.8px)` }}>
                            <Icon name="path-arrow" color={color.dune} width="60" height="80"/>
                        </div>
                    </PathTail>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default HomeCourse;
