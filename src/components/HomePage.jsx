import React from 'react';
import Calendar from "./Calendar";
import homepage_photo from "../graphic/homepage_photo.jpg"
import ModalWindow from "./ModalWindow";

const HomePage = (props) => {
    return(
        <div>
            <div>
                <img src={homepage_photo} alt="homepage_photo" />
            </div>
            <div>
                <Calendar/>
            </div>
            <ModalWindow/>
        </div>
    )
}

export default HomePage