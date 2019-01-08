import React                      from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { CopyButton, QrButton }   from '../smart-button';

import { Container, Content, SubHeading }                                   from '../style/styled-component';
import { Wrapper, Title, Body, Section, Paragraph, InfoWrapper, HighLight } from './homeContactUs.style';

/**
 * Child: Info segment
 *
 * @param value
 * @param qrCodeUrl
 * @returns {*}
 * @constructor
 */
const Info = ({ value, qrCodeUrl }) => (
    <InfoWrapper>
        <CopyButton value={value} showText/>
        {Boolean(qrCodeUrl) && <QrButton url={qrCodeUrl}/>}
    </InfoWrapper>
);

Info.propTypes = {
    value:     string,
    qrCodeUrl: string,
};

Info.defaultProps = {
    value:     '',
    qrCodeUrl: '',
};


/**
 * Child: campus
 *
 * @param name
 * @param address
 * @param phone
 * @param mobile
 * @returns {*}
 * @constructor
 */
const ContactPlace = ({ name, address, phone, mobile }) => (
    <Section>
        <Paragraph>
            <HighLight>{name}</HighLight>在<Info value={address}/>。
        </Paragraph>
        <Paragraph>
            您可以拨座机<Info value={phone}/>或手机<Info value={mobile}/>咨询。
        </Paragraph>
    </Section>
);

ContactPlace.propTypes = {
    name:    string.isRequired,
    address: string.isRequired,
    phone:   string.isRequired,
    mobile:  string.isRequired,
};

/**
 * Default
 * @param title
 * @param desc
 * @param places
 * @param socials
 * @returns {*}
 * @constructor
 */
const HomeContactUs = ({ title, desc, places, socials }) => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Title>{title}</Title>

                    <SubHeading>{desc}</SubHeading>

                    <Body>
                    {places.map((place, index) => <ContactPlace key={index} {...place} />)}

                    <Section>
                        <Paragraph>
                            您还可以通过
                            <HighLight>微信</HighLight>
                            <Info value={socials[0].username} qrCodeUrl={socials[0].qrCodeUrl}/>
                            或者
                            <HighLight>QQ</HighLight>
                            <Info value={socials[1].username}/>
                            联系我们。
                        </Paragraph>
                    </Section>
                    </Body>
                </Content>
            </Container>
        </Wrapper>
    );
};

HomeContactUs.propTypes = {
    title:   string,
    desc:    string,
    places:  arrayOf(shape({})),
    socials: arrayOf(shape({})),
};

export default HomeContactUs;
