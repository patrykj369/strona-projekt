import React, {FC, useState} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const PaginationBox = styled.div`
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 60px;
    display: flex;

    .inActiveClass{
        text-transform: uppercase;
        font-family: sans-serif;
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
        width: 40px;
        padding-top: 4px;
        padding-bottom: 4px;
        text-align: center;
        transition: background-color .5s;
    }
    a:hover{
        background-color:${Colors.text_color};
        padding-top: 4px;
        padding-bottom: 4px;
        p{
            color: ${Colors.white};
        }
    }

    a{
        text-decoration: none;

    }

    .activeClass{
        text-transform: uppercase;
        font-family: sans-serif;
        font-size: ${fontSize[18]};
        width: 40px;
        padding-top: 4px;
        padding-bottom: 4px;
        text-align: center;
        background-color:${Colors.text_color};
        p{
            color: ${Colors.white};
        }
    }

    div{
        a{
            display: inline-block;
        }
    }
`;

interface props{
    postsPerPage: number;
    totalPosts: number;
    paginate: any;
}

export const Pagination: FC<props> = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumbers: number [] = [];

    const [page=1, setPage] = useState<any>();

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }


    window.addEventListener('click', (event) => {

        if(((event.target as Element).className) === "inActiveClass"){
            const elem = document.querySelectorAll(".activeClass");
            [].forEach.call(elem, function(el: HTMLElement){
                el.classList.remove("activeClass");
            })
            const tmp = document.getElementById((event.target as Element).id);
            tmp?.classList.add("activeClass")
        }
    });


    return (
        <PaginationBox id="paginationBoxik">
            <a href='!#' onClick={()=> {paginate(page-1); setPage(page-1)}}>
                <p>PREVIOUS</p>
            </a>
            <div>
            {pageNumbers.map((number) => (
                    <a  onClick={() => {paginate(number); setPage(number)}} id={number.toString()} href='!#' className="inActiveClass">
                        <p key={number} id={number.toString()} className="inActiveClass">{number} </p>
                    </a>
            ))}
            </div>
            <a href='!#' onClick={()=> {paginate(page+1); setPage(page+1)}}>
                <p>NEXT</p>
            </a>
        </PaginationBox>
    )


}