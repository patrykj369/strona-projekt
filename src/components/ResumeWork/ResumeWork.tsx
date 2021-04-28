import React, { FC } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes'
import {Wrapper} from '../../styledHelpers/Components'
import { Colors } from '../../styledHelpers/Colors';

const WrapperResumeWork = styled(Wrapper)`
    position: relative;
    padding: 0;
`;

const ResumeWorkContent = styled.div`
    top: 660px;
    left: -840px;
    width: 860px;
    min-height: 1000px;
    background-color: ${Colors.grey_hsla};
    position: absolute;


    h2{
        position: absolute;
        top: -40px;
        font-size: ${fontSize[22]};
        font-weight: 600;
        color: ${Colors.navy_blue};
        font-family: sans-serif;
        left: 10px;
    }

    .searchInput{
        position: absolute;
        top: -50px;
        right: 150px;
        width: 205px;
        height: 35px;
        background-color: #fff;
        border: 1px solid rgba(143, 143, 143, 0.3);


        input{
            height: 32px;
            width: 180px;
            border: none;
            padding-left: 10px;
            font-size: ${fontSize[18]};
        }

        img{
            position: absolute;
            top: 8px;
        }
    }
    .follow{
        position: absolute;
        top: -42px;
        right: 50px;
        font-family: sans-serif;
        font-size: ${fontSize[20]};

        p{
            float: left;
        }
        img{
            position: absolute;
            top: 6px;
            margin-left: 5px;
        }
    }
`;

const ResumeBox = styled.div`
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 860px;
    height: 130px;
    background-color: ${Colors.white};
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    h3{
        color: ${Colors.navy_blue};
        font-size: ${fontSize[20]};
        font-family: sans-serif;
    }

    p{
        font-size: ${fontSize[16]};
        font-family: sans-serif;
        color: ${Colors.text_color};
    }

    .flowDiv{
        display: grid;
        grid-template-columns: 150px 150px 250px;
        margin-top: 25px;
        font-family: sans-serif;
        font-size: ${fontSize[14]};
        img{
            width: 15px;
            height: 15px;
        }
        .Subside{
            display: grid;
            grid-template-columns: 30px 1fr;
            p{
                margin-top: 2px;
            }
        }

        .Corp{
            display: grid;
            grid-template-columns: 30px 1fr;
            p{
                margin-top: 2px;
            }
        }

        .Updated{
            display: grid;
            grid-template-columns: 1fr;
            p{
                margin-top: 2px;
            }
        }

    }
`;

