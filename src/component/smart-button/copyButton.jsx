import React, { useState } from 'react';
import { string, bool }    from 'prop-types';
import Clipboard           from 'react-clipboard.js';
import Icon                from '../icon';

// styled component
import { TextButton, Button, Text } from './copyButton.style';

const CopyButton = ({ text, value, showText }) => {
    const [copied, setCopied] = useState(false);

    const onSuccess = () => {
        if (copied) { return; }

        setCopied(true);
        setTimeout(() => setCopied(false), 3000)
    };

    return (
        <Clipboard
            component={showText ? TextButton : Button}
            data-clipboard-text={value}
            onSuccess={onSuccess}
            button-style={{ color: copied ? 'green' : undefined }}
        >
            {showText && <Text>{text || value}</Text>}

            <Icon name={copied ? 'checked' : 'copy'} />
        </Clipboard>
    );
};

CopyButton.propTypes = {
    value:    string,
    text:     string,
    showText: bool,
};

CopyButton.defaultProps = {
    value:    '',
    text:     '',
    showText: false,
};

export default CopyButton;
