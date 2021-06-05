import React, { FC} from 'react';
import styled from 'styled-components';

import "./MainPage.scss";

import { TopBar } from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import { Publications} from '../Publications/Publications';
import { Workspaces } from '../Workspaces/Workspaces';
import {ResumeWork} from '../ResumeWork/ResumeWork';
import {Entities} from '../Entities/Entities';
import {ExtendedWorkspace} from '../Workspaces/ExtendedWorkspace';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    //Link
  } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { getUsers } from '../../actions/usersActions';


// type GetUsers = ReturnType<typeof getUsers>
// type GetData = ReturnType<typeof getSomeData>

const Wrapper = styled.section`
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
    margin: auto;

    .resumeWork{
        position: absolute;
        margin-top: 1300px;
        margin-left: 760px;
    }

`;

const ResumeWork2 = styled(ResumeWork)`
    /* position: relative;
    margin-top: 160px;
    margin-left: -640px; */
`;

const MainPage: FC = () => {

    return (
    <Router>
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu/>
                <Switch>
                    <Route path="/publications">
                        <div>To są publications</div>
                    </Route>
                    <Route path="/people">
                        <div>To są people</div>
                    </Route>
                    <Route path="/entities">
                        <Entities/>
                    </Route>
                    <Route path="/administration">
                        <div>To są administration</div>
                    </Route>
                    <Route path="/client_contract">
                        {/* <div>To są client contract</div> */}
                        <ExtendedWorkspace type="0"></ExtendedWorkspace>
                    </Route>
                    <Route path="/supplier_contract">
                        {/* <div>To są supplier contract</div> */}
                        <ExtendedWorkspace type="1"></ExtendedWorkspace>
                    </Route>
                    <Route path="/corporate">
                        {/* <div>To są corporate</div> */}
                        <ExtendedWorkspace type="2"></ExtendedWorkspace>
                    </Route>
                    <Route path="/group_norms">
                        {/* <div>To są group norms</div> */}
                        <ExtendedWorkspace type="3"></ExtendedWorkspace>
                    </Route>
                    <Route path="/real_estate_contracts">
                        {/* <div>To są real estate contracts</div> */}
                        <ExtendedWorkspace type="4"></ExtendedWorkspace>
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
                    <Route path="/messages">
                        <div>To jest messages</div>
                    </Route>
                    <Route path="/notifications">
                        <div>To jest notifications</div>
                    </Route>
                    <Route path="/network">
                        <div>To jest network</div>
                    </Route>
                    <Route path="/ecosystem">
                        <div>To jest ecosystem</div>
                    </Route>

                    {/* sluzy do przekierowania strony startowej na link zawierajacy !#, potrzebuje tego do paginacji */}

                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Redirect to="!#" />
                            )
                        }} />

                    {/* strona startowa z odpowiednimi komponentami */}

                    <Route path="/">
                        <Publications/>
                        <Workspaces/>
                        <div className="resumeWork">
                            <ResumeWork2/>
                        </div>
                    </Route>

                </Switch>
            </Content>
        </Wrapper>
    </Router>
    );
};

export default MainPage;