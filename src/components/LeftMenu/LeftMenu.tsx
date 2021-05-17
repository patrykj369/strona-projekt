import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import "./LeftMenu.scss";

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {LeftSite} from '../LeftSite/LeftSite';
import { Link } from 'react-router-dom';

import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getSomeImg, getUsers } from '../../actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';

type GetImg = ReturnType<typeof getSomeImg>
type GetUsers = ReturnType<typeof getUsers>

const Wrapper3 = styled(Wrapper)`
    background: ${Colors.grey_hsla};
    padding: 10px;
`;

const InnerWrapper2 = styled.div`

    width: 290px;
    height: 325px;
`;

const MyDiv1 = styled.div`
    background: ${Colors.white};
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);
    border:1px solid rgba(143, 143, 143, 0.171);
    border-radius: 8px;
    position: relative;
    width: 290px;
    height: 325px;
    border-bottom: 2px solid rgba(143, 143, 143, 0.171);
`;

const MyImage = styled.img`
    width: 90px;
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 35%;
`;

const CustomParagraph= styled.p`
    font-family: sans-serif;
    margin-top: 140px;
    /* margin-left: 65px; */
    text-align: center;
    font-size: ${fontSize[20]};
    font-weight: 600;
    color: ${Colors.blue};
    white-space: nowrap;
`;

const CustomParagraph2 = styled.p`
    font-family: sans-serif;
    white-space: nowrap;
    margin-top: 20px;
    margin-bottom: 30px;
    /* margin-left: 65px; */
    text-align: center;
    font-size: ${fontSize[18]};
    color: rgba(143, 143, 143);
`;

const CustomParagraph3 = styled.p`
    position: absolute;
    font-family: sans-serif;
    white-space: nowrap;
    font-size: ${fontSize[18]};
`;

const CustomImg = styled.img`
    position: absolute;
`;



const LeftMenu: FC = () => {

    const { someImg, usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetImg>(getSomeImg());
        dispatch<GetUsers>(getUsers());
    }, [dispatch]);

    return (
        <Wrapper3 className="wrapper">
            <InnerWrapper2 className="container">
                <MyDiv1>
                    <MyImage src={someImg[0]?.url} alt="image" className="profileImage"></MyImage>

                    <CustomParagraph className="customParagraph">{JSON.stringify(usersList[0]?.name)?.slice(1,-1)}</CustomParagraph>

                    <CustomParagraph2 className="customParagraph2">{JSON.stringify(usersList[0]?.company.name)?.slice(1,-1)}</CustomParagraph2>

                    <hr></hr>
                    <CustomImg src="./media/icons/network.png" className="customImage1"/>

                    <CustomParagraph3 className="customParagraph3">Your network</CustomParagraph3>

                    <Link to="/network">
                        <div className="divCustom"><CustomImg src="./media/icons/user-plus.png" className="customImageUser"/></div>
                    </Link>

                    <CustomImg src="./media/icons/publications.svg" className="customImage2"/>

                    <CustomParagraph3 className="customParagraph4">Your Publications</CustomParagraph3>

                    <Link to="/publications">
                        <div className="divCustom1"><CustomImg src="./media/icons/plus.png" className="customImageUser1"/></div>
                    </Link>
                </MyDiv1>
            </InnerWrapper2>

            <LeftSite></LeftSite>
        </Wrapper3>
    );
};

export default LeftMenu;