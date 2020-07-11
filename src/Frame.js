import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import People from './assets/people.webp';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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
    overflow: hidden;
`;

const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Overlay = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #FFF;
`;

const Frame = () => {
    return (
        <Container>
            <FrameContainer>
                <Image src={People} alt="people image"
                    initial={{
                        scale: 1.6
                    }}
                    animate={{
                        scale: 1,
                        transition
                    }}
                />
                <Overlay
                    initial={{
                        width: '100%'
                    }}
                    animate={{
                        width: '0',
                        transition
                    }}
                />
            </FrameContainer>
        </Container>
    );
};

export default Frame;