import React                                      from 'react';
import { bool, number, oneOfType, shape, string } from 'prop-types';

// styled component
import { Container, Content } from '../style/styled-component';
import { Body }               from './index.style';
import { TextWrapper, Title } from './bannerMode.style';
import { ImageWrapper }       from './index.style';


const BannerMode = ({ id, title, body, image, setting }) => {
    const imageElement = (
        <ImageWrapper key={`${id}-image`} {...setting} url={image.url} />
    );

    const textElement = (
        <Container key={`${id}-text`} {...setting}>
            <Content {...setting}>
                <TextWrapper {...setting}>
                    <Title>{title}</Title>

                    <Body dangerouslySetInnerHTML={{ __html: body }}/>
                </TextWrapper>
            </Content>
        </Container>
    );

    return [imageElement, textElement];
};

BannerMode.propTypes = {
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

export default BannerMode;
