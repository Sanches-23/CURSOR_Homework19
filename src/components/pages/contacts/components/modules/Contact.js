import React from "react";
import ContactStyle from '../styles/Contact.module.css';

class Contact extends React.Component {
    render() {
        const {
        //     contact: {
        //         firstName = "NoFirstName",
        //         lastName = "NoLastName",
        //         phone = "+380000000000",
        //         gender = "not specified"
        //     }
        // } = this.props || {};
            firstName = "NoFirstName",
            lastName = "NoLastName",
            phone = "+380000000000",
            gender = "not specified"
        } = this.props.contact || {};

        const genderName = gender === "male" ? "Ч" : gender === "female" ? "Ж" : "Вертоліт";

        return (
            <div className={ContactStyle.contact}>
                <p>
                    <span>
                        FullName: {firstName} {lastName}
                    </span>
                    &nbsp;|&nbsp;
                    <span>
                        Phone: {phone}
                    </span>
                    &nbsp;|&nbsp;
                    <span>
                        gender: {genderName}
                    </span>
                </p>
            </div>
        );
    }
}

export default Contact;