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
    height: 1200px;
    background-color: ${Colors.grey_hsla};
    position: absolute;


    h2{
        position: absolute;
        top: -50px;
        font-size: ${fontSize[22]};
        font-weight: 600;
        color: ${Colors.navy_blue};
        font-family: sans-serif;
        left: 10px;
    }
`;

const ResumeBox = styled.div`
    margin-bottom: 10px;
    border-radius: 10px;
    width: 860px;
    height: 130px;
    background-color: ${Colors.white};
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);
`;

export const ResumeWork: FC = () => {
    return(
        <WrapperResumeWork>

            <ResumeWorkContent>
            <h2>Resume your work</h2>
                <ResumeBox>

                </ResumeBox>
                <ResumeBox>

                </ResumeBox>
                <ResumeBox>

                </ResumeBox>
            </ResumeWorkContent>
        </WrapperResumeWork>
    );
};