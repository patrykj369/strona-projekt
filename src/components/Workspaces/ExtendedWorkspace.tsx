import { FC} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {ResumeWork} from '../ResumeWork/ResumeWork';

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
    top: 50px;
    font-family: sans-serif;


    .reasumeWork{
        margin-top: 80px;
        color: ${Colors.navy_blue};
    }
`;




export const ExtendedWorkspace: FC<props> = (props) => {

    const WorkspaceContent = styled.div`
        margin-top: 30px;
        margin-left: 5px;
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

    const ExploreWorkspace = styled.div`
        margin-top: 30px;
        margin-left: 5px;
        height: 260px;
        width: 860px;
        background-color: ${Colors.dirty2_white};
        padding: 70px 10px 10px 10px;
        display: flex;
        justify-content: space-evenly;
        border: 3px solid ${Colors.white};
        border-radius: 10px;
        box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);

        .workspaceCard{
            width: 260px;
            height: 160px;
            padding: 10px;
            background-color: ${Colors.white};
            transition: transform .5s;
            cursor: pointer;


            h2{
                color: ${Colors.navy_blue};
                font-size: ${fontSize[20]};
                margin-top: 10px;
                margin-bottom: 10px;
               span{
                font-weight: 600;
               }
            }

            p{
                color: ${Colors.text_color};

            }

            img{
                width: 40px;
                height: 42px;
            }
        }

        .workspaceCard:hover{
            transform: scale(.97);
        }

        .workspaceFirst::after{
            content: "";
            background:url(./media/icons/ecosystem.svg);
            position: absolute;
            display: block;

            width: 120px;
            height: 120px;
            background-size: cover;
            opacity: .1;

            margin-top: -130px;
            margin-left: 125px;

        }

        .workspaceSecond::after{
            content: "";
            background:url(./media/icons/house.svg);
            position: absolute;
            display: block;

            width: 140px;
            height: 120px;
            background-size: cover;
            opacity: .1;

            margin-top: -130px;
            margin-left: 100px;

        }

        .workspaceThird::after{
            content: "";
            background:url(./media/icons/bell.svg);
            position: absolute;
            display: block;

            width: 120px;
            height: 135px;
            background-size: cover;
            opacity: .1;

            margin-top: -130px;
            margin-left: 125px;

        }
    `;

    return(
        <Wrapper>
            <WorkspaceContent>
                <div className="backPhoto" >

                </div>
                <div className="workspaceTitle">
                    <img src="./media/icons/entities2.svg" alt="corporate"></img>
                    <h1>{workspacesData[parseInt(props.type)].name}</h1>
                    <p>{workspacesData[parseInt(props.type)].content}</p>
                </div>
            </WorkspaceContent>

            <ExploreWorkspace>
                <div className="workspaceCard workspaceFirst">
                    <img src="./media/icons/ecosystem.svg" alt="entities"></img>
                    <h2>Explore your <span>entities</span></h2>
                    <p>Take a few minutes to look at the most important elements and specificities of your entities.</p>
                </div>
                <div className="workspaceCard workspaceSecond">
                    <img src="./media/icons/house.svg" alt="entities"></img>
                    <h2>Structure the <span>ownership</span></h2>
                    <p>Get a clear view of the ownership by looking at the relations between individuals and enities.</p>
                </div>
                <div className="workspaceCard workspaceThird">
                    <img src="./media/icons/bell.svg" alt="entities"></img>
                    <h2>Define the <span>calendar</span></h2>
                    <p>Prepare future events by creating detailed plans around the life of your entity.</p>
                </div>

            </ExploreWorkspace>

            <section className="reasumeWork">
                <ResumeWork filterBar={true}/>
            </section>
        </Wrapper>

    )
}
