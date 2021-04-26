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
                    <Route path="/publications">
                        <div>To są publications</div>
                    </Route>
                    <Route path="/people">
                        <div>To są people</div>
                    </Route>
                    <Route path="/entities">
                        <div>To są entities</div>
                    </Route>
                    <Route path="/administration">
                        <div>To są administration</div>
                    </Route>
                    <Route path="/client_contract">
                        <div>To są client contract</div>
                    </Route>
                    <Route path="/supplier_contract">
                        <div>To są supplier contract</div>
                    </Route>
                    <Route path="/corporate">
                        <div>To są corporate</div>
                    </Route>
                    <Route path="/group_norms">
                        <div>To są group norms</div>
                    </Route>
                    <Route path="/real_estate_contracts">
                        <div>To są real estate contracts</div>
                    </Route>
                    <Route path="/profile">
                        <div>To jest profile</div>
                    </Route>
                    <Route path="/supplier_contract">
                        <div>To są supplier_contract</div>
                    </Route>
                    <Route path="/settings">
                        <div>To są settings</div>
                    </Route>
                    <Route path="/privacy">
                        <div>To są privacy</div>
                    </Route>
                    <Route path="/logout">
                        <div>To jest logout</div>
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