import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';

import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";


const SingleComponentWrapper = styled(Wrapper)`
    padding: 0;
    //float: left;
    background-color: rgba(143, 143, 143, 0.001);

    .linksForSites{
        text-decoration: none;
    }
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

    :hover{
        transition: transform .5s;
        transform: scale(.96);
    }

    .topCard{
        grid-row: 1;
        border-radius: 10px 10px 0 0;
        background: url("https://media.bizj.us/view/img/10831215/article41200x1200*750xx1200-675-0-391.png");
        background-size: cover;
        background-position: center;
    }

    .topCard1{
        grid-row: 1;
        border-radius: 10px 10px 0 0;
        background: url("https://alidropship.com/wp-content/uploads/2019/03/how-to-find-a-supplier.jpg");
        background-size: cover;
        background-position: center;
    }

    .topCard2{
        grid-row: 1;
        border-radius: 10px 10px 0 0;
        background: url("https://www.icgconstruction.com/sites/www.icgconstruction.com/files/assets/1484_06.jpg");
        background-size: cover;
        background-position: center;
    }

    .topCard3{
        grid-row: 1;
        border-radius: 10px 10px 0 0;
        background: url("https://images.idgesg.net/images/article/2018/05/teamwork_fist_bump_rawpixel_cc0_via_unsplash_1200x800-100758133-large.jpg");
        background-size: cover;
        background-position: center;
    }

    .topCard4{
        grid-row: 1;
        border-radius: 10px 10px 0 0;
        background: url("https://www.mashvisor.com/blog/wp-content/uploads/2019/07/types-of-real-estate-contracts-lease-agreement-768x512.jpg");
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
        background-color: ${Colors.white};

        svg{
            margin: 20px 20px;
        }
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
        margin-left: 12px;
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
            <Link to="/client_contract" className="linksForSites">
            <SingleComponentContent>
                <div className="topCard">

                </div>
                <div className="absoluteCard">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" className="svg-inline--fa fa-file-signature fa-w-18" role="img"
                    xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 576 512"><path fill="#b1a9a9"
                    d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61
                    31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81
                    12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2
                     0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384
                     121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288
                     346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z">
                     </path>
                     </svg>
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
            </Link>
            <Link to="/supplier_contract" className="linksForSites">
            <SingleComponentContent>
                <div className="topCard1">

                </div>
                <div className="absoluteCard">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" className="svg-inline--fa fa-file-signature fa-w-18" role="img"
                    xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 576 512"><path fill="#b1a9a9"
                    d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61
                    31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81
                    12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2
                     0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384
                     121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288
                     346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z">
                     </path>
                     </svg>
                </div>
                <div className="bottomCard">
                    <p className="cardName">Supplier contract</p>
                    <img src="./media/icons/ecosystem.svg" alt="" className="imgType"></img>
                    <p className="cardType">Contract</p>
                    <p className="cardDot"></p>
                    <img src="./media/icons/people.svg" alt="" className="imgUsers"></img>
                    <p className="cardUsers">25 users</p>

                    <p className="cardUpdate">Last update 3 days ago</p>
                </div>
            </SingleComponentContent>
            </Link>
            <Link to="/corporate" className="linksForSites">
            <SingleComponentContent>
                <div className="topCard2">

                </div>
                <div className="absoluteCard">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" className="svg-inline--fa fa-file-signature fa-w-18" role="img"
                    xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 576 512"><path fill="#b1a9a9"
                    d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61
                    31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81
                    12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2
                     0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384
                     121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288
                     346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z">
                     </path>
                     </svg>
                </div>
                <div className="bottomCard">
                    <p className="cardName">Corporate</p>
                    <img src="./media/icons/ecosystem.svg" alt="" className="imgType"></img>
                    <p className="cardType">Corporate</p>
                    <p className="cardDot"></p>
                    <img src="./media/icons/people.svg" alt="" className="imgUsers"></img>
                    <p className="cardUsers">50 users</p>

                    <p className="cardUpdate">Last update 5 days ago</p>
                </div>
            </SingleComponentContent>
            </Link>
            <Link to="/group_norms" className="linksForSites">
            <SingleComponentContent>
                <div className="topCard3">

                </div>
                <div className="absoluteCard">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" className="svg-inline--fa fa-file-signature fa-w-18" role="img"
                    xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 576 512"><path fill="#b1a9a9"
                    d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61
                    31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81
                    12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2
                     0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384
                     121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288
                     346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z">
                     </path>
                     </svg>
                </div>
                <div className="bottomCard">
                    <p className="cardName">Group norms</p>
                    <img src="./media/icons/ecosystem.svg" alt="" className="imgType"></img>
                    <p className="cardType">Norms</p>
                    <p className="cardDot"></p>
                    <img src="./media/icons/people.svg" alt="" className="imgUsers"></img>
                    <p className="cardUsers">75 users</p>

                    <p className="cardUpdate">Last update 1 days ago</p>
                </div>
            </SingleComponentContent>
            </Link>
            <Link to="/real_estate_contracts" className="linksForSites">
            <SingleComponentContent>
                <div className="topCard4">

                </div>
                <div className="absoluteCard">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" className="svg-inline--fa fa-file-signature fa-w-18" role="img"
                    xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 576 512"><path fill="#b1a9a9"
                    d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61
                    31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81
                    12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2
                     0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384
                     121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288
                     346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z">
                     </path>
                     </svg>
                </div>
                <div className="bottomCard">
                    <p className="cardName">Real estate contracts</p>
                    <img src="./media/icons/ecosystem.svg" alt="" className="imgType"></img>
                    <p className="cardType">Contract</p>
                    <p className="cardDot"></p>
                    <img src="./media/icons/people.svg" alt="" className="imgUsers"></img>
                    <p className="cardUsers">45 users</p>

                    <p className="cardUpdate">Last update 7 days ago</p>
                </div>
            </SingleComponentContent>
            </Link>
        </SingleComponentWrapper>
    );
};
