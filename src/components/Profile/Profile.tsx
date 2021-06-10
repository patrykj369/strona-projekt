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
    font-family: sans-serif;
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
        grid-template-columns: 120px 2fr 2fr;

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
            padding: 18px 10px 10px 0;
            font-size: ${fontSize[18]};
            color: ${Colors.navy_blue};

            p{
                margin-bottom: 10px;
            }

            .boldDescription{
                font-weight: 600;
            }
        }

        .profileCommunicateSecction{
            font-size: ${fontSize[18]};
            color: ${Colors.navy_blue};
            display: grid;
            grid-template-rows: 20px 1fr 80px;

            img{
                height: 22px;
                /* margin-right: 10px;
                margin-top: 10px; */
                grid-row: 1;
                justify-self: end;
            }

            p{
                margin-bottom: 10px;
            }

            .dataDescription{
                margin-top: 5px;
                padding: 10px;
                grid-row: 3;
            }
        }
    `;

    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

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
        setEmail(usersList[0]?.email);
        setPhoneNumber(usersList[0]?.phone);
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
                    <p className="boldDescription">{name}</p>
                    <p className="boldDescription">{company}</p>
                    <p>{city}</p>
                    <p>Partner</p>
                </div>
                <div className="profileCommunicateSecction">
                    <img src="./media/icons/tiny-pencil.png" alt="pencil"></img>
                    <div className="dataDescription">
                        <p>{email}</p>
                        <p>{phoneNumber}</p>
                    </div>
                </div>
            </ProfileDescription>
        </ProfileWrapper>
    )
}