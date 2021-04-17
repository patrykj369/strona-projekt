import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';


const SingleComponentWrapper = styled(Wrapper)`
    padding: 0;
    //float: left;
    background-color: rgba(143, 143, 143, 0.001);
`;

const SingleComponentContent = styled.div`
    background: #fff;
    font-family: sans-serif;
    width: 320px;
    height: 240px;
    margin: 10px 15px 0 0;

    border-radius: 10px;
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);

    display: grid;
    grid-template-rows: 1fr 1.2fr;

    position: relative;


    .topCard{
        grid-row: 1;
        border-radius: 10px 10px 0 0;
        background: url("https://media.bizj.us/view/img/10831215/article41200x1200*750xx1200-675-0-391.png");
        background-size: cover;
        background-position: center;
    }

    .absoluteCard{
        position: absolute;
        width: 110px;
        height: 110px;
        top: 60px;
        margin-left: 20px;
        border-radius: 5px;
        box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);
        background-color: #f6f6f6;
    }

    .bottomCard{
        display: grid;
        grid-template-rows: 2fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }

    .cardName{
        margin-top: 10px;
        margin-left: -20px;
        grid-row:1;
        grid-column: 2;
        color: ${Colors.navy_blue};
        font-weight: 600;
        font-size: ${fontSize[20]};
    }

    .cardType{
        margin-top: 12px;
        margin-left: 50px;
        grid-column:1;
        grid-row:2;
        color: ${Colors.text_color};
        font-size: ${fontSize[18]};
    }
    .imgType{
        margin-top: 10px;
        margin-left: 20px;
        grid-column:1;
        grid-row:2;
    }
    .cardUsers{
        margin-top: 12px;
        margin-left: 5px;
        grid-column:2;
        grid-row:2;
        color: ${Colors.text_color};
        font-size: ${fontSize[18]};
    }
    .imgUsers{
        margin-top: 10px;
        margin-left: -20px;
        grid-column:2;
        grid-row:2;
    }
    .cardUpdate{
        margin-top: 14px;
        margin-left: 20px;
        white-space: nowrap;
        grid-column:1;
        grid-row:3;
        color: ${Colors.text_color};
        font-size: ${fontSize[12]};
    }
`;


export const SingleComponent: FC = () =>{
    return (
        <SingleComponentWrapper>

            <SingleComponentContent>
                <div className="topCard">

                </div>
                <div className="absoluteCard">

                </div>
                <div className="bottomCard">
                    <p className="cardName">Client contract</p>
                    <img src="./media/icons/ecosystem.svg" alt="" className="imgType"></img>
                    <p className="cardType">Contract</p>
                    <p className="cardDot"></p>
                    <img src="./media/icons/people.svg" alt="" className="imgUsers"></img>
                    <p className="cardUsers">150 users</p>

                    <p className="cardUpdate">Last update 2 days ago</p>
                </div>
            </SingleComponentContent>
        </SingleComponentWrapper>
    );
};