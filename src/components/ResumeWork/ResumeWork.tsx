import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes'
import {Wrapper} from '../../styledHelpers/Components'
import { Colors } from '../../styledHelpers/Colors';
import { Pagination } from '../Pagination/Pagination';

import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import { getComments } from '../../actions/commentsActions';
import { useDispatch, useSelector } from 'react-redux';

type GetComments = ReturnType<typeof getComments>

const WrapperResumeWork = styled(Wrapper)`
    position: relative;
    padding: 0;
`;

const ResumeWorkContent = styled.div`

    width: 860px;
    min-height: 1000px;
    background-color: ${Colors.grey_hsla};
    position: absolute;

    h2{
        position: absolute;
        top: -40px;
        font-size: ${fontSize[22]};
        font-weight: 600;
        color: ${Colors.navy_blue};
        font-family: sans-serif;
        left: 10px;
    }

    .searchInput{
        position: absolute;
        top: -50px;
        right: 150px;
        width: 205px;
        height: 35px;
        background-color: #fff;
        border: 1px solid rgba(143, 143, 143, 0.3);


        input{
            height: 32px;
            width: 180px;
            border: none;
            padding-left: 10px;
            font-size: ${fontSize[18]};
        }

        img{
            position: absolute;
            top: 8px;
        }
    }
    .follow{
        position: absolute;
        top: -42px;
        right: 50px;
        font-family: sans-serif;
        font-size: ${fontSize[20]};

        p{
            float: left;
        }
        img{
            position: absolute;
            top: 6px;
            margin-left: 5px;
        }
    }
`;

const ResumeBox = styled.div`
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 860px;
    height: 130px;
    background-color: ${Colors.white};
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    h3{
        color: ${Colors.navy_blue};
        font-size: ${fontSize[20]};
        font-family: sans-serif;
    }

    p{
        font-size: ${fontSize[16]};
        font-family: sans-serif;
        color: ${Colors.text_color};
    }

    .flowDiv{
        display: grid;
        grid-template-columns: 150px 150px 250px;
        margin-top: 25px;
        font-family: sans-serif;
        font-size: ${fontSize[14]};
        img{
            width: 15px;
            height: 15px;
        }
        .Subside{
            display: grid;
            grid-template-columns: 30px 1fr;
            p{
                margin-top: 2px;
            }
        }

        .Corp{
            display: grid;
            grid-template-columns: 30px 1fr;
            p{
                margin-top: 2px;
            }
        }

        .Updated{
            display: grid;
            grid-template-columns: 1fr;
            p{
                margin-top: 2px;
            }
        }

    }
`;


interface props{
    filterBar: boolean
}

