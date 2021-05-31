import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';

import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers } from '../../actions/usersActions';
import { getImg} from '../../actions/imagesActions';
import { useDispatch, useSelector } from 'react-redux';
import { IImageReducer } from '../../reducers/imageReducers';

type GetImg = ReturnType<typeof getImg>
type GetUsers = ReturnType<typeof getUsers>

const EntitiesWrapper = styled(Wrapper)`
    position: absolute;
    padding: 0;
    margin: 520px 0 50px 320px;
    border-radius: 5px;
    font-family: sans-serif;
    background-color: ${Colors.grey_hsla};

    .contentEntities{
        border-radius: 10px;
        width: 890px;
        height: 780px;

        .firstLine{
            display: grid;
            grid-template-columns: 1fr 105px 30px;
            padding-right: 12px;
        }

        h2{
            height: 2em;
            font-size: ${fontSize[18]};
            display: flex;
            align-items: center;
            justify-content: left;
            img{
                margin-left: 10px;
            }
        }

        .mosaicDiv{
            display: flex;
            height: 1.8rem;
            margin: 0 5px 0 5px;
            text-align: center;
            align-items: center;
            img{
                width: 20px;
                margin-right: 2px;
            }

            .button{
                border: none;
                display: flex;
                height: 1.2rem;
                margin-top: 6px;
                font-size: ${fontSize[18]};
                text-align: center;
                align-items: center;
            }

            .button:hover{
                background-color: ${Colors.hover_color};
            }
        }

        .mosaicDiv:hover{
            background-color: ${Colors.hover_color};
        }

        .linesDiv{
            display: flex;
            height: 1.8rem;
            text-align: center;
            align-items: center;
            img{
                width: 16px;
            }

            .button{
                border: none;
                height: 1.1rem;
            }

            .button:hover{
                background-color: ${Colors.hover_color};
            }
        }

        .linesDiv:hover{
            background-color: ${Colors.hover_color};
        }

    }

    .topBar{
        width: 890px;
        height: 30px;
        display: grid;
        grid-template-columns: 1fr 17rem;

        .leftSiteBar{
            display: flex;
            div{
                margin: 10px 20px 10px 0;
            }
        }

        .rightSiteBar{

            display: flex;
            div{
                margin: 10px 20px 10px 0;
            }
        }
    }

    .entitiesCardMosaic{
        display: flex;
        flex-wrap: wrap;
    }

    .entitiesCardLines{
         display: block;
    }

    .entitiesCardLines:after{
        content: "";
        display: block;
        height: 20px;
    }
`;

const EntitiesCard = styled.div`
    width: 18rem;
    height: 7rem;
    background-color: #fff;
    margin: 20px 8px 0 0;
    display: grid;
    grid-template-columns: 7rem 2.5fr;
    border-radius: 10px;
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);

    .contentImg{
        grid-column: 1;
        border-radius: 10px 0 0 10px;
    }

    .contentText{
        grid-column: 2;
        background: white;
        border-radius: 10px;
        padding: 8px;

        h2{
            color: ${Colors.navy_blue};
        }

        p{
            margin-top: 1.5rem;
            color: ${Colors.text_color};
            font-size: ${fontSize[14]};
        }
    }


`;


export const Entities: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const {usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const {imageList} = useSelector<IState, IImageReducer>(state =>({
        ...state.photos
    }))

    const [displayStyle, setDisplayStyle] = useState<boolean>(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetImg>(getImg());
        dispatch<GetUsers>(getUsers());
    }, [dispatch]);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const text = e.target.value;
        setInputText(text);

    }

    const changeDisplayLines = () =>{
        const x = document.getElementById('cardBox');

        x?.classList.remove('entitiesCardMosaic');
        x?.classList.add('entitiesCardLines')

        const y = document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>;
        const z = y.length;

        for(let i=0; i<z; i++){
            if(y[i])
            y[i].style.width = '100%';
        }

        setDisplayStyle(false);

    }

    const changeDisplayMosaic = () =>{
        const x = document.getElementById('cardBox');

        x?.classList.remove('entitiesCardLines');
        x?.classList.add('entitiesCardMosaic');

        const y = document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>;
        const z = y.length;

        for(let i=0; i<z; i++){
            if(y[i])
            y[i].style.width = '18rem';
        }

        setDisplayStyle(true);
    }

    return(
        <EntitiesWrapper>
            <div className="contentEntities">
                <div className="firstLine">
                <h2>Entities <img src="./media/icons/cog.svg" alt=""></img></h2>
                <div className="mosaicDiv">
                    <button className="button" onClick={changeDisplayMosaic}>
                    <img src="./media/icons/mosaic.svg" alt="" data-license="collecting by Ralf Schmitzer from the Noun Project"></img>
                    Mosaic
                    </button>
                </div>
                <div className="linesDiv">
                    <button className="button" onClick={changeDisplayLines}>
                    <img src="./media/icons/three_lines.svg" alt="" data-license="Hamburger by Gautam Arora from the Noun Project"></img>
                    </button>
                </div>
                </div>
                <div className="topBar">
                    <div className="leftSiteBar">
                    <div className="expandedSelector">
                        <p>All</p>
                    </div>
                    <div>
                        <p>...</p>
                    </div>
                    <div>
                        <p>Sort</p>
                    </div>
                    <div>
                        <p>Filters</p>
                    </div>
                    <div>
                        <p>Resize</p>
                    </div>
                    <div>
                        <p>Share</p>
                    </div>
                    </div>

                    <div className="rightSiteBar">
                        <div>
                            <input type="text" placeholder="Search..." value={inputText} onChange={inputHandler}></input>
                        </div>
                        <div className="expandedSelector">
                            <p>Followed</p>
                        </div>

                    </div>

                </div>

                <div id="cardBox" className="entitiesCardMosaic">
                    {inputText === "" ? usersList.map((x: any) => {
                        return(
                        <EntitiesCard className="card">
                            <div className="contentImg" style={{ background: `url(${imageList[x.id]?.url})`, backgroundSize: `cover`}}>
                            </div>
                            <div className="contentText">
                            <h2>{x.company.name}</h2>
                            <p>{x.company.catchPhrase}</p>
                            </div>
                        </EntitiesCard>
                    )}): usersList.filter((x: any)=>{
                        if(x.company.name.toLowerCase().includes(inputText.toLowerCase())){
                            return x;
                        }else{
                            return null;
                        }
                    }).map((x: any)=>{
                        if(displayStyle){
                            return(
                            <EntitiesCard className="card">
                                <div className="contentImg" style={{ background: `url(${imageList[x.id]?.url})`, backgroundSize: `cover`}}>
                                </div>
                                <div className="contentText">
                                <h2>{x.company.name}</h2>
                                <p>{x.company.catchPhrase}</p>
                                </div>
                            </EntitiesCard>
                            )
                        }else{
                            return(
                                <EntitiesCard className="card" style={{width: "100%"}}>
                                    <div className="contentImg" style={{ background: `url(${imageList[x.id]?.url})`, backgroundSize: `cover`}}>
                                    </div>
                                    <div className="contentText">
                                    <h2>{x.company.name}</h2>
                                    <p>{x.company.catchPhrase}</p>
                                    </div>
                                </EntitiesCard>
                            )
                        }


                    })}

                </div>
            </div>
        </EntitiesWrapper>
    )
}