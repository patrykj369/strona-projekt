import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';
import {SingleComponent} from './SingleWorkspace';



const WorkspacesWrapper = styled(Wrapper)`
    top: 450px;
    left: 20px;
    position: relative;
    padding: 0;
    background: ${Colors.grey_hsla};
`;

const WorkspacesContent = styled.div`
    height: 300px;
    width: 860px;
    //background: ${Colors.grey_hsla};
    h2{
        padding: 10px;
        font-family: sans-serif;
        font-size: ${fontSize[22]};
        font-weight: 600;
        color: ${Colors.navy_blue};
    }
`;



export const Workspaces: FC = () => {
    return (
        <WorkspacesWrapper>
            <WorkspacesContent>
            <h2>Workspaces</h2>
                <SingleComponent/>
                <SingleComponent/>

            </WorkspacesContent>
        </WorkspacesWrapper>
    );
}