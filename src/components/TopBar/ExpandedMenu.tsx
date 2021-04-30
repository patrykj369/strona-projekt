import { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';


import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';


const Wrapper = styled.div`
    cursor: pointer;
    position: absolute;
    width: 270px;
    top: 55px;
    background: white;
    z-index:1;
    font-family: sans-serif;
    border-radius: 5px;
    box-shadow: 0 8px 5px -5px rgba(143, 143, 143, 0.171);

    .overflowContainer{
        height: 260px;
        overflow-y: scroll;
        overflow-x: hidden;

    }

    .linksForSites{
            text-decoration: none;
            //color: ${Colors.navy_blue};
            color: black;
        }

    li{
        padding: 5px;
        margin-left: 4px;
        font-size: ${fontSize[20]};

    };

    .specificLi{
        font-size: ${fontSize[16]};
        font-weight: 600;
        margin-left: 2px;
        color: rgb(143, 143, 143);
    };

    .imgLi{
        margin-right: 15px;
        width: 24px;
        height: 22px;
    }

    input{
        font-size: ${fontSize[18]};
        padding: 8px;
        width: 260px;
        height: 35px;
        margin-left: 5px;
        border: 1px solid rgba(143, 143, 143, 0.5);
        border-radius: 4px;
    }

    .userAccount{
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-template-rows: 1fr;
        height: 50px;
    }

    .avatarImg{
        grid-column: 1;
        grid-row: 1;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-left: 5px;
    }

    .seeProfile{
        grid-column: 2;
        grid-row: 1;
        color: ${Colors.blue};
        font-size: ${fontSize[16]};
        font-weight: 600;
        margin-top: 25px;
        margin-left: 12px;
    }
    .seeProfileLink{
        color: ${Colors.blue};
        font-size: ${fontSize[16]};
        text-decoration: none;
    }

    .nameProfil{
        grid-column: 2;
        grid-row: 1;
        margin-left: 12px;
    }

    .logoutButton{
        margin-left:32%;
        font-size: ${fontSize[20]};
        margin-bottom: 8px;
        color: rgb(143, 143, 143);
    }

    .imgLogout{
        width: 24px;
        height: 22px;
        margin-right: 15px;
    }
    .linksForLogout{
        color: rgb(143, 143, 143);
        font-size: ${fontSize[20]};
        text-decoration: none;
    }
`;

export const ExpandedMenu: FC = () => {
    const [inputText, setInputText] = useState<string>('');

    const userID: number = 1;

    const [person, setPerson]= useState<any>(null);
    const [imageUrl, setImageUrl] = useState<any>(null);

    useEffect(() =>{
       async function getName() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
        const data = await response.json();
        setPerson(data.name);
       }

       async function getUrl(){
           const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${userID}`)
           const data = await response.json();
           setImageUrl(data.url);
       }

       getName();
       getUrl();
    });

    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const text = e.target.value;
        setInputText(text);
    }


    return (
        <Wrapper>
            <ul>
                <div className="overflowContainer">
                <input type="text" placeholder="Filter..." value={inputText} onChange={inputHandler}></input>
                <li className="specificLi">Platform</li>

                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/" className="linksForSites"><li><img src="./media/icons/house.png" alt="" className="imgLi"></img>Home</li></Link>
                }
                {'Publications'.toLowerCase().includes(inputText.toLowerCase())&&
                   <Link to="/publications" className="linksForSites"><li><img src="./media/icons/publications.png" alt="" className="imgLi"></img>Publications</li></Link>
                }
                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/people" className="linksForSites"><li><img src="./media/icons/people.png" alt="" className="imgLi"></img>People</li></Link>
                }
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/entities" className="linksForSites"><li><img src="./media/icons/entities2.png" alt="" className="imgLi"></img>Entities</li></Link>
                }
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/administration" className="linksForSites"><li><img src="./media/icons/administration.png" alt="" className="imgLi"></img>Administration</li></Link>
                }


                <li className="specificLi">Workspaces</li>
                {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/client_contract" className="linksForSites"><li><img src="./media/icons/entities.png" alt="" className="imgLi"></img>Client contract</li></Link>
                }
                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/supplier_contract" className="linksForSites"><li><img src="./media/icons/cog.png" alt="" className="imgLi"></img>Supplier contract</li></Link>
                }
                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/corporate" className="linksForSites"><li><img src="./media/icons/entities.png" alt="" className="imgLi"></img>Corporate</li></Link>
                }
                {'Group norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                   <Link to="/group_norms" className="linksForSites"><li><img src="./media/icons/network.png" alt="" className="imgLi"></img>Group norms</li></Link>
                }
                {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                   <Link to="/real_estate_contracts" className="linksForSites"><li><img src="./media/icons/publications.png" alt="" className="imgLi"></img>Real estate contracts</li></Link>
                }
                </div>
                <hr></hr>

                <li className="specificLi">Account</li>
                <div className="userAccount">
                    <img className="avatarImg" src={JSON.stringify(imageUrl).slice(1,-1)} alt=""></img>
                    <li className="nameProfil">{JSON.stringify(person).slice(1,-1)}</li>
                    <li className="seeProfile"><Link to="/profile" className="seeProfileLink">See profile</Link></li>
                </div>

                <Link to="/privacy" className="linksForSites"><li><img src="./media/icons/privacy.png" alt="" className="imgLi"></img>Privacy</li></Link>
                <Link to="/settings" className="linksForSites"><li><img src="./media/icons/settings.png" alt="" className="imgLi"></img>Settings</li></Link>
            </ul>
            <hr></hr>
                <div className="logoutButton">
                    <Link to="/logout" className="linksForLogout"><img src="./media/icons/logout.png" alt="" className="imgLogout"></img><span className="spanDiv">Logout</span></Link>
                </div>
        </Wrapper>
    );
};