import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import People from './assets/people.webp';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FrameContainer = styled.div`
    height: 60%;
    width: 60%;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
`;

const Frame = () => {
    return (
        <Container>
            <FrameContainer>
                <Image src={People} alt="people image" />
                {/* <Overlay /> */}
            </FrameContainer>
        </Container>
    );
};

export default Frame;