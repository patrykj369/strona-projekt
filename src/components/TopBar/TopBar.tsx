import React, { FC } from 'react';
import styled from 'styled-components';

import './TopBar.css';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';
import { fontSize } from '../../styledHelpers/FontSizes';

const Wrapper2 = styled(Wrapper)`
    padding: 10px;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    backgroud: ${Colors.white};
`;

const RightIcons = styled.div``;

const InputWrapper = styled.div``;

const CustomImg = styled.img``;

const CustomInput = styled.input`
    font-size: ${fontSize[18]};
`;

export const TopBar: FC = () => {
    return(
        <Wrapper2 className="wrapper">
            <InnerWrapper className="container">
                <CustomImg src="./media/logo.png" className="logoImage"/>
                <div className="item1">
                    <ExpandedMenu/>
                </div>
                <InputWrapper className="item2">
                    <CustomInput type="text" className="customInput" id="searchLegal" required/>
                    <label id="customLabel" htmlFor="searchLegal">Search Legalcluster</label>
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