import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers } from '../../actions/usersActions';
import { getImg} from '../../actions/imagesActions';
import { useDispatch, useSelector } from 'react-redux';
import { IImageReducer } from '../../reducers/imageReducers';

type GetImg = ReturnType<typeof getImg>
type GetUsers = ReturnType<typeof getUsers>

const ProfileWrapper = styled.div`
    position: absolute;
    margin-top: 680px;
    margin-left: 320px;
    width: 870px;
    height: 1000px;
`;

export const Profile: FC = () => {

    const ProfileTopBarInfo = styled.div`

            width: 870px;
            height: 35px;

            .buttons{
                float: right;
            }

            button{
                height: 30px;
                margin: 0 5px;
                background-color: transparent;
                color: ${Colors.navy_blue};
                font-size: ${fontSize[16]};
                border: none;
                font-weight: 600;
            }

            img{
                height: 16px;
            }
        `;

    const ProfileDescription = styled.div`
        background-color: green;
        width: 870px;
        height: 140px;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;

        .profilePhotoSection{
            display: grid;
            grid-column: 1;
            padding: 10px;
            img{
                border-radius: 50%;
                height: 90px;
                margin-bottom: 5px;
            }

            button{
                width: 95px;
                background-color: transparent;
                color: ${Colors.text_color};
                border: none;
                font-size: ${fontSize[16]};
            }
        }

        .profileDescriptionSecction{

        }
    `;

    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const {usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const {imageList} = useSelector<IState, IImageReducer>(state =>({
        ...state.photos
    }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetImg>(getImg());
        dispatch<GetUsers>(getUsers());
    }, [dispatch]);

    useEffect(()=>{
        setCompany(usersList[0]?.company.name);
        setName(usersList[0]?.name);
        setCity(usersList[0]?.address.city);
    },[usersList])

    return(
        <ProfileWrapper>
            <ProfileTopBarInfo>
                <div className="buttons">
                    <button><img src="./media/icons/comments.svg" alt="message"></img> Message</button>
                    <button><img src="./media/icons/plus.svg" alt="plus"></img> Create a request</button>
                    <button><img src="./media/icons/administration.svg" alt="cluster"></img> Add to cluster</button>
                </div>
            </ProfileTopBarInfo>
            <ProfileDescription>
                <div className="profilePhotoSection">
                    <img src={imageList[0]?.thumbnailUrl} alt=""></img>
                    <button>See profile</button>
                </div>
                <div className="profileDescriptionSecction">
                    <p>{name}</p>
                    <p>{company}</p>
                    <p>{city}</p>
                    <p>Partner</p>
                </div>
                <div className="profileCommunicateSecction">

                </div>
            </ProfileDescription>
        </ProfileWrapper>
    )

}