const PaginationBox = styled.div`
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 60px;
    display: flex;
    p{
        margin-right: 10px;
        text-transform: uppercase;
        font-family: sans-serif;
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
    }
`;
export const ResumeWork: FC = () => {
    return(
        <WrapperResumeWork>

            <ResumeWorkContent>
            <h2>Resume your work</h2>
            <div className="searchInput">
                <input type="text" placeholder="Filter by title..."></input>
                <img src="./media/icons/search.svg" alt="" className="searchIcon"></img>
            </div>
            <div className="follow">
                <p>Followed</p>
                <img src="./media/icons/arrow-down.svg" alt=""></img>
            </div>
                <ResumeBox>
                    <h3>World company SAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci.
                        Donec vehicula justo ut nulla aliquet at tincidunt metus tristique
                    </p>
                <div className="flowDiv">
                    <div className="Subside">
                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                        <p>Subsid. corp.</p>
                    </div>
                    <div className="Corp">
                        <img src="./media/icons/entities2.svg" alt=""></img>
                        <p>Corporate</p>
                    </div>
                    <div className="Updated">
                        <p>Updated 3 days ago by John Doe</p>
                    </div>
                </div>
                </ResumeBox>
                <ResumeBox>
                <h3>World company SAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci.
                        Donec vehicula justo ut nulla aliquet at tincidunt metus tristique
                    </p>
                <div className="flowDiv">
                    <div className="Subside">
                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                        <p>Subsid. corp.</p>
                    </div>
                    <div className="Corp">
                        <img src="./media/icons/entities2.svg" alt=""></img>
                        <p>Corporate</p>
                    </div>
                    <div className="Updated">
                        <p>Updated 3 days ago by John Doe</p>
                    </div>
                </div>
                </ResumeBox>
                <ResumeBox>
                <h3>World company SAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci.
                        Donec vehicula justo ut nulla aliquet at tincidunt metus tristique
                    </p>
                <div className="flowDiv">
                    <div className="Subside">
                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                        <p>Subsid. corp.</p>
                    </div>
                    <div className="Corp">
                        <img src="./media/icons/entities2.svg" alt=""></img>
                        <p>Corporate</p>
                    </div>
                    <div className="Updated">
                        <p>Updated 3 days ago by John Doe</p>
                    </div>
                </div>
                </ResumeBox>
                <ResumeBox>
                <h3>World company SAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci.
                        Donec vehicula justo ut nulla aliquet at tincidunt metus tristique
                    </p>
                <div className="flowDiv">
                    <div className="Subside">
                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                        <p>Subsid. corp.</p>
                    </div>
                    <div className="Corp">
                        <img src="./media/icons/entities2.svg" alt=""></img>
                        <p>Corporate</p>
                    </div>
                    <div className="Updated">
                        <p>Updated 3 days ago by John Doe</p>
                    </div>
                </div>
                </ResumeBox>
                <ResumeBox>
                <h3>World company SAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci.
                        Donec vehicula justo ut nulla aliquet at tincidunt metus tristique
                    </p>
                <div className="flowDiv">
                    <div className="Subside">
                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                        <p>Subsid. corp.</p>
                    </div>
                    <div className="Corp">
                        <img src="./media/icons/entities2.svg" alt=""></img>
                        <p>Corporate</p>
                    </div>
                    <div className="Updated">
                        <p>Updated 3 days ago by John Doe</p>
                    </div>
                </div>
                </ResumeBox>
                <ResumeBox>
                <h3>World company SAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci.
                        Donec vehicula justo ut nulla aliquet at tincidunt metus tristique
                    </p>
                <div className="flowDiv">
                    <div className="Subside">
                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                        <p>Subsid. corp.</p>
                    </div>
                    <div className="Corp">
                        <img src="./media/icons/entities2.svg" alt=""></img>
                        <p>Corporate</p>
                    </div>
                    <div className="Updated">
                        <p>Updated 3 days ago by John Doe</p>
                    </div>
                </div>
                </ResumeBox>
                <ResumeBox>
                <h3>World company SAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci.
                        Donec vehicula justo ut nulla aliquet at tincidunt metus tristique
                    </p>
                <div className="flowDiv">
                    <div className="Subside">
                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                        <p>Subsid. corp.</p>
                    </div>
                    <div className="Corp">
                        <img src="./media/icons/entities2.svg" alt=""></img>
                        <p>Corporate</p>
                    </div>
                    <div className="Updated">
                        <p>Updated 3 days ago by John Doe</p>
                    </div>
                </div>
                </ResumeBox>
                <ResumeBox>
                <h3>World company SAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci.
                        Donec vehicula justo ut nulla aliquet at tincidunt metus tristique
                    </p>
                <div className="flowDiv">
                    <div className="Subside">
                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                        <p>Subsid. corp.</p>
                    </div>
                    <div className="Corp">
                        <img src="./media/icons/entities2.svg" alt=""></img>
                        <p>Corporate</p>
                    </div>
                    <div className="Updated">
                        <p>Updated 3 days ago by John Doe</p>
                    </div>
                </div>
                </ResumeBox>

                <PaginationBox>
                    <p>Previous</p>
                    <p>01</p>
                    <p>02</p>
                    <p>03</p>
                    <p>Next</p>
                </PaginationBox>

            </ResumeWorkContent>
        </WrapperResumeWork>
    );
};