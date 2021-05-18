import React, {FC, useEffect} from 'react';
import styled from 'styled-components';


import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers } from '../../actions/usersActions';
import { getImg} from '../../actions/imagesActions';
import { getPost} from '../../actions/postsActions';
import { useDispatch, useSelector } from 'react-redux';
import { IImageReducer } from '../../reducers/imageReducers';
import { IPostsReducer } from '../../reducers/postsReducers';

type GetImg = ReturnType<typeof getImg>
type GetUsers = ReturnType<typeof getUsers>
type GetPosts = ReturnType<typeof getPost>

const PublicationWrapper = styled.div`
    .otherInfos{
        font-family: sans-serif;
        margin-left: 20px;
    }

    .publications{
        img{
            width: 90px;
            height: 90px;
            margin-top: 10px;
            object-fit: cover;
        }
    }

    .publicationsFirst{
        display: grid;
        //align-items: center;
        grid-template-columns: 70px 1fr;
        grid-template-rows: 1fr;
    }

    .publicationsContent{
        grid-row: 1;
        grid-column:2;
        padding: 20px;
        margin-left: 10px;
        color: ${Colors.navy_blue};
        font-weight: 600;
    }

    .publicationsDate{
        grid-row: 1;
        grid-column:2;
        display: flex;
        align-items: center;
        padding: 20px;
        margin-left: 10px;
        margin-top:50px;
        font-size: ${fontSize[14]};

        img{
            border-radius: 50%;
            width: 25px;
            height: 25px;
            margin: 0 10px 0 10px;
        }

        .name{
            color: ${Colors.navy_blue};
        }

        .date{
            color: ${Colors.text_color};
        }

    }
`;


export const LatestPublication: FC = () =>{
    // const postId: number = 2;

    // const [title, setTitle] = useState<any>([]);
    // const [image, setImage ] = useState<any>([]);

    // const [userId, setUserID] = useState<any>(1);
    // const [userName, setUserName] = useState<any>([]);
    // const [userImage, setUserImage] = useState<any>([]);

    // useEffect(()=>{

    //     async function getInfo(postID: number) {
    //         try {
    //             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
    //             const data = await response.json();
    //             const title = JSON.stringify(data.title).slice(1,-1);
    //             const titleFirstLetterUpper = title.charAt(0).toUpperCase() + title.slice(1);
    //             setUserID(data.userId);

    //             const responseUrl = await fetch(`https://jsonplaceholder.typicode.com/photos/${postID}`);
    //             const dataUrl = await responseUrl.json();
    //             const url = JSON.stringify(dataUrl.url).slice(1,-1);

    //             const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    //             const dataUser = await responseUser.json();

    //             const responseUrlIcon = await fetch(`https://jsonplaceholder.typicode.com/photos/${userId}`);
    //             const dataUrlIcon = await responseUrlIcon.json();


    //             setTitle((arr: any) => ([...arr, titleFirstLetterUpper]));
    //             setImage((arr: any) => ([...arr, url]));

    //             if(dataUser.name != null){
    //                 const userName = JSON.stringify(dataUser.name).slice(1,-1);
    //                 setUserName((arr: any) => ([...arr, userName]));
    //             }

    //             if(dataUrlIcon.url != null){
    //                 const urlIcon = JSON.stringify(dataUrlIcon.url).slice(1,-1);
    //                 setUserImage(urlIcon);
    //             }
    //         }catch(e){

    //         }

    //     }
    //     try{
    //         getInfo(postId);
    //         getInfo(3);
    //         getInfo(4);
    //     }catch(e){

    //     }

    // }, [userId]);

    const {usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const {imageList} = useSelector<IState, IImageReducer>(state =>({
        ...state.photos
    }))

    const {postsList} = useSelector<IState, IPostsReducer>(state =>({
        ...state.posts
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetImg>(getImg());
        dispatch<GetUsers>(getUsers());
        dispatch<GetPosts>(getPost());
    }, [dispatch]);

    return(
        <PublicationWrapper>
                <div className="otherInfos">

                    <div className="publications">
                        <div className="publicationsFirst">
                            <img src={imageList[1]?.url} alt=""></img>
                            <div className="publicationsContent">

                                <p>{postsList[1]?.title.charAt(0).toUpperCase()+postsList[1]?.title.slice(1)}</p>
                            </div>

                            <div className="publicationsDate">
                                <p className="date">27 feb. 2020</p>
                                <img src={imageList[0]?.url} className="profileImage" alt=""></img>
                                <p className="name">{usersList[0]?.name}</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="otherInfos">

                    <div className="publications">
                        <div className="publicationsFirst">
                            <img src={imageList[2]?.url} alt=""></img>
                            <div className="publicationsContent">

                                <p>{postsList[2]?.title.charAt(0).toUpperCase()+postsList[2]?.title.slice(1)}</p>
                            </div>

                            <div className="publicationsDate">
                                <p className="date">27 feb. 2020</p>
                                <img src={imageList[0]?.url} className="profileImage" alt=""></img>
                                <p className="name">{usersList[0]?.name}</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="otherInfos">

                    <div className="publications">
                        <div className="publicationsFirst">
                            <img src={imageList[3]?.url} alt=""></img>
                            <div className="publicationsContent">

                                <p>{postsList[3]?.title.charAt(0).toUpperCase()+postsList[3]?.title.slice(1)}</p>
                            </div>

                            <div className="publicationsDate">
                                <p className="date">27 feb. 2020</p>
                                <img src={imageList[0]?.url} className="profileImage" alt=""></img>
                                <p className="name">{usersList[0]?.name}</p>
                            </div>

                        </div>

                    </div>
                </div>
        </PublicationWrapper>
    );
}