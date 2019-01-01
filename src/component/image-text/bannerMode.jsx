import React                                      from 'react';
import { bool, number, oneOfType, shape, string } from 'prop-types';
import { GlobalContext }                          from '../index';
import Icon                                       from '../icon';
import color                                      from '../style/color';

// styled component
import { Container, Content } from '../style/styled-component';
import { Body }               from './index.style';
import {
    ImageWrapper, ImageContent, ImageLeft, ImageMiddle, ImageRight, TextWrapper, Title,
}                             from './bannerMode.style';

const BannerMode = ({ themeName, id, title, body, image, setting }) => {
    const imageElement = (
        <ImageWrapper key={`${id}-image`} {...setting} url={image.url}>
            <Container>
                <ImageContent>
                    <ImageLeft>
                        <Icon name="snowman" width="100%" height="100%"/>
                    </ImageLeft>

                    <ImageMiddle>
                        <Icon
                            id="moon"
                            name={themeName === 'light' ? "sun" : "moon"}
                            width={30}
                            height={30}
                            color={themeName === 'light' ? color.persianRed : color.gold} responsive={{
                            tablet: {
                                width:  150,
                                height: 80,
                            },
                        }}/>
                    </ImageMiddle>

                    <ImageRight>
                        <Icon name="forest" width="100%" height="100%"/>
                    </ImageRight>
                </ImageContent>
            </Container>
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
    themeName: string.isRequired,
    id:        string.isRequired,
    title:     string,
    body:      string,
    image:     shape({
        title:       string,
        description: string,
        url:         string,
        fileType:    string,
        width:       oneOfType([number, string]),
        height:      oneOfType([number, string]),
    }),
    setting:   shape({
        vertical:              bool,
        reverse:               bool,
        fullWidth:             bool,
        bannerBackgroundColor: string,
        imageBackgroundColor:  string,
        textBackgroundColor:   string,
    }),
};

BannerMode.defaultProps = {
    title:   '',
    body:    '',
    image:   {},
    setting: {},
};

const BannerModeWithGlobalContext = (props) => (
    <GlobalContext.Consumer>
        {({ themeName }) => <BannerMode {...props} themeName={themeName}/>}
    </GlobalContext.Consumer>
);

export default BannerModeWithGlobalContext;
