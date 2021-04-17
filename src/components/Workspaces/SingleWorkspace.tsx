import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';


const SingleComponentWrapper = styled(Wrapper)`
    padding: 0;
    float: left;
    background: ${Colors.grey_hsla};
`;

const SingleComponentContent = styled.div`
    background: #fff;
    width: 320px;
    height: 240px;
    margin: 10px 15px 0 0;

`;


export const SingleComponent: FC = () =>{
    return (
        <SingleComponentWrapper>

            <SingleComponentContent>

            </SingleComponentContent>
        </SingleComponentWrapper>
    );
};