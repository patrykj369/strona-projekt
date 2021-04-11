import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper3 = styled(Wrapper)`
    box-sizing: border-box;
    padding: 10px;
`;

const InnerWrapper2 = styled.div`
    width: 18rem;
    height: 20rem;
    background: ${Colors.white};
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);
    border:1px solid rgba(143, 143, 143, 0.171);
    border-radius: 8px;
`;

const MyImage = styled.img`
    width: 80px;
    height: 80px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const LeftMenu: FC = () => {
    return (
        <Wrapper3 className="wrapper">
            <InnerWrapper2 className="container">
                <MyImage src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' className="profileImage"></MyImage>
            </InnerWrapper2>
        </Wrapper3>
    );
};