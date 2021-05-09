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
        width: 70px;
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
        width: 70px;
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
    let iterationKey: number = 0;
    const pageNumbers: number [] = [];

    const [page=1, setPage] = useState<any>();

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    //obsluga dodawania i usuwania klasy dla aktywnych przyciskow stron
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
            //aktywuje zadany przycisk strony po numerze pageNumber
            const elem = document.getElementById(pageNumber.toString());
            const elem2 = document.getElementById(pageNumber.toString()+"a");
            elem?.classList.add("activeClass");
            elem?.classList.remove("inActiveClass");
            elem2?.classList.add("activeClass");
            elem2?.classList.remove("inActiveClass");

            //dezaktywuje poprzedni przycisk strony
            if(pageNumber>currentPage ){
                const prevElem = document.getElementById((pageNumber-1).toString());
                const prevElem2 = document.getElementById((pageNumber-1).toString()+"a");
                prevElem?.classList.add("inActiveClass");
                prevElem?.classList.remove("activeClass");
                prevElem2?.classList.add("inActiveClass");
                prevElem2?.classList.remove("activeClass");
            }else{ //dezaktywuje następny przycisk strony
                const nextElem = document.getElementById((pageNumber+1).toString());
                const nextElem2 = document.getElementById((pageNumber+1).toString()+"a");
                nextElem?.classList.add("inActiveClass");
                nextElem?.classList.remove("activeClass");
                nextElem2?.classList.add("inActiveClass");
                nextElem2?.classList.remove("activeClass");
            }

            //jezeli number jest ostatni to przechodzi na koniec i ukrywa wszysztkie poprzednie oprocz dwoch poprzedzajacych
            if(pageNumber === pageLast){

                //przechodzi po wszystkich stronach od 1 do ostatniej-3 i je ukrywa
                for(let i=1; i<=pageLast-3; i++){
                    const elem1 = document.getElementById(i.toString());
                    const elem2 = document.getElementById(i.toString()+"a");

                    if(elem1) elem1.className = '';
                    if(elem2) elem2.className = '';

                    if(elem1) elem1.style.display = "none";
                    if(elem2) elem2.style.display = "none";

                }

                //pojawia dwie sąsiadujące strony dla ostatniego elementu
                const elemLastA = document.getElementById((pageNumber).toString());
                const elemLastP = document.getElementById((pageNumber).toString()+"a");
                const elem1 = document.getElementById((pageNumber-1).toString());
                const elem2 = document.getElementById((pageNumber-1).toString()+"a");
                const elem3 = document.getElementById((pageNumber-2).toString());
                const elem4 = document.getElementById((pageNumber-2).toString()+"a");

                if(elemLastA) elemLastA.style.display = "inline-block";
                if(elemLastP) elemLastP.style.display = "inline-block";

                if(elem1) elem1.style.display = "inline-block";
                if(elem2) elem2.style.display = "inline-block";

                elem3?.classList.add("inActiveClass");
                elem4?.classList.add("inActiveClass");

                if(elem3) elem3.style.display = "inline-block";
                if(elem4) elem4.style.display = "inline-block";
            }

            //jezeli number jest pierwszy to przechodzi na koniec i ukrywa wszysztkie następne oprocz dwoch kolejnych po number
            if(pageNumber === 1){

                //przechodzi po wszystkich stronach od 4 do ostatniej i je ukrywa
                for(let i=4; i<=pageLast; i++){
                    const elem1 = document.getElementById(i.toString());
                    const elem2 = document.getElementById(i.toString()+"a");

                    if(elem1) elem1.className = '';
                    if(elem2) elem2.className = '';

                    if(elem1) elem1.style.display = "none";
                    if(elem2) elem2.style.display = "none";

                }

                //pojawia dwie sąsiadujące strony dla ostatniego elementu
                const elem1 = document.getElementById((pageNumber+1).toString());
                const elem2 = document.getElementById((pageNumber+1).toString()+"a");
                const elem3 = document.getElementById((pageNumber+2).toString());
                const elem4 = document.getElementById((pageNumber+2).toString()+"a");
                if(elem1) elem1.style.display = "inline-block";
                if(elem2) elem2.style.display = "inline-block";
                elem3?.classList.add("inActiveClass");
                elem4?.classList.add("inActiveClass");
                if(elem3) elem3.style.display = "inline-block";
                if(elem4) elem4.style.display = "inline-block";
            }


        }

    }

    //obsluga przycisku next
    const plusPage = (pageNumber: number) =>{
        if(pageNumber>=3 && pageNumber<pageLast){
            const elem1 = document.getElementById((pageNumber+1).toString());
            const elem2 = document.getElementById((pageNumber+1).toString()+"a");

            elem1?.classList.add("inActiveClass");
            elem2?.classList.add("inActiveClass");
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

    //obsluga przycisku prev
    const minusPage = (pageNumber: number) =>{
        if(pageNumber>1 && pageNumber<=pageLast){
            const elem1 = document.getElementById((pageNumber+2).toString());
            const elem2 = document.getElementById((pageNumber+2).toString()+"a");

            if(elem1) elem1.className = '';
            if(elem2) elem2.className = '';

            if(elem1) elem1.style.display = "none";
            if(elem2) elem2.style.display = "none";



            const elem3 = document.getElementById((pageNumber-1).toString());
            const elem4 = document.getElementById((pageNumber-1).toString()+"a");

            elem3?.classList.add("inActiveClass");
            elem4?.classList.add("inActiveClass");

            if(elem3) elem3.style.display = "inline-block";
            if(elem4) elem4.style.display = "inline-block";

        }
    }

    //przy starcie pokazuje pierwsze trzy strony i z numerem 1 zaznacza jako aktywna
    useEffect(()=>{
        if(page === 1){
            let a = document.getElementById('1');
            let b = document.getElementById('1a');
            let c = document.getElementById('2');
            let d = document.getElementById('2a');
            let e = document.getElementById('3');
            let f = document.getElementById('3a');
            a?.classList.add("activeClass");
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
            <a className="buttonPN" href='!#' onClick={()=> {paginate(page-1); changePage(page-1); minusPage(page-1)}}>
                <p>PREV</p>
            </a>
            <a className="first_last_page" href='!#' onClick={()=> {paginate(1); changePage(1)}}>
                <p>FIRST</p>
            </a>

            <p className="dots">...</p>

            <div>
                {pageNumbers.map((number) => (
                    <a key={(iterationKey++).toString()}  onClick={() => {paginate(number); changePage(number)}} id={number.toString()} href='!#' className="inActiveClass">
                        <p id={number.toString() + "a"} className="inActiveClass">{number} </p>
                    </a>
                ))}
            </div>

            <p className="dots">...</p>

            <a className="first_last_page" href='!#' onClick={()=> {paginate(pageLast); changePage(pageLast)}}>
                <p>LAST</p>
            </a>
            <a className="buttonPN" href='!#' onClick={()=> {paginate(page+1); changePage(page+1); plusPage(page+1)}}>
                <p>NEXT</p>
            </a>
        </PaginationBox>
    )


}