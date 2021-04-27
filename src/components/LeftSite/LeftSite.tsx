import React, {FC} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';
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
        height: 22px;
        margin-bottom: 20px;
        font-size: ${fontSize[18]};
        font-family: sans-serif;
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