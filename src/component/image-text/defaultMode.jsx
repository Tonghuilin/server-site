import React                                      from 'react';
import { bool, number, oneOfType, shape, string } from 'prop-types';

// styled component
import { Container }                                 from '../style/styled-component';
import { Body }                                      from './index.style';
import { Content, ImageWrapper, TextWrapper, Title } from './defaultMode.style';

const DefaultMode = ({ id, title, body, image, setting }) => {
    return (
        <Container {...setting}>
            <Content {...setting}>
                <ImageWrapper {...setting} url={image.url}/>

                <TextWrapper {...setting}>
                    <Title>{title}</Title>
                    <Body dangerouslySetInnerHTML={{ __html: body }}/>
                </TextWrapper>
            </Content>
        </Container>
    );
};

DefaultMode.propTypes = {
    id:      string.isRequired,
    title:   string,
    body:    string,
    image:   shape({
        title:       string,
        description: string,
        url:         string,
        fileType:    string,
        width:       oneOfType([number, string]),
        height:      oneOfType([number, string]),
    }),
    setting: shape({
        vertical:              bool,
        reverse:               bool,
        fullWidth:             bool,
        bannerBackgroundColor: string,
        imageBackgroundColor:  string,
        textBackgroundColor:   string,
    }),
};

export default DefaultMode;
