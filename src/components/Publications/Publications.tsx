import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';

import {Wrapper} from  '../../styledHelpers/Components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';
import {LatestPublication} from './LatestPublication';
import { Link } from 'react-router-dom';

const WrapperPublications = styled(Wrapper)`
    position: relative;
    padding:0;
`;

const ContentPublications = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    margin-left: 900px;
    margin-top: -160px;
    width: 860px;
    height: 430px;
    background: white;
    border-radius: 10px;
    position: absolute;
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);

    h2{

        font-size: ${fontSize[20]};
        font-weight: 600;
        color: ${Colors.navy_blue};
        font-family: sans-serif;
        margin: 15px 0 5px 20px;
    }

    .importantInfo{
        display: grid;
        grid-template-rows: 65% 20% 15%;
        grid-column: 1;

        /* background:
        linear-gradient(rgba(235, 238, 241, 0), rgba(235, 238, 241, 0.5)),
        url("../media/towers.jpg") center; */

        background-size: 430px 440px;
        border-radius: 10px 0 0 10px;

        font-family: sans-serif;

        span{
            grid-row: 2;
            margin: 10px 20px 0 20px;
            color: ${Colors.white};
            font-size: ${fontSize[20]};
            line-height: 25px;
        }



        .info{
            margin-top: -30px;
            grid-row: 3;
            display: flex;
            align-items: center;
            color:${Colors.white};
            margin-left: 20px;
            font-size: ${fontSize[14]};
            img{
                margin: 0 10px 0 10px;
                border-radius: 50%;
                width: 30px;
                height: 30px;
        }
        }
    }

    LatestPublication{
        grid-column: 2;
    }

    .btn{
        margin-top: 0;
        margin-left: 15px;
        height: 40px;
        background: #fff;
        border: none;
        outline: none; //usuwa czarny border wokol buttona(domyslne dzialanie przegladarki)
        cursor: pointer;
        color: ${Colors.blue};
        font-size: ${fontSize[20]};
        transition: background-color .5s, border-radius .5s;
    }

    .btn:hover{
        height:40px;
        background: ${Colors.hover_color};
        border-radius: 5px;
    }


`;

export const Publications: FC = () => {
    const postId: number = 1;

    const [title, setTitle] = useState<any>(0);
    const [image, setImage ] = useState<any>(0);

    const [userId, setUserID] = useState<any>(0);
    const [userName, setUserName] = useState<any>(0);
    const [userImage, setUserImage] = useState<any>(0);

    useEffect(()=>{

        async function getTitle(postID: number) {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
                const data = await response.json();
                const title = JSON.stringify(data.title).slice(1,-1);
                const titleFirstLetterUpper = title.charAt(0).toUpperCase() + title.slice(1);
                setUserID(data.userId);
                setTitle(titleFirstLetterUpper);
            }catch(e){

            }

        }

        async function getImage(postID: number){
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${postID}`);
                const data = await response.json();
                const url = JSON.stringify(data.url).slice(1,-1);
                setImage(url);
            }catch(e){

            }

        }

        async function getName(userID: number) {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const data = await response.json();

                if(data.name != null)
                setUserName(data.name);
            }catch(e){

            }

           }


        async function getUserImage(userID: number){
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${userID}`);
                const data = await response.json();
                if(data.url != null){
                let url = JSON.stringify(data.url).slice(1,-1);
                setUserImage(url);
            }
            }catch(e){

            }

        }

        try{
            getTitle(postId);
            getImage(postId);
            getName(userId);
            getUserImage(userId);
        }catch(e){

        }

    });

    return(
        <WrapperPublications>
            <ContentPublications>
                <div className="importantInfo" style={{
                    background: `linear-gradient(rgba(235, 238, 241, 0), #9b9999), url(${image}) center`,
                    backgroundPosition: `center`,
                    }}>

                    <span>{title}</span>

                    <div className="info">
                    <p className="tekscior">7 jan. 2020</p>
                    <img src={userImage} alt=""></img>
                    <p className="tekscior">{JSON.stringify(userName).slice(1,-1)}</p>
                    </div>

                </div>

                <div>
                <h2>Latest publications</h2>

                <LatestPublication></LatestPublication>
                <Link to="/publications"><button type="button" className="btn">See more publications</button></Link>
                </div>

            </ContentPublications>
        </WrapperPublications>
    );
};