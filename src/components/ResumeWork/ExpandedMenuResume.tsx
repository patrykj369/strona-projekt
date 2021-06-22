import { FC, useState, ChangeEvent, useEffect} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    margin-left: -10px;
    cursor: pointer;
    position: absolute;
    width: 140px;
    top: 25px;
    background: white;
    z-index:1;
    font-family: sans-serif;
    border-radius: 5px;
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);

    .overflowContainer{
        height: 65px;
        overflow-y: scroll;
        overflow-x: hidden;

        ::-webkit-scrollbar{
            width: 8px;

        }

        ::-webkit-scrollbar-track{
            background: none;

        }

        ::-webkit-scrollbar-thumb {

            background: #b8b7b7;
            height: 20px;
            border-radius: 5px;
        }


        ::-webkit-scrollbar-thumb:hover {
            background: #919090;
        }


    }

    .linksForSites{
            text-decoration: none;
            //color: ${Colors.navy_blue};
            color: black;
        }

    li{
        padding: 5px;
        margin-left: 4px;
        font-size: ${fontSize[20]};

    };

    .imgLi{
        margin-right: 15px;
        width: 24px;
        height: 22px;
    }


`;


export const ExpandedMenuResume: FC<any> = () => {


    return (
        <Wrapper id="Wrapperek">
            <ul>
                <div className="overflowContainer">
                    <li className="linksForSites">Followed</li>
                    <li className="linksForSites">My items</li>
                </div>
            </ul>
        </Wrapper>
    );
};