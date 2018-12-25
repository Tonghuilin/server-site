import styled from '@emotion/styled';

const getDislay = ({ vertical }) => vertical ? undefined : 'flex';

const getFlexDirection = ({ vertical, reverse }) => {
    if (vertical) {
        return undefined;
    }
    return reverse ? 'row-reverse' : 'row';
};

const getTextAlign = ({ vertical, reverse }) => {
    if (vertical) {
        return 'center';
    }
    return reverse ? 'left' : 'right';
};

const getWidth = ({ vertical }) => vertical ? undefined : '50%';

export const Container = styled.div`
    display: ${getDislay};
    flex-direction: ${getFlexDirection}
`;

export const ImageWrapper = styled.div`
    flex-basis: ${getWidth};
`;

export const TextWrapper = styled.div`
    flex-basis: ${getWidth};
    text-align: ${getTextAlign};
`;

export const Title = styled.h3`
    color: red;
`;

export const Body = styled.div`
    font-weight: 100;
`;

export const Image = styled.img`
    height: auto;
    width: 100%;
`;
