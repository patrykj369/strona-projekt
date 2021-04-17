import React, { FC } from 'react';
import styled from 'styled-components';

import "./MainPage.css";

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Publications} from '../Publications/Publications';
import { Workspaces } from '../Workspaces/Workspaces';



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
                <Workspaces/>
            </Content>
        </Wrapper>

    );
};

export default MainPage;