export const ResumeWork: FC<props> = ({filterBar}) => {

    const {commentList} = useSelector<IState, ICommentsReducer>(state => ({
        ...state.comments
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetComments>(getComments());

    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [inputText, setInputText] = useState<any>("");
    const [inputSearchActive, setInputSearchActive] = useState<number>(1);

    const indexOfLastPost: number = currentPage * postsPerPage;
    const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
    const currentPosts = commentList.slice(indexOfFirstPost, indexOfLastPost);
    const lastPage: number = commentList.length / postsPerPage;

    const paginate = (pageNumber:number) => pageNumber>=1 && pageNumber <= lastPage ? setCurrentPage(pageNumber) : console.log("blad");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const text:string = e.target.value;
        setInputText(text);

        if(text !== ""){
            setInputSearchActive(0);
        }else{
            setInputSearchActive(1);
        }
    }

    const FilterBar = styled.div`

        width: 860px;
        height: 40px;
        margin-bottom: 20px;
        display: flex;
        //justify-content: space-evenly;
        margin: 0 auto;

        button{
            height: 30px;
            padding: 0 10px 0 10px;
            border: none;
            border-radius: 2px;
            cursor: pointer;
            margin-right: auto;
            font-size: ${fontSize[16]};
            line-height: 30px;

            img{
                display: inline-block;
                vertical-align: middle;
                width: 20px;
                height: 17px;
            }

        }

        .btn-all{
            background-color: #b2dcf8;
        }

        .btn-all:hover{
            background-color: #939596;
        }

        .btn-sas{
            background-color: #9df5c9;
        }

        .btn-sas:hover{
            background-color: #939596;
        }

        .btn-sarl{
            background-color: #c1e1f7;
        }

        .btn-sarl:hover{
            background-color: #939596;
        }

        .btn-sb{
            background-color: #bdf895;
        }

        .btn-sb:hover{
            background-color: #939596;
        }

        .btn-com{
            background-color: #cdcdce;
        }

        .btn-com:hover{
            background-color: #939596;
        }

        .btn-poa{
            background-color: #dbdfe2;
        }

        .btn-poa:hover{
            background-color: #939596;
        }

        .btn-surv{
            background-color: #e3e8eb;
        }

        .btn-surv:hover{
            background-color: #939596;
        }

        .btn-dots{
            background-color: #fff;
        }

        .btn-dots:hover{
            background-color: #939596;
        }
    `;


    return(
        <WrapperResumeWork>



            <ResumeWorkContent>
            <h2 id="resumeText">Resume your work</h2>

            {filterBar?

                <FilterBar>
                    <button className="btn-all">All</button>
                    <button className="btn-sas"><img src="./media/icons/entities.svg" alt=""></img> SAS</button>
                    <button className="btn-sarl"><img src="./media/icons/entities.svg" alt=""></img> SARL</button>
                    <button className="btn-sb"><img src="./media/icons/entities.svg" alt=""></img> Secondary business</button>
                    <button className="btn-com"><img src="./media/icons/entities.svg" alt=""></img> Communities</button>
                    <button className="btn-poa"><img src="./media/icons/entities.svg" alt=""></img> POA</button>
                    <button className="btn-surv"><img src="./media/icons/entities.svg" alt=""></img> Survey</button>
                    <button className="btn-dots">...</button>
                </FilterBar>

            :null}

            <div className="searchInput">
                <input type="text" placeholder="Filter by title..." value={inputText} onChange={inputHandler}></input>
                <img src="./media/icons/search.svg" alt="" className="searchIcon"></img>
            </div>
            <div className="follow">
                <p>Followed</p>
                <img src="./media/icons/arrow-down.svg" alt=""></img>
            </div>
                {inputText === "" ? currentPosts.map((us: any) =>{
                    return(
                        <ResumeBox key={us.id}>
                            <h3>{us.name.charAt(0).toUpperCase()+us.name.slice(1)}</h3>

                            <p>{us.body.charAt(0).toUpperCase()+us.body.slice(1)}</p>

                            <div className="flowDiv">
                                <div className="Subside">
                                    <img src="./media/icons/ecosystem.svg" alt=""></img>
                                    <p>Subsid. corp.</p>
                                </div>
                                <div className="Corp">
                                    <img src="./media/icons/entities2.svg" alt=""></img>
                                    <p>Corporate</p>
                                </div>
                                <div className="Updated">
                                    <p>{us.email}</p>
                                </div>
                            </div>
                        </ResumeBox>
                    )}): commentList.filter((us: any) => {
                        if(us.name.toLowerCase().includes(inputText.toLowerCase())){
                            return us
                        }else{
                            return null;
                        }
                    }).map((us: any) =>{
                        return(
                            <ResumeBox key={us.id}>
                                <h3>{us.name.charAt(0).toUpperCase()+us.name.slice(1)}</h3>

                                <p>{us.body.charAt(0).toUpperCase()+us.body.slice(1)}</p>

                                <div className="flowDiv">
                                    <div className="Subside">
                                        <img src="./media/icons/ecosystem.svg" alt=""></img>
                                        <p>Subsid. corp.</p>
                                    </div>
                                    <div className="Corp">
                                        <img src="./media/icons/entities2.svg" alt=""></img>
                                        <p>Corporate</p>
                                    </div>
                                    <div className="Updated">
                                        <p>{us.email}</p>
                                    </div>
                                </div>
                            </ResumeBox>
                        )})}
            {
               inputSearchActive ? <Pagination postsPerPage={postsPerPage} totalPosts={commentList.length} paginate={paginate} pageLast={lastPage}></Pagination> : null
            }


            </ResumeWorkContent>
        </WrapperResumeWork>
    );
};