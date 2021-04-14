import React, { FC } from 'react';
import styled from 'styled-components';

import "./MainPage.css";

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Publications} from '../Publications/Publications';



const Wrapper = styled.section`

`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
    margin: auto;

`;

const MainPage: FC = () => {
    return (

        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
                <Publications/>
            </Content>
        </Wrapper>

    );
};

export default MainPage;