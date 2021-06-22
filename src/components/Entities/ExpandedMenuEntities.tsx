import { FC, useState, ChangeEvent, useEffect} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    right: -55px;
    cursor: pointer;
    position: absolute;
    width: 135px;
    top: 58px;
    background: white;
    z-index:1;
    font-family: sans-serif;
    border-radius: 5px;
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);

    .overflowContainer{
        height: 55px;
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


export const ExpandedMenuEntities: FC<any> = () => {


    return (
        <Wrapper id="Wrapperek">
            <ul>
                <div className="overflowContainer">
                    <li className="linksForSites">Followed</li>
                    <li className="linksForSites">My entities</li>
                </div>
            </ul>
        </Wrapper>
    );
};