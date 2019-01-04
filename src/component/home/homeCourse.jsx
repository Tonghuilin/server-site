import React      from 'react';
import { string } from 'prop-types';
import Icon       from '../icon';
import color      from '../style/color';

// styled component
import { Container } from '../style/styled-component';
import {
    Wrapper, Content,
    PathHead, PathTail, PathTailBody, PathTailEnd, CourseWrapper,
    CourseItem, CoursePathSegment, CourseMarkerWrapper, CourseTextWrapper, CourseTitle, CourseBody,
}                    from './homeCourse.style';

const HomeCourse = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <PathHead id="path-head-mobile">
                        <Icon name="path-curve-quarter-top-right" color={color.cadet} width="60" height="60"/>
                    </PathHead>

                    <PathHead id="path-head-tablet-landscape">
                        <Icon name="path-curve-quarter-bottom-left" color={color.cadet} width="120" height="120"/>
                    </PathHead>

                    <CourseWrapper>
                        <CourseItem index={0}>
                            <CoursePathSegment index={0}>
                                <Icon name="path-curve-half-right" color={color.cadet} height="240" width="120" />
                                <Icon name="path" color={color.cadet} height="80" width="80" />
                            </CoursePathSegment>

                            <CourseMarkerWrapper index={0}>
                                <Icon name="marker" color={color.persianRed} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper index={0}>
                                <CourseTitle>Grade 1-2</CourseTitle>
                                <CourseBody>
                                    Our debut ARK project this December is to share happiness with as many people as we
                                    can. We believe Happiness is only real when shared
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>

                        <CourseItem index={1}>
                            <CoursePathSegment index={1}>
                                <Icon name="path-curve-half-left" color={color.cadet} height="240" width="120" />
                                <Icon name="path" color={color.cadet} height="80" width="80" />
                            </CoursePathSegment>

                            <CourseMarkerWrapper index={1}>
                                <Icon name="marker" color={color.casablanca} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper index={1}>
                                <CourseTitle>Grade 3</CourseTitle>
                                <CourseBody>
                                    Description
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>

                        <CourseItem index={2}>
                            <CoursePathSegment index={2}>
                                <Icon name="path-curve-half-right" color={color.cadet} height="240" width="120" />
                                <Icon name="path" color={color.cadet} height="80" width="80" />
                            </CoursePathSegment>

                            <CourseMarkerWrapper index={2}>
                                <Icon name="marker" color={color.bitterSweet} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper index={2}>
                                <CourseTitle>Grade 4</CourseTitle>
                                <CourseBody>
                                    Description
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>

                        <CourseItem index={3}>
                            <CoursePathSegment index={3}>
                                <Icon name="path-curve-half-left" color={color.cadet} height="240" width="120" />
                                <Icon name="path" color={color.cadet} height="80" width="80" />
                            </CoursePathSegment>

                            <CourseMarkerWrapper index={3}>
                                <Icon name="marker" color={color.mantis} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper index={3}>
                                <CourseTitle>Grade 5-6</CourseTitle>
                                <CourseBody>
                                    Our debut ARK project this December is to share happiness with as many people as we
                                    can. We believe Happiness is only real when shared
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>

                        <CourseItem index={4}>
                            <CoursePathSegment index={4}>
                                <Icon name="path-curve-half-right" color={color.cadet} height="240" width="120" />
                                <Icon name="path" color={color.cadet} height="80" width="80" />
                            </CoursePathSegment>

                            <CourseMarkerWrapper index={4}>
                                <Icon name="marker" color={color.puertoRico} width="50" height="72" />
                            </CourseMarkerWrapper>

                            <CourseTextWrapper index={4}>
                                <CourseTitle>Grade 7-10</CourseTitle>
                                <CourseBody>
                                    Description
                                </CourseBody>
                            </CourseTextWrapper>
                        </CourseItem>
                    </CourseWrapper>

                    <PathTail id="path-tail-mobile">
                        <div>
                            <Icon name="path-curve-quarter-bottom-left" color={color.cadet} width="60" height="60"/>
                        </div>
                        <PathTailBody>
                            <Icon name="children" width="180" height="90"/>
                        </PathTailBody>
                        <div style={{ transform: `translateY(1.8px)` }}>
                            <Icon name="path-arrow" color={color.cadet} width="60" height="80"/>
                        </div>
                    </PathTail>

                    <PathTail id="path-tail-tablet-landscape">
                        <div>
                            <Icon name="path-curve-half-left" color={color.cadet} width="120" height="240"/>
                        </div>
                        <PathTailBody>
                            <Icon name="children" width="180" height="90"/>
                        </PathTailBody>
                        <PathTailEnd>
                            <Icon name="path-arrow" color={color.cadet} width="120" height="160"/>
                        </PathTailEnd>
                    </PathTail>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default HomeCourse;
