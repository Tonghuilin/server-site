import React                                      from 'react';
import { bool, number, oneOfType, shape, string } from 'prop-types';

// styled component
import { Container, Content }                      from '../style/typography';
import { Body }                                    from './index.style';
import { ImageWrapper, Image, TextWrapper, Title } from './bannerMode.style';


const BannerMode = ({ id, title, body, image, setting }) => {
    const { width, height, url, title: imageTitle } = image;

    const imageElement = (
        <ImageWrapper key={`${id}-image`} {...setting}>
            <Image
                width={width}
                height={height}
                src={url}
                alt={imageTitle}
                {...setting}
            />
        </ImageWrapper>
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
