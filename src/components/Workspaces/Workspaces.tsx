import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';
import {SingleComponent} from './SingleWorkspace';



const WorkspacesWrapper = styled(Wrapper)`
    top: 460px;
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
        background-image:url('./media/icons/angle-left-solid.svg');
        background-position: center;
        background-size: 40px 40px;
        animation: sliderLeft 2s ease infinite;
    }

    .btn-left:hover{
        animation: none;
    }

    .btn-right{
        right: -45px;
        top: 110px;
        background-image:url('./media/icons/angle-right-solid.svg');
        background-position: center;
        background-size: 40px 40px;
        animation: sliderRight 2s ease infinite;
    }

    .btn-right:hover{
        animation: none;
    }

    @keyframes sliderLeft{
        50%{
            left: -55px;
        }
    }

    @keyframes sliderRight{
        50%{
            right: -55px;
        }
    }
`;

const WorkspacesContent = styled.div`
    overflow-x: scroll;
    height: 270px;
    width: 860px;
    display: flex;
    flex-direction: row;
    scroll-behavior: smooth;

    ::-webkit-scrollbar{
        width: 0;
        background: transparent;
    }

    scrollbar-width: none;

`;



export const Workspaces: FC = () => {

    return (
        <WorkspacesWrapper>
            <input type="button" className="btn btn-left" onClick={() => scrollWin(-200, 0) }>

            </input>
            <input type="button" className="btn btn-right" onClick={() =>scrollWin(200, 0)}></input>
            <h2>Workspaces</h2>

            <div className="scrollBar">
                <WorkspacesContent id="workspaces">
                    <SingleComponent/>
                </WorkspacesContent>
            </div>

        </WorkspacesWrapper>
    );
}

function scrollWin(x: number, y: number): void {
    var element = document.getElementById("workspaces");
    element?.scrollBy(x, y);
}
