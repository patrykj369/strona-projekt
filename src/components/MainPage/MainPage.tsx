import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';



const Wrapper = styled.section`
`;

const Content = styled.div`
    max-width: 1200px;
    align-item: center;
    display: flex;
    margin: auto;
`;

const MainPage: FC = () => {
    return (

        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
            </Content>
        </Wrapper>

    );
};

export default MainPage;