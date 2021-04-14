import React, {FC} from 'react';
import styled from 'styled-components';

import {Wrapper} from  '../../styledHelpers/Components';

const WrapperPublications = styled(Wrapper)`
    position: relative;
    padding:0;
`;

const ContentPublications = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    margin-left: 900px;
    margin-top: -160px;
    width: 860px;
    height: 430px;
    background: white;
    border-radius: 10px;
    position: absolute;
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);

    .importantInfo{
        grid-column: 1;
        background:
        linear-gradient(rgba(150, 174, 219, 0.6), rgba(11, 75, 194, 0.4)),
        url("../media/towers.jpg") center;
        background-size: 430px 440px;
        border-radius: 10px 0 0 10px;
    }
`;

export const Publications: FC = () => {
    return(
        <WrapperPublications>
            <ContentPublications>
                <div className="importantInfo"></div>
                <div className="otherInfos"></div>
            </ContentPublications>

        </WrapperPublications>
    );
};