import React, { FC } from 'react';
import styled from 'styled-components';

import "./MainPage.css";

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Publications} from '../Publications/Publications';
import { Workspaces } from '../Workspaces/Workspaces';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link
  } from "react-router-dom";

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
    <Router>
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
                <Switch>
                    <Route path="/test">
                        <div>test</div>
                    </Route>

                    <Route path="/">
                        <Publications/>
                        <Workspaces/>
                    </Route>

                </Switch>
            </Content>
        </Wrapper>
    </Router>
    );
};

export default MainPage;