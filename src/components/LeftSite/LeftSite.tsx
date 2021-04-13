import React, {FC} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';
import { Wrapper } from '../../styledHelpers/Components';

const Wrapper4 = styled(Wrapper)`
    position: relative;
    padding: 0;
`;

const WrapperSite = styled.div`
    position: absolute;
    top: 360px;
    left: -270px;

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
                <li><img src="./media/icons/publications.svg" alt="" className="imgLi"></img>Publications</li>
                <li><img src="./media/icons/ecosystem.svg" alt="" className="imgLi"></img>Ecosystem</li>
                <li><img src="./media/icons/entities2.svg" alt="" className="imgLi"></img>Entities</li>
            </ul>
        </WrapperSite>
        </Wrapper4>
    );
};