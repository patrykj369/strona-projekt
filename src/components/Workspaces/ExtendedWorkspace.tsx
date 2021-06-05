import { FC, useState, ChangeEvent, useEffect} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {ResumeWork} from '../ResumeWork/ResumeWork';

import {Link} from 'react-router-dom';

import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

interface props{
    type: string;
}

const workspacesData = [
    {
        id: 1,
        photoUrl: 'https://media.bizj.us/view/img/10831215/article41200x1200*750xx1200-675-0-391.png',
        name: 'Client contract',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id: 2,
        photoUrl: 'https://alidropship.com/wp-content/uploads/2019/03/how-to-find-a-supplier.jpg',
        name: 'Supplier contract',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id: 3,
        photoUrl: 'https://www.icgconstruction.com/sites/www.icgconstruction.com/files/assets/1484_06.jpg',
        name: 'Corporate',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id: 4,
        photoUrl: 'https://images.idgesg.net/images/article/2018/05/teamwork_fist_bump_rawpixel_cc0_via_unsplash_1200x800-100758133-large.jpg',
        name: 'Group norms',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id: 5,
        photoUrl: 'https://www.mashvisor.com/blog/wp-content/uploads/2019/07/types-of-real-estate-contracts-lease-agreement-768x512.jpg',
        name: 'Real estate contracts',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    }
]


const Wrapper = styled.div`
    color: ${Colors.white};
    position: absolute;
    margin-left: 320px;
    //margin-bottom: -100px;
    font-family: sans-serif;

    .reasumeWork{
        margin-top: 120px;
        color: ${Colors.navy_blue};
    }
`;




export const ExtendedWorkspace: FC<props> = (props) => {

    const WorkspaceContent = styled.div`
        margin-top: 128px;
        height: 325px;
        width: 860px;
        border-radius: 8px;
        box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);
        display: grid;
        grid-template-rows: 2fr 1.2fr;
        background-color: ${Colors.white};

        .backPhoto{
            background-image: url(${workspacesData[parseInt(props.type)].photoUrl});
            background-position: center;
            background-size: cover;
            border-radius: 8px 8px 0 0;
        }
        .workspaceTitle{
            display: grid;
            grid-template-rows: 1fr 2fr;
            grid-template-columns: 100px 1fr;
            padding: 10px;
            background-color: ${Colors.white};
            border-radius: 8px;

            h1{
                color: ${Colors.navy_blue};
                font-weight: 600;
                font-size: ${fontSize[20]};
                grid-row: 1;
                grid-column: 2;
            }
            p{
                grid-row: 2;
                grid-column: 2;
                margin-top: 5px;
                color: ${Colors.text_color};
                line-height: ${fontSize[22]};
            }

            img {
                position: absolute;
                width: 70px;
                height: 70px;
                grid-row: 1;
                grid-column-start: 1;
                grid-column-end: 2;
                margin-top: 12px;
            }
        }
    `;

    return(
        <Wrapper>
            {/* <h1>{props.type === "client" ? "client" : "dupa"}</h1> */}

            <WorkspaceContent>
                <div className="backPhoto" >

                </div>
                <div className="workspaceTitle">
                    <img src="./media/icons/entities2.svg" alt="corporate"></img>
                    <h1>{workspacesData[parseInt(props.type)].name}</h1>
                    <p>{workspacesData[parseInt(props.type)].content}</p>
                </div>
            </WorkspaceContent>


            <section className="reasumeWork">
                <ResumeWork/>
            </section>
        </Wrapper>


    )
}
