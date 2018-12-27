import React                                      from 'react';
import { string, shape, bool, number, oneOfType } from 'prop-types';

// styled component
import {
    Wrapper,
    Container,
    Content,
    Title,
    Body,
    Image,
    ImageWrapper,
    TextWrapper,
} from './index.style';

const ImageText = ({ id, title, body, image, setting }) => {
    const { width, height, url, title: imageTitle } = image;

    return (
        <Wrapper id={id} {...setting}>
            <Container {...setting}>
                <Content {...setting}>
                    <ImageWrapper {...setting}>
                        <Image
                            width={width}
                            height={height}
                            src={url}
                            alt={imageTitle}
                            {...setting}
                        />
                    </ImageWrapper>

                    <TextWrapper {...setting}>
                        <Title>{title}</Title>
                        <Body dangerouslySetInnerHTML={{ __html: body }}/>
                    </TextWrapper>
                </Content>
            </Container>
        </Wrapper>
    );
};

ImageText.propTypes = {
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

ImageText.defaultProps = {
    title:   '',
    body:    '',
    image:   {
        height: 'auto',
        width:  '100%',
    },
    text:    {},
    setting: {
        vertical: false,
        reverse:  false,
    },
};

export default ImageText;
