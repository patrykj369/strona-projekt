import React, {ChangeEvent, FC, useEffect, useState} from 'react';
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

            input{
                display: flex;
                font-size: ${fontSize[16]};
                margin-bottom: 4px;
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
                /* grid-row: 1;
                justify-self: end; */
            }

            button{
                width: 30px;
                height: 30px;
                margin-right: 10px;
                margin-top: 10px;
                border: none;
                background-color: transparent;

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

            input{
                display: flex;
                font-size: ${fontSize[16]};
                margin-bottom: 4px;
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

        input{
            margin-right: 5px;
            margin-bottom: 4px;
            font-size: ${fontSize[16]};
            height: 27px;
        }

        button{
                width: 30px;
                height: 30px;
                float: right;
                margin-top: -10px;
                border: none;
                background-color: transparent;
            }

        .tagExpertise{
            margin-bottom: 15px;
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
                margin-bottom: 5px;
            }
        }

        img{
            height: 22px;
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

        input{
            margin-right: 5px;
            margin-bottom: 4px;
            font-size: ${fontSize[16]};
            height: 27px;
        }

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

export const Profile: FC = () => {


    const [company, setCompany] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [city, setCity] = useState('');
    const [relation, setRelation] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [turnEditionProfile, setTurnEditionProfile] = useState(false);
    const [turnEditionContent, setTurnEditionContent] = useState(false);


    const initialExpertise = [
        {
            id: 1, value: 'Mergers and acquisition',
        }
    ];

    const initialSpecialities = [
        {
            id: 1, value: 'Cross border operation',
        },
        {
            id: 2, value: 'Transaction over 500M$',
        }
    ];

    const initialAdmission = [
        {
            id: 1, value: 'Paris bar association',
        },
        {
            id: 2, value: 'Tunisian bar association',
        }
    ];
    const initialCounties = [
        {
            id: 1, value: 'Tunisia',
        }
    ];

    const initialHourlyFee = [
        {
            id: 1, value: '610$/hour (Negociated)',
        }
    ];

    const initialTerms = [
        {
            id: 1, value: 'Monthly 10k$ retainer - see with Jeanny Smith',
        }
    ];

    const initialServices = [
        {
            id: 1, value: 'Corporate M&A and international acquistions',
        }
    ];

    const [expertise, setExpertise] = useState(initialExpertise);
    const [specialities, setSpecialities] = useState(initialSpecialities);
    const [admission, setAdmission] = useState(initialAdmission);
    const [counties, setCounties] = useState(initialCounties);
    const [hourlyFee, setHourlyFee] = useState(initialHourlyFee);
    const [terms, setTerms] = useState(initialTerms);
    const [services, setServices] = useState(initialServices);

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
        setRelation('Partner');
        setTurnEditionProfile(false);
    },[usersList])

    const turnBtn = (event: Event) =>{
        const ev = ((event.target) as Element).id;

        if(ev === "btnOnEditionProfile" || ev === "btnOnEditionProfileImg")
            turnEditionProfile ? setTurnEditionProfile(false) : setTurnEditionProfile(true);
        else if(ev === "btnOnEditionContent" || ev === "btnOnEditionContentImg")
            turnEditionContent ? setTurnEditionContent(false) : setTurnEditionContent(true);

    }

    const inputHandler = (event: ChangeEvent<HTMLInputElement>, type:string)=> {
        switch(type) {
            case 'name':
                setName(event.target.value);
                break;
            case 'company':
                setCompany(event.target.value);
                break;
            case 'city':
                setCity(event.target.value);
                break;
            case 'relation':
                setRelation(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'phoneNumber':
                setPhoneNumber(event.target.value);
                break;
            default:
                console.log("brak zmian");
        }
    }


    const inputHandlerArray = (event: ChangeEvent<HTMLInputElement>, type: string, position: number)=>{
        switch(type) {
            case 'expertise':
                changeItemsFromContent(position, event, type);
            break;
            case 'specialities':
                changeItemsFromContent(position, event, type);
            break;
            case 'admission':
                changeItemsFromContent(position, event, type);
            break;
            case 'counties':
                changeItemsFromContent(position, event, type);
            break;
            case 'hourlyFee':
                changeItemsFromContent(position, event, type);
            break;
            case 'terms':
                changeItemsFromContent(position, event, type);
            break;
            case 'services':
                changeItemsFromContent(position, event, type);
            break;
        default:
                console.log("brak zmian");
        }
    }


    const changeItemsFromContent = (position: number, event: ChangeEvent<HTMLInputElement>, type: string ) => {
        let typ;

        switch(type){
            case 'expertise':
                typ = expertise;
            break;
            case 'specialities':
                typ = specialities;
            break;
            case 'admission':
                typ = admission;
            break;
            case 'counties':
                typ = counties;
            break;
            case 'hourlyFee':
                typ = hourlyFee;
            break;
            case 'terms':
                typ = terms;
            break;
            case 'services':
                typ = services;
            break;


            default:
                typ = expertise;
        }

        const newArr:any = [];
        typ.forEach((x: any) => {
            if(x.id !== position){
                newArr.push(x);
            }else{
                const elem = {
                    id: position, value: event.target.value,
                }

                newArr.push(elem);
            }
        })

        switch(type) {
            case 'expertise':
                setExpertise(newArr);
            break;
            case 'specialities':
                setSpecialities(newArr);
            break;
            case 'admission':
                setAdmission(newArr);
            break;
            case 'counties':
                setCounties(newArr);
            break;
            case 'hourlyFee':
                setHourlyFee(newArr);
            break;
            case 'terms':
                setTerms(newArr);
            break;
            case 'services':
                setServices(newArr);
            break;
        default:
                console.log("brak zmian");
        }

    }


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
                <div key="divProfile1" className="profileDescriptionSecction">

                    {
                        turnEditionProfile !== true
                        ?
                        <p key="pName1" className="boldDescription">{name}</p>
                        :
                        <input key="inputName1" value={name} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, "name")}></input>
                    }

                    {
                        turnEditionProfile !== true
                        ?
                        <p className="boldDescription">{company}</p>
                        :
                        <input key="inputCompany2" value={company} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, "company")}/>
                    }

                    {
                        turnEditionProfile !== true
                        ?
                        <p>{city}</p>
                        :
                        <input key="inputCity3" value={city} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, "city")}/>
                    }

                    {
                        turnEditionProfile !== true
                        ?
                        <p>Partner</p>
                        :
                        <input key="inputRelation4" value={relation} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, "relation")}/>
                    }



                </div>
                <div className="profileCommunicateSecction">
                    <button id="btnOnEditionProfile" onClick={(ev: any) => turnBtn(ev)}><img id="btnOnEditionProfileImg" src="./media/icons/tiny-pencil.png" alt="pencil"></img></button>
                    <div className="dataDescription">


                    {
                        turnEditionProfile !== true
                        ?
                        <p>{email}</p>
                        :
                        <input key="inputEmail5" value={email} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, "email")} />
                    }

                    {
                        turnEditionProfile !== true
                        ?
                        <p>{phoneNumber}</p>
                        :
                        <input key="inputPhoneNumber6" value={phoneNumber} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, "phoneNumber")}/>
                    }
                    </div>
                </div>
            </ProfileDescription>

            <TagContent>
                <button id="btnOnEditionContent" onClick={(ev: any) => turnBtn(ev)}><img id="btnOnEditionContentImg" src="./media/icons/tiny-pencil.png" alt="pencil"></img></button>

                <div className="tagExpertise">
                    <h1>Expertise</h1>

                    <div className="tagExpertiseContent">

                        {
                            turnEditionContent !== true
                            ?

                                expertise.map((x:any) => {
                                    return(
                                        <p>{x.value}</p>
                                    );
                                })

                            :
                                expertise.map((x:any) => {
                                    return(
                                        <input key={"inputExpertise" + x.id} value={x.value} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandlerArray(event, "expertise", x.id)}/>
                                    );
                                })

                        }

                    </div>
                </div>

                <div className="tagExpertise">
                    <h1>Specialties</h1>

                    <div className="tagExpertiseContent">

                        {
                            turnEditionContent !== true
                            ?

                                specialities.map((x:any) => {
                                    return(
                                        <p>{x.value}</p>
                                    );
                                })

                            :
                                specialities.map((x:any) => {
                                    return(
                                        <input key={"inputSpecialitie" + x.id} value={x.value} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandlerArray(event, "specialities", x.id)}/>
                                    );
                                })

                        }
                    </div>
                </div>

                <div className="tagExpertise">
                    <h1>Admission to practice law</h1>

                    <div className="tagExpertiseContent">

                        {
                            turnEditionContent !== true
                            ?

                                admission.map((x:any) => {
                                    return(
                                        <p>{x.value}</p>
                                    );
                                })

                            :
                            admission.map((x:any) => {
                                    return(
                                        <input key={"inputAdmission" + x.id} value={x.value} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandlerArray(event, "admission", x.id)}/>
                                    );
                                })

                        }
                    </div>
                </div>

                <div className="tagExpertise">
                    <h1>Counties</h1>

                    <div className="tagExpertiseContent">

                        {
                            turnEditionContent !== true
                            ?

                                counties.map((x:any) => {
                                    return(
                                        <p>{x.value}</p>
                                    );
                                })

                            :
                                counties.map((x:any) => {
                                    return(
                                        <input key={"inputCounties" + x.id} value={x.value} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandlerArray(event, "counties", x.id)}/>
                                    );
                                })

                        }
                    </div>
                </div>
            </TagContent>

            <PanelInformations>
                <h1>Panel informations</h1>

                <div className="panelInformations">
                    <p className="headerPanel">Hourly fee</p>

                    {
                            turnEditionContent !== true
                            ?

                                hourlyFee.map((x:any) => {
                                    return(
                                        <p className="contentPanel">{x.value}</p>
                                    );
                                })

                            :
                                hourlyFee.map((x:any) => {
                                    return(
                                        <input key={"inputHourlyFee" + x.id} value={x.value} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandlerArray(event, "hourlyFee", x.id)}/>
                                    );
                                })

                    }

                    <p className="headerPanel">Terms {"&"} conditions</p>

                    {
                            turnEditionContent !== true
                            ?

                               terms.map((x:any) => {
                                    return(
                                        <p className="contentPanel">{x.value}</p>
                                    );
                                })

                            :
                                terms.map((x:any) => {
                                    return(
                                        <input key={"inputTerms" + x.id} value={x.value} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandlerArray(event, "terms", x.id)}/>
                                    );
                                })

                    }

                    <p className="attachmentPanel"><img src="./media/icons/user-plus.svg" alt=""></img>Attachement_test245.jpg</p>

                </div>

                <h1 className="servicesHeader">Services {"&"} projects</h1>

                <div className="servicesPanel">
                    {
                            turnEditionContent !== true
                            ?

                               services.map((x:any) => {
                                    return(
                                        <p className="contentPanel">{x.value}</p>
                                    );
                                })

                            :
                                services.map((x:any) => {
                                    return(
                                        <input key={"inputServices" + x.id} value={x.value} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandlerArray(event, "services", x.id)}/>
                                    );
                                })

                    }
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
    );
};