import React, {FC, useEffect, useState} from 'react';
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
        display: none;
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

    .buttonPN{
        text-transform: uppercase;
        font-family: sans-serif;
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
        width: 100px;
        padding-top: 8px;
        padding-bottom: 4px;
        text-align: center;
        transition: background-color .5s;
    }
    .buttonPN:hover{
        background-color:${Colors.text_color};
        padding-top: 8px;
        padding-bottom: 4px;
        p{
            color: ${Colors.white};
        }
    }

    .first_last_page{
        text-transform: uppercase;
        font-family: sans-serif;
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
        width: 60px;
        padding-top: 8px;
        padding-bottom: 4px;
        text-align: center;
        transition: background-color .5s;
    }

    .first_last_page:hover{
        background-color:${Colors.text_color};
        padding-top: 8px;
        padding-bottom: 4px;
        p{
            color: ${Colors.white};
        }
    }

    .dots{
        text-transform: uppercase;
        font-family: sans-serif;
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
        width: 60px;
        padding-top: 8px;
        padding-bottom: 4px;
        text-align: center;
    }
`;

interface props{
    postsPerPage: number;
    totalPosts: number;
    paginate: any;
    pageLast: number;
}

export const Pagination: FC<props> = ({postsPerPage, totalPosts, paginate, pageLast}) =>{
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

    const changePage = (pageNumber: number) => {
        if(pageNumber >= 1 && pageNumber <= pageLast){
            const currentPage = page;

            setPage(pageNumber);
            const elem = document.getElementById(pageNumber.toString());
            const elem2 = document.getElementById(pageNumber.toString()+"a");
            elem?.classList.add("activeClass");
            elem?.classList.remove("inActiveClass");
            elem2?.classList.add("activeClass");
            elem2?.classList.remove("inActiveClass");

            if(pageNumber>currentPage ){
                const prevElem = document.getElementById((pageNumber-1).toString());
                const prevElem2 = document.getElementById((pageNumber-1).toString()+"a");
                prevElem?.classList.add("inActiveClass");
                prevElem?.classList.remove("activeClass");
                prevElem2?.classList.add("inActiveClass");
                prevElem2?.classList.remove("activeClass");
            }else{
                const nextElem = document.getElementById((pageNumber+1).toString());
                const nextElem2 = document.getElementById((pageNumber+1).toString()+"a");
                nextElem?.classList.add("inActiveClass");
                nextElem?.classList.remove("activeClass");
                nextElem2?.classList.add("inActiveClass");
                nextElem2?.classList.remove("activeClass");
            }

            if(pageNumber>=3 && pageNumber<pageLast){
                const elem1 = document.getElementById((pageNumber+1).toString());
                const elem2 = document.getElementById((pageNumber+1).toString()+"a");

                if(elem1) elem1.style.display = "inline-block";
                if(elem2) elem2.style.display = "inline-block";

                const elem3 = document.getElementById((pageNumber-2).toString());
                const elem4 = document.getElementById((pageNumber-2).toString()+"a");

                if(elem3) elem3.className = '';
                if(elem4) elem4.className = '';

                if(elem3) elem3.style.display = "none";
                if(elem4) elem4.style.display = "none";

            }




        }

    }
    useEffect(()=>{
        if(page === 1){
            let a = document.getElementById('1');
            let b = document.getElementById('1a');
            let c = document.getElementById('2');
            let d = document.getElementById('2a');
            let e = document.getElementById('3');
            let f = document.getElementById('3a');
            if (a) a.style.display = "inline-block";
            if (b) b.style.display = "inline-block";
            if (c) c.style.display = "inline-block";
            if (d) d.style.display = "inline-block";
            if (e) e.style.display = "inline-block";
            if (f) f.style.display = "inline-block";
        }


    })



    return (
        <PaginationBox id="paginationBoxik">
            <a className="buttonPN" href='!#' onClick={()=> {paginate(page-1); changePage(page-1)}}>
                <p>PREV</p>
            </a>
            <a className="first_last_page" href='!#' onClick={()=> {paginate(1); changePage(1)}}>
                <p>FIRST</p>
            </a>

            <p className="dots">...</p>

            <div>
            {pageNumbers.map((number) => (
                    <a  onClick={() => {paginate(number); changePage(number)}} id={number.toString()} href='!#' className="inActiveClass">
                        <p key={number} id={number.toString() + "a"} className="inActiveClass">{number} </p>
                    </a>
            ))}
            </div>
            <p className="dots">...</p>

            <a className="first_last_page" href='!#' onClick={()=> {paginate(pageLast); changePage(pageLast)}}>
                <p>LAST</p>
            </a>
            <a className="buttonPN" href='!#' onClick={()=> {paginate(page+1); changePage(page+1)}}>
                <p>NEXT</p>
            </a>
        </PaginationBox>
    )


}