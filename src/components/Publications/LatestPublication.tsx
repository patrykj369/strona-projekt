import React, {FC} from 'react';
import styled from 'styled-components';


import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

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
    return(
        <PublicationWrapper>
                <div className="otherInfos">

                    <div className="publications">
                        <div className="publicationsFirst">
                            <img src="https://media.istockphoto.com/photos/womans-hands-writing-on-sheet-in-a-clipboard-with-a-pen-isolated-on-picture-id653752914?k=6&m=653752914&s=170667a&w=0&h=zdwZq_u4Ykq_IksHsKshW33-ma-rGLkktFAkUh1pJNU=" alt=""></img>
                            <div className="publicationsContent">

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo </p>
                            </div>

                            <div className="publicationsDate">
                                <p className="date">7 jan. 2020</p>
                                <img src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' className="profileImage" alt=""></img>
                                <p className="name">Patryk Jabłoński</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="otherInfos">

                    <div className="publications">
                        <div className="publicationsFirst">
                            <img src="https://media.istockphoto.com/photos/womans-hands-writing-on-sheet-in-a-clipboard-with-a-pen-isolated-on-picture-id653752914?k=6&m=653752914&s=170667a&w=0&h=zdwZq_u4Ykq_IksHsKshW33-ma-rGLkktFAkUh1pJNU=" alt=""></img>
                            <div className="publicationsContent">

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo </p>
                            </div>

                            <div className="publicationsDate">
                                <p className="date">7 jan. 2020</p>
                                <img src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' className="profileImage" alt=""></img>
                                <p className="name">Patryk Jabłoński</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="otherInfos">

                    <div className="publications">
                        <div className="publicationsFirst">
                            <img src="https://media.istockphoto.com/photos/womans-hands-writing-on-sheet-in-a-clipboard-with-a-pen-isolated-on-picture-id653752914?k=6&m=653752914&s=170667a&w=0&h=zdwZq_u4Ykq_IksHsKshW33-ma-rGLkktFAkUh1pJNU=" alt=""></img>
                            <div className="publicationsContent">

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo </p>
                            </div>

                            <div className="publicationsDate">
                                <p className="date">7 jan. 2020</p>
                                <img src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' className="profileImage" alt=""></img>
                                <p className="name">Patryk Jabłoński</p>
                            </div>

                        </div>

                    </div>
                </div>
        </PublicationWrapper>
    );
}