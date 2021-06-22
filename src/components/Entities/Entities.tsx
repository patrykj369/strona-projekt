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

import { ExpandedMenuEntities } from './ExpandedMenuEntities';
import useDropdown from 'react-dropdown-hook';

import { Link } from "react-router-dom";

type GetImg = ReturnType<typeof getImg>
type GetUsers = ReturnType<typeof getUsers>



interface props{
    type: string;
}

export const Entities: FC<props> = ({type}) => {

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
                margin: 10px 10px 10px 0;
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

    .expandedSelector{

        .link{
            text-decoration: none;
        }

        button{
            font-size: ${fontSize[16]};
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            background-color: transparent;
        }

        button:hover{
            background-color: ${Colors.hover_color};
            border-bottom: 1px solid #000;
        }



        img{
            height: 16px;
            margin-right: 5px;
        }
    }

    #followedDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img{
            height: 8px;
            margin-left: 2px;
        }
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

    const [inputText, setInputText] = useState<string>('');

    const {usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const {imageList} = useSelector<IState, IImageReducer>(state =>({
        ...state.photos
    }))

    const [displayStyle, setDisplayStyle] = useState<boolean>(true);

    const [sorting, setSorting] = useState<number>(1);

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

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }

    const [word, setWord] = useState('Followed');

    const compare = (a: any, b: any) => {
        if(sorting === 2){
            if(a.company.name < b.company.name){
                return -1;
            }
            if(a.company.name > b.company.name){
                return 1;
            }
            return 0;
        }
        else if(sorting === 3){
            if(a.company.name < b.company.name){
                return 1;
            }
            if(a.company.name > b.company.name){
                return -1;
            }
            return 0;
        }else{
            return 0;
        }

    }

    const changeSort = () =>{
        if(sorting === 1){
            setSorting(2)
        }
        if(sorting === 2){
            setSorting(3)
        }
        if(sorting === 3){
            setSorting(1)
        }
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
                            <button>All</button>
                        </div>
                        <div className="expandedSelector">
                            <button>...</button>
                        </div>
                        <div className="expandedSelector">
                            <button onClick={changeSort}> <img src="./media/icons/sort.png" alt=""></img> Sort</button>
                        </div>
                        <div className="expandedSelector">
                            <button> <img src="./media/icons/filter.png" alt=""></img> Filters</button>
                        </div>
                        <div className="expandedSelector">
                            <Link className="link" to={type}>
                                <button> <img src="./media/icons/resize.png" alt=""></img></button>
                            </Link>
                        </div>
                        <div className="expandedSelector">
                            <button> <img src="./media/icons/share.png" alt=""></img> Share</button>
                        </div>
                    </div>

                    <div className="rightSiteBar">
                        <div>
                            <input type="text" placeholder="Search..." value={inputText} onChange={inputHandler}></input>
                        </div>
                        <div id="followedDiv" className="expandedSelector" onClick={menuHandler}>
                            <p>Followed</p>

                            {dropdownOpen &&
                                <ExpandedMenuEntities></ExpandedMenuEntities>
                            }
                            <img src="./media/icons/arrow-down.svg" alt=""></img>
                        </div>

                    </div>

                </div>

                {/* tutaj dodac filtry */}

                <div className="filters">
                    <div className="activeFilters">

                    </div>
                    <div className="addFilter">

                    </div>
                </div>

                <div id="cardBox" className="entitiesCardMosaic">
                    {inputText === "" ? usersList.sort(compare).map((x: any) => {
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