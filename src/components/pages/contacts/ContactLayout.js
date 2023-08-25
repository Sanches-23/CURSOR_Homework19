// import SingleContactStyle from './components/styles/SingleContactStyle.module.css'
// import {useLocation} from 'react-router-dom';
//
// function ContactLayout() {
//     // const { test } = useParams(); // Отримати параметр з URL
//     // console.log({test})
//     const location = useLocation();
//     const { contactData } = location.state;
//
//     return (
//         <div className={SingleContactStyle}>
//             {/*<h2>Contact Details for {test}</h2>*/}
//             {/*<h2>Contact Details for {contactData.firstName}</h2>*/}
//             <div>
//                 <h2>Contact Details</h2>
//                 <p>First Name: {contactData.firstName}</p>
//                 {/*<p>Last Name: {contactData.lastName}</p>*/}
//                 {/*<p>Phone: {contactData.phone}</p>*/}
//             </div>
//         </div>
//     );
// }
//
// export default ContactLayout;
import React from "react";
import SingleContactStyle from './components/styles/SingleContactStyle.module.css'
import { useLocation } from "react-router-dom";

function ContactLayout() {
        const location = useLocation();
        const { contactData } = location.state;

        // return (
        //     <div className={SingleContactStyle.container}>
        //         <div className={SingleContactStyle.imageContainer}>
        //             <img
        //                 className={SingleContactStyle.image}
        //                 src={"https://c4.wallpaperflare.com/wallpaper/101/380/61/cat-animals-bokeh-cute-wallpaper-preview.jpg"}
        //                 alt={"home-img-cat"}
        //             />
        //         </div>
        //         <div className={SingleContactStyle.details}>
        //             <p>First name: {contactData.firstName}</p>
        //             <p>Last name: {contactData.lastName}</p>
        //             <p>Gender: {contactData.gender}</p>
        //             <p>Phone: {contactData.phone}</p>
        //         </div>
        //         <div className={SingleContactStyle.description}>
        //             <p>
        //                 Discription:
        //                 Integer quis fermentum purus. Nullam tortor mauris, mollis a tincidunt sit amet, luctus ut ante. Nullam
        //                 cursus nunc vel ipsum interdum, vitae rutrum ex varius. Aenean a orci ut orci luctus sagittis.
        //                 Pellentesque ac iaculis sem, ut feugiat lectus. Donec non placerat orci. Donec ligula dolor, tincidunt a
        //                 tincidunt vitae, venenatis eget odio.
        //             </p>
        //         </div>
        //         <div> {/*CHAT*/}
        //             <p>
        //              CHAT:
        //              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        //              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        //              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        //             </p>
        //         </div>
        //     </div>
        // );

    return (
        <div className={SingleContactStyle.container}>
            <div className={SingleContactStyle.leftContainer}>
                <div className={SingleContactStyle.leftContainerTop}>
                    <div className={SingleContactStyle.imageContainer}>
                        <img
                            className={SingleContactStyle.image}
                            src={"https://c4.wallpaperflare.com/wallpaper/101/380/61/cat-animals-bokeh-cute-wallpaper-preview.jpg"}
                            alt={"home-img-cat"}
                        />
                    </div>
                    <div className={SingleContactStyle.details}>
                        <p>First name: {contactData.firstName}</p>
                        <p>Last name: {contactData.lastName}</p>
                        <p>Gender: {contactData.gender}</p>
                        <p>Phone: {contactData.phone}</p>
                    </div>
                </div>

                <div className={SingleContactStyle.description}>
                    <p style={{fontWeight: "bold"}}>
                        Discription:
                    </p>
                    <p>
                        Integer quis fermentum purus. Nullam tortor mauris, mollis a tincidunt sit amet, luctus ut ante. Nullam
                        cursus nunc vel ipsum interdum, vitae rutrum ex varius. Aenean a orci ut orci luctus sagittis.
                        Pellentesque ac iaculis sem, ut feugiat lectus. Donec non placerat orci. Donec ligula dolor, tincidunt a
                        tincidunt vitae, venenatis eget odio.
                    </p>
                </div>

            </div>
            <div className={SingleContactStyle.chatContainer}>
                <div className={SingleContactStyle.imageContainer}>
                    <img
                        className={SingleContactStyle.image}
                        src={"https://thumb.tildacdn.com/tild6366-3633-4532-b062-663938326336/-/format/webp/chat-bot-its.jpg"}
                        alt={"home-img-cat"}
                    />
                </div>
            </div>
        </div>
    );

}

export default ContactLayout;


