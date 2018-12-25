import React from 'react';
import { string, shape, bool } from 'prop-types';
import {
    Container,
    Title,
    Body,
    Image,
    ImageWrapper,
    TextWrapper,
} from './index.style';

const ImageText = ({ id, title, body, image, setting }) => {
    return (
        <Container id={id} {...setting}>
            <ImageWrapper {...setting}>
                <Image src={image.url} alt={image.title}/>
            </ImageWrapper>

            <TextWrapper {...setting}>
                <Title>{title}</Title>
                <Body dangerouslySetInnerHTML={{ __html: body }}/>
            </TextWrapper>
        </Container>
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
    }),
    setting: shape({
        vertical: bool,
        reverse:  bool,
    }),
};

ImageText.defaultProps = {
    title:   '',
    body:    '',
    image:   {},
    setting: {
        vertical: false,
        reverse:  false,
    },
};

export default ImageText;
