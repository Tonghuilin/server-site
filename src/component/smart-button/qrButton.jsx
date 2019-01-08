import React, { useState }                 from 'react';
import { string, number, bool, oneOfType } from 'prop-types';
import Icon                                from '../icon';

// styled component
import { Img }                                                        from '../style/styled-component';
import { OpenButton, ReverseOpenButton, CloseButton, Wrapper, Popup } from './qrButton.style';

const QrButton = ({ iconName, url, width, height, reverse }) => {
    const [open, setOpen] = useState(false);

    const onOpen = (evt) => {
        evt.preventDefault();
        setOpen(true);
    };

    const onClose = (evt) => {
        evt.preventDefault();
        setOpen(false);
    };

    const StyledOpenButton = reverse ? ReverseOpenButton : OpenButton;

    return (
        <Wrapper open={open}>
            <StyledOpenButton href={url} onClick={onOpen} target="_blank">
                <Icon name={iconName} width={width} height={height}/>
            </StyledOpenButton>

            <Popup>
                <CloseButton onClick={onClose}>
                    <Icon name="cross"/>
                </CloseButton>

                <Img src={url} alt="wechat qr code"/>
            </Popup>
        </Wrapper>
    );
};

QrButton.propTypes = {
    height:   oneOfType([number, string]),
    width:    oneOfType([number, string]),
    url:      string.isRequired,
    iconName: string,
    reverse:  bool,
};

QrButton.defaultProps = {
    iconName: 'qr-code',
    height:   20,
    width:    20,
    reverse:  true,
};

export default QrButton;
