import { FC } from 'React';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    position: absolute;
    width: 240px;
    top: 60px;
    background: white;
    // background: rgba(143, 143, 143, 0.5);
    z-index:1;
    font-family: sans-serif;
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);
    li{
        padding: 5px;
        margin-left: 14%;
        font-size: ${fontSize[20]};
    }
`;

export const ExpandedMenu: FC = () => {
    return (
        <Wrapper>
            <ul>
                <input type="text" placeholder="Filter..."></input>
                <li className="specificLi">Platform</li>
                <li>Home</li>
                <li>Publications</li>
                <li>People</li>
                <li>Entities</li>
                <li>Administration</li>
                <li className="specificLi">Workspaces</li>
                <li>Client contract</li>
                <li>Supplier contract</li>
                <li>Corporate</li>
                <li>Group Names</li>
                <li>Real estate contracts</li>
                <hr></hr>
                <li className="specificLi">Account</li>
                <li>Name Surname</li>
                <li>Privacy</li>
                <li>Settings</li>
            </ul>
            <hr></hr>
            <div><span>Logout</span></div>
        </Wrapper>
    );
};