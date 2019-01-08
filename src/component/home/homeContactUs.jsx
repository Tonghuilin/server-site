import React          from 'react';
import { string }     from 'prop-types';
import { CopyButton } from '../smart-button';

import { Container, Content, SubHeading }                     from '../style/styled-component';
import { Wrapper, Title, Body, Section, Paragraph, InfoWrapper, HighLight } from './homeContactUs.style';

const CopyInfo = ({ value }) => (
    <InfoWrapper>
        <CopyButton value={value} showText/>
    </InfoWrapper>
);

const ContactPlace = ({ name, address, phone, mobile }) => (
    <Section>
        <Paragraph>
            <HighLight>{name}</HighLight>在<CopyInfo value={address}/>。
        </Paragraph>
        <Paragraph>
            您可以拨座机<CopyInfo value={phone}/>或手机<CopyInfo value={mobile}/>咨询。
        </Paragraph>
    </Section>
);

const HomeContactUs = ({ title, description, places, socials }) => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Title>{title}</Title>

                    <SubHeading>{description}</SubHeading>

                    <Body>
                    {places.map((place, index) => <ContactPlace key={index} {...place} />)}

                    <Section>
                        <Paragraph>
                            您还可以通过
                            <HighLight>微信</HighLight>
                            <CopyButton value={socials[0].username} showText/>
                            或者
                            <HighLight>QQ</HighLight>
                            <CopyButton value={socials[1].username} showText/>
                            联系我们。
                        </Paragraph>
                    </Section>
                    </Body>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default HomeContactUs;
