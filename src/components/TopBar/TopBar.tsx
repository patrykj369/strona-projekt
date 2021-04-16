import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import './TopBar.css';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';
import { fontSize } from '../../styledHelpers/FontSizes';

const Wrapper2 = styled(Wrapper)`
    padding: 0;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
`;

const MenuWrapper = styled.div`

`;

const LeftSide = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: 26px 1fr 1fr;
    text-align: center;
    *{
        box-sizing: border-box;
    }

    .home{
        grid-column:1;
        width: 26px;
        height: 26px;
        margin-top: 10px;
        margin-left: 8px;
    };

    span{
        font-family: sans-serif;
        grid-column: 2;
        font-size: ${fontSize[20]};
        margin-top: 15px;
    };

    .arrow{
        grid-column: 3;
        margin-left: 80px;
        margin-top: 20px;
        width: 14px;
        height: 10px;
    }

`;

const RightIcons = styled.div`
    margin-left: 80px;
`;

const InputWrapper = styled.div``;

const CustomImg = styled.img``;

const CustomInput = styled.input`
    font-size: ${fontSize[18]};
`;



export const TopBar: FC = () => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }

    return(
        <Wrapper2 className="wrapper">
            <InnerWrapper className="container">
                <CustomImg src="./media/logo.png" className="logoImage"/>

                <MenuWrapper className="item1" ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <img src="./media/icons/house.png" className="home" alt=""/>
                        <span>Home</span>
                        <img src="./media/icons/arrow-down.png" className="arrow" alt=""/>
                    </LeftSide>
                    {dropdownOpen &&
                        <ExpandedMenu/>
                    }
                </MenuWrapper>

                <InputWrapper className="item2">
                    <CustomInput type="text" className="customInput" id="searchLegal" placeholder="Search Legalcluster"/>
                    <CustomImg src="./media/icons/search.png" alt="" title="" className="inputImage" />
                </InputWrapper>
                <RightIcons className="item3">
                    <CustomImg src="./media/icons/house.png" className="customImage"/>
                    <CustomImg src="./media/icons/comments.png" className="customImage"/>
                    <CustomImg src="./media/icons/bell.png" className="customImage"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};