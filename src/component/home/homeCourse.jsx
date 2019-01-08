import React                            from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import Icon                             from '../icon';
import color                            from '../style/color';

// styled component
import { Container } from '../style/styled-component';
import {
    Wrapper, Content, Title, SubTitle,
    PathHead, PathTail, PathTailBody, PathTailEnd, CourseWrapper,
    CourseItem, CoursePathSegment, CourseMarkerWrapper, CourseTextWrapper, CourseTitle, CourseBody,
}                    from './homeCourse.style';

/**
 * Path Segment: head
 * @returns {*[]}
 * @constructor
 */
const PathHeads = () => {
    const mobile = (
        <PathHead key="path-head-mobile" id="path-head-mobile">
            <Icon name="path-curve-quarter-top-right" width="60" height="60"/>
        </PathHead>
    );

    const landscape = (
        <PathHead key="path-head-tablet-landscape" id="path-head-tablet-landscape">
            <Icon name="path-curve-quarter-bottom-left" width="120" height="120"/>
        </PathHead>
    );

    return [mobile, landscape];
};

/**
 * Path segment: tail
 * @param isReverse
 * @returns {*[]}
 * @constructor
 */
const PathTails = ({ isReverse }) => {
    const landscapeCurveName = isReverse ?
        'path-curve-half-right' : 'path-curve-half-left';

    const mobile = (
        <PathTail key="path-tail-mobile" id="path-tail-mobile">
            <div>
                <Icon name="path-curve-quarter-bottom-left" width="60" height="60"/>
            </div>

            <PathTailBody>
                <Icon name="children" width="180" height="90"/>
            </PathTailBody>

            <div style={{ transform: `translateY(1.8px)` }}>
                <Icon name="path-arrow" width="60" height="80"/>
            </div>
        </PathTail>

    );

    const landscape = (
        <PathTail key="path-tail-tablet-landscape" id="path-tail-tablet-landscape" isReverse={isReverse}>
            <div>
                <Icon name={landscapeCurveName} width="120" height="240"/>
            </div>

            <PathTailBody isReverse={isReverse}>
                <Icon name="children" width="180" height="90"/>
            </PathTailBody>

            <PathTailEnd isReverse={isReverse}>
                <Icon name="path-arrow" width="120" height="160"/>
            </PathTailEnd>
        </PathTail>
    );

    return [mobile, landscape];
};

PathTail.propTypes = {
    isReverse: bool,
};

PathTail.defaultProps = {
    isReverse: false,
};

/**
 * Default
 * @param title
 * @param desc
 * @param course
 * @returns {*}
 * @constructor
 */
const HomeCourse = ({ title, desc, course }) => {
    const HIGHLIGHT_COLORS = [
        color.persianRed,
        color.casablanca,
        color.bitterSweet,
        color.mantis,
        color.puertoRico,
    ];

    const tailIsReverse = course.length % 2 === 0;

    return (
        <Wrapper>
            <Container>
                <Content tailIsReverse={tailIsReverse}>
                    <Title>{title}</Title>
                    <SubTitle dangerouslySetInnerHTML={{ __html: desc }}/>

                    <div>
                        <PathHeads/>

                        <CourseWrapper>
                            {
                                course.map(({ name, desc }, index) => {
                                    const markerColor = HIGHLIGHT_COLORS[index % 5];
                                    const curveName   = index % 2 === 0 ?
                                        'path-curve-half-right' : 'path-curve-half-left';

                                    return (
                                        <CourseItem key={index} index={index}>
                                            <CoursePathSegment index={index}>
                                                <Icon name={curveName} height="240"
                                                      width="120"/>
                                                <Icon name="path" height="80" width="80"/>
                                            </CoursePathSegment>

                                            <CourseMarkerWrapper index={index}>
                                                <Icon name="marker" color={markerColor} width="50" height="72"/>
                                            </CourseMarkerWrapper>

                                            <CourseTextWrapper index={index}>
                                                <CourseTitle>{name}</CourseTitle>
                                                <CourseBody>{desc}</CourseBody>
                                            </CourseTextWrapper>
                                        </CourseItem>
                                    );
                                })
                            }
                        </CourseWrapper>

                        <PathTails isReverse={tailIsReverse}/>
                    </div>
                </Content>
            </Container>
        </Wrapper>
    );
};

HomeCourse.propTypes = {
    title:  string,
    desc:   string,
    course: arrayOf(shape({})),
};

HomeCourse.defaultProps = {
    title:  '',
    desc:   '',
    course: [],
};

export default HomeCourse;
