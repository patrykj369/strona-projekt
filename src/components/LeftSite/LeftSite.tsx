import React, {FC} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { Link } from 'react-router-dom';

const Wrapper4 = styled(Wrapper)`
    position: relative;
    padding: 0;
`;

const WrapperSite = styled.div`
    position: absolute;
    top: 360px;
    left: -270px;

    .links{
        text-decoration: none;
        font-size: ${fontSize[18]};
        font-family: sans-serif;
        color: #000;
    }

    .imgLi{
        width: 24px;
        height: 22px;
        margin-right: 15px;
    }


    li{
        height: 30px;
        width: 150px;
        margin-bottom: 20px;
        font-size: ${fontSize[18]};
        font-family: sans-serif;
    }

    li:after {
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: ${Colors.text_color};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    li:hover:after {
        width: 100%;
        left: 0;
    }

`;

export const LeftSite: FC = () => {
    return (
        <Wrapper4>
        <WrapperSite>
            <ul>
                <Link to="/publications" className="links"><li><img src="./media/icons/publications.svg" alt="" className="imgLi"></img>Publications</li></Link>
                <Link to="/ecosystem" className="links"><li><img src="./media/icons/ecosystem.svg" alt="" className="imgLi"></img>Ecosystem</li></Link>
                <Link to="/entities" className="links"><li><img src="./media/icons/entities2.svg" alt="" className="imgLi"></img>Entities</li></Link>
            </ul>
        </WrapperSite>
        </Wrapper4>
    );
};