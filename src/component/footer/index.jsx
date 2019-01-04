import React from 'react';

// styled component
import { Footer as StyledFooter, CopyRightWrapper } from './index.style';

const Footer = () => {
    return (
        <StyledFooter>
            <CopyRightWrapper>
                © Copyright 2018 Tong Hui Lin. All rights reserved.
            </CopyRightWrapper>
        </StyledFooter>
    );
};

export default Footer;
