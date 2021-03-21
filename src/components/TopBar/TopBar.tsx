import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledHelpers/Components';

const InputWrapper = styled.div`
`;

const CustomImg = styled.img``;
const CustomInput = styled.input``;

export const TopBar: FC = () => {
    return(
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src="./media/logo.png"/>
                <div>
                    <ExpandedMenu/>
                </div>
                <InputWrapper>
                    <CustomInput type="text"/>
                    <input type="text"/>
                    <CustomImg src="./media/icons/search.png" alt="" title=""/>
                </InputWrapper>
                <RightIcons>
                    <CustomImg src="./media/icons/house.png"/>
                    <CustomImg src="./media/icons/comments.png"/>
                    <CustomImg src="./media/icons/bell.png"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};