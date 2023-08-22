import baseStyle from './components/styles/Base.module.css'
import Contacts from "./components/modules/Contacts";

function ContactsPage() {
  return (

      <div className={baseStyle.bodyContacts}>
          <h2 className={baseStyle.title}>Contacts</h2>
          <div className={baseStyle.mainContainer}>
              <Contacts/>
          </div>
      </div>
    );
}

export default ContactsPage;
