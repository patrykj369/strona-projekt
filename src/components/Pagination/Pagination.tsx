import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const PaginationBox = styled.div`
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 60px;
    display: flex;
    .inActiveClass{
        //margin-right: 10px;
        text-transform: uppercase;
        font-family: sans-serif;
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
        width: 40px;
        padding-top: 8px;
        padding-bottom: 8px;
        text-align: center;
    }
    p:hover{
        border: 1px solid ${Colors.pagination_color};
        background-color:${Colors.pagination_color};
        a{
            color: ${Colors.white};
        }
    }

    a{
        text-decoration: none;
        text-transform: uppercase;
        font-family: sans-serif;
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
        width: 40px;
    }

    .activeClass{
        text-transform: uppercase;
        font-family: sans-serif;
        //color: ${Colors.blue};
        font-size: ${fontSize[18]};
        width: 40px;
        padding-top: 8px;
        padding-bottom: 8px;
        text-align: center;

        border: 1px solid ${Colors.pagination_color};
        background-color:${Colors.pagination_color};
        a{
            color: ${Colors.white};
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

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    // const changeStyles = () => (ev: Event) =>{
    //     const tmp = document.getElementById((ev.target as Element).id);
    //     console.log(tmp);
    //     console.log("duuupa");
    // }

    //const [isActive, setActive] = useState(false);


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
            {pageNumbers.map(number => (
                <p key={number} id={number.toString()} className="inActiveClass">
                    <a  onClick={() => paginate(number)} id={number.toString()} href='!#' className="inActiveClass">
                        {number}
                    </a>
                </p>
            ))}
        </PaginationBox>
    )


}