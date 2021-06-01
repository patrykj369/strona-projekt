import { FC, useState, ChangeEvent, useEffect} from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';


const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${Colors.navy_blue};
`;

export const ExpandedWorkspace: FC = () => {
    return(
        <Wrapper>
            <h1>dupa</h1>
        </Wrapper>
    )
}
