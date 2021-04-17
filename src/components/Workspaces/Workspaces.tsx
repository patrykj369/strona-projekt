import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';
import {SingleComponent} from './SingleWorkspace';



const WorkspacesWrapper = styled(Wrapper)`
    top: 480px;
    left: 20px;
    position: relative;
    padding: 0;
    background: ${Colors.grey_hsla};

    h2{
        font-family: sans-serif;
        font-size: ${fontSize[22]};
        font-weight: 600;
        color: ${Colors.navy_blue};
        position: absolute;
        top: -30px;
        left: 10px;
    }

    input{
        width: 40px;
        height: 40px;
        background: transparent;
        border-radius: 50%;
        border: 2px solid ${Colors.text_color};
        outline: none;
        position: absolute;
    }

    .btn-left{
        left:-45px;
        top: 110px;
    }

    .btn-right{
        right: -45px;
        top: 110px;
    }

`;

const WorkspacesContent = styled.div`
    overflow-x: scroll;
    height: 300px;
    width: 860px;
    display: flex;
    flex-direction: row;
    //background: ${Colors.grey_hsla};

    ::-webkit-scrollbar{
        width: 0;
       background: transparent;
    }

`;



export const Workspaces: FC = () => {
    return (
        <WorkspacesWrapper>
            <input type="button" className="btn btn-left"></input>
            <input type="button" className="btn btn-right"></input>
            <h2>Workspaces</h2>

            <div className="scrollBar">
                <WorkspacesContent>
                    <SingleComponent/>
                    <SingleComponent/>
                    <SingleComponent/>
                    <SingleComponent/>
                    <SingleComponent/>
                    <SingleComponent/>
                </WorkspacesContent>
            </div>

        </WorkspacesWrapper>
    );
}