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
    margin-top: 1422px;
    margin-left: 320px;
    width: 870px;
    height: 1740px;
    background-color: ${Colors.white};
    border-radius: 10px;

    ::after{
        content: "";
        height: 50px;
        display: inline-block;
    }
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
        //background-color: green;
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
                margin-right: 10px;
                margin-top: 10px;
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

        ::after{
            content: "";
            display: inline-block;
            margin-top: 10px;
            width: 870px;
            height: 1px;
            background-color: ${Colors.dirty2_white};
        }
    `;

    const TagContent = styled.div`
        //background-color: green;
        //width: 870px;
        margin-top: 20px;
        padding: 10px;

        .tagExpertise{
            margin-bottom: 30px;
            h1{
                font-size: ${fontSize[18]};
                color: ${Colors.navy_blue};
                margin-bottom: 10px;
            }

            p{
                padding: 5px 8px 5px 8px;
                background-color: ${Colors.hover_color};
                display: inline-block;
                color: ${Colors.text_color};
                margin-right: 10px;
            }
        }

        img{
            height: 22px;
            position: absolute;
            right: 10px;
        }

        ::after{
            content: "";
            display: inline-block;
            width: 870px;
            margin-left: -10px;
            height: 1px;
            background-color: ${Colors.dirty2_white};
        }
    `;

    const PanelInformations = styled.div`
        //display: grid;
        padding: 0 10px 10px 10px;
        h1{
            font-size: ${fontSize[18]};
            color: ${Colors.navy_blue};
            font-weight: 600;
            margin-bottom: 10px;
            margin-top: 15px;
        }

        .servicesHeader{
            margin-top: 30px;
        }

        .internalHeader{
            margin-top: 30px;
        }

        .headerPanel{
            font-size: ${fontSize[16]};
            color: ${Colors.text_color};
            margin-bottom: 10px;
            margin-top: 20px;
        }

        .contentPanel{
            font-size: ${fontSize[18]};
            color: ${Colors.navy_blue};
            margin-bottom: 10px;
            margin-top: 5px;
        }


        .attachmentPanel{
            display: flex;
            align-items: center;
            height: ${fontSize[30]};
            font-size: ${fontSize[18]};
            border: none;
            background-color: ${Colors.hover_color};
            color: ${Colors.navy_blue};

            img{
                height: 20px;
                margin-right: 5px;
                margin-left: 10px;
            }
        }

        .internalProfile{
            display: grid;
            grid-template-columns: 45px .5fr .2fr .2fr;
            height: 40px;
            background-color: ${Colors.hover_color};
            margin: 5px 0;
            align-items: center;

            .avatar{
                border-radius: 50%;
                height: 32px;
                margin-right: 10px;
                margin-left: 10px;
            }

            p{
                margin-left: 10px;
                font-weight: 600;
                color: ${Colors.navy_blue};
            }

            button{
                display: flex;
                align-items: center;
                font-size: ${fontSize[16]};
                border: none;
                background-color: ${Colors.hover_color};

                img{
                    height: 20px;
                    margin-right: 5px;
                }
            }

            button:hover{
                background-color: ${Colors.grey_hsla};
            }

        }

        ::after{
            content: "";
            display: inline-block;
            width: 870px;
            margin-left: -10px;
            height: 1px;
            background-color: ${Colors.dirty2_white};
        }
    `;

    const TablePanel = styled.div`
        padding: 0 10px 10px 10px;
        margin-bottom: 20px;
        h1{
            font-size: ${fontSize[18]};
            color: ${Colors.navy_blue};
            font-weight: 600;
            margin-bottom: 10px;
            margin-top: 15px;
        }
        
        .headerTable{
            border-bottom: 1px solid ${Colors.dirty2_white};
            height: 30px;
            td{
                
                font-size: ${fontSize[16]};
                color: ${Colors.navy_blue};
                font-weight: 600;
                
            }

        }

        table > tr > td {
            padding: 10px;
        }

        table{
            width: 100%;
        }

        p{
            font-size: ${fontSize[18]};
            color: ${Colors.text_color};
            text-align:  right;
            margin-top: 5px;
            margin-right: 5px;
        }

        .seeMore{
            text-align:  left;
            margin-top: 5px;
            color: ${Colors.navy_blue};
            font-weight: 600;
            margin-bottom: 10px;
        }

        ::after{
            content: "";
            display: inline-block;
            width: 870px;
            margin-left: -10px;
            height: 1px;
            background-color: ${Colors.dirty2_white};
        }
    `;

    const Amount = styled.div`
        padding: 0 10px 10px 10px;
        //margin-bottom: 20px;
        margin-top: -5px;
        h1{
            font-size: ${fontSize[18]};
            color: ${Colors.navy_blue};
            font-weight: 600;
            margin-bottom: 10px;
            margin-top: 15px;
        }        

        .headerAmountTable{
            td{
                
                font-size: ${fontSize[16]};
                color: ${Colors.navy_blue};
                font-weight: 600;
                
            }

        }

        table > tr > td {
            padding: 5px 0 5px 0;
        }

        table{
            width: 100%;
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
                    <button className="singleButton"><img src="./media/icons/comments.svg" alt="message"></img> Message</button>
                    <button className="singleButton"><img src="./media/icons/plus.svg" alt="plus"></img> Create a request</button>
                    <button className="singleButton"><img src="./media/icons/administration.svg" alt="cluster"></img> Add to cluster</button>
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

            <TagContent>
                <img src="./media/icons/tiny-pencil.png" alt="pencil"></img>
                <div className="tagExpertise">
                    <h1>Expertise</h1>

                    <div className="tagExpertiseContent">
                        <p>Mergers and acquisition</p>
                    </div>
                </div>

                <div className="tagExpertise">
                    <h1>Specialties</h1>

                    <div className="tagExpertiseContent">
                        <p>Cross border operation</p>
                        <p>Transaction over 500M$</p>
                    </div>
                </div>

                <div className="tagExpertise">
                    <h1>Admission to practice law</h1>

                    <div className="tagExpertiseContent">
                        <p>Paris bar association</p>
                        <p>Tunisian bar association</p>
                    </div>
                </div>

                <div className="tagExpertise">
                    <h1>Counties</h1>

                    <div className="tagExpertiseContent">
                        <p>Tunisia</p>
                    </div>
                </div>
            </TagContent>

            <PanelInformations>
                <h1>Panel informations</h1>

                <div className="panelInformations">
                    <p className="headerPanel">Hourly fee</p>
                    <p className="contentPanel">610$/hour (Negociated)</p>

                    <p className="headerPanel">Terms {"&"} conditions</p>
                    <p className="contentPanel">Mnthly 10k$ retainer - see with Jeanny Smith</p>

                    <p className="attachmentPanel"><img src="./media/icons/user-plus.svg" alt=""></img>Attachement_test245.jpg</p>

                </div>

                <h1 className="servicesHeader">Services {"&"} projects</h1>

                <div className="servicesPanel">
                    <p className="contentPanel">Corporate M{"&"}A and international acquistions</p>
                </div>

                <h1 className="internalHeader">Internal corespondants</h1>

                <div className="internalContent">
                    <div className="internalProfile">
                        <img className="avatar" src={imageList[1]?.thumbnailUrl} alt="person avatar"></img>
                        <p>{usersList[1]?.name}</p>
                        <button className="singleButton"><img src="./media/icons/comments.svg" alt="message"></img> Message</button>
                        <button className="singleButton"><img src="./media/icons/people.svg" alt="message"></img> Profile</button>
                    </div>

                    <div className="internalProfile">
                        <img className="avatar" src={imageList[2]?.thumbnailUrl} alt="person avatar"></img>
                        <p>{usersList[2]?.name}</p>
                        <button className="singleButton"><img src="./media/icons/comments.svg" alt="message"></img> Message</button>
                        <button className="singleButton"><img src="./media/icons/people.svg" alt="message"></img> Profile</button>
                    </div>
                </div>


            </PanelInformations>

            <TablePanel>
                <h1>Proposals</h1>
                <table>
                    <tr className="headerTable">
                        <td>Name</td> <td>Entity</td> <td>Location</td> <td>Expertise</td> <td>Date</td> <td>Firm</td>
                    </tr>
                    <tr>
                        <td>Operation Time</td> <td>Renault Co</td> <td>France</td> <td>#Tax</td> <td>20/01/2018</td> <td>Racine</td>
                    </tr>
                    <tr>
                        <td>Op. Prometheus</td> <td>Renault HQ</td> <td>USA</td> <td>#M{"&"}A</td> <td>18/01/2019</td> <td>Clifford chance</td>
                    </tr>
                    <tr>
                        <td>Op. Latandre</td> <td>Renault Brazil</td> <td>Italy</td> <td>#Social</td> <td>18/02/2019</td> <td>SVZ</td>
                    </tr>
                </table>
                <p>See more proposals</p>
            </TablePanel>
            
            <TablePanel>
                <h1>Internal reviews</h1>
                <table>
                    <tr className="headerTable">
                        <td>Name</td> <td>Entity</td> <td>Location</td> <td>Expertise</td> <td>Date</td> 
                    </tr>
                    <tr>
                        <td>Operation Time</td> <td>Renault Co</td> <td>France</td> <td>#Tax</td> <td>20/01/2018</td>
                    </tr>
                    <tr>
                        <td>Op. Prometheus</td> <td>Renault HQ</td> <td>USA</td> <td>#M{"&"}A</td> <td>18/01/2019</td>
                    </tr>
                    <tr>
                        <td>Op. Latandre</td> <td>Renault Brazil</td> <td>Italy</td> <td>#Social</td> <td>18/02/2019</td>
                    </tr>
                </table>
                <p className="seeMore">See more Reviews</p>
            </TablePanel>

            <Amount>
                <h1>Amount of fees</h1>
                <table>
                    <tr className="headerAmountTable">
                        <td>Year</td> <td>Cost center</td> <td>Total amount</td> <td>Law firm</td>
                    </tr>
                    <tr>
                        <td>2019</td> <td>CS 153</td> <td>3 500$</td> <td>Clifford chance</td>
                    </tr>
                    <tr>
                        <td>2018</td> <td>CS 153</td> <td>9 500$</td> <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td>2017</td> <td>CS 47</td> <td>10 500$</td> <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td></td> <td>CS 153</td> <td>18 500$</td> <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td></td> <td>CS 32</td> <td>15 500$</td> <td>Linklaters</td>
                    </tr>
                </table>
            </Amount>
            
        </ProfileWrapper>
    )
}