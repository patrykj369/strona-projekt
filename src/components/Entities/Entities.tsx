import React, {FC} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';
// import {Colors} from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';

const EntitiesWrapper = styled(Wrapper)`
    position: absolute;
    padding: 0;
    margin-top: 285px;
    margin-left: 320px;
    border-radius: 5px;
    font-family: sans-serif;

    .contentEntities{
        border-radius: 10px;
        width: 890px;
        height: 600px;
        background-color: red;

        h2{
            height: 2em;
            font-size: ${fontSize[18]};
            display: flex;
            align-items: center;
            justify-content: left;
            img{
                margin-left: 10px;
            }
        }
    }

    .topBar{
        width: 890px;
        height: 30px;
        background-color: brown;
    }

    .entitiesCard{
        display: flex;
    }
`;

const EntitiesCard = styled.div`
    width: 220px;
    height: 120px;
    background-color: #fff;
    margin: 20px 20px 0 0;
`;


export const Entities: FC = () => {
    return(
        <EntitiesWrapper>
            <div className="contentEntities">
                <h2>Entities <img src="./media/icons/cog.svg" alt=""></img></h2>
                <div className="topBar">
                    <p>tralalla</p>
                </div>

                <div className="entitiesCard">
                    <EntitiesCard> </EntitiesCard>
                    <EntitiesCard> </EntitiesCard>
                    <EntitiesCard> </EntitiesCard>
                    <EntitiesCard> </EntitiesCard>
                </div>
            </div>
        </EntitiesWrapper>
    )
}