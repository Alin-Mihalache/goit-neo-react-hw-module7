import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.conatactListContainer}>
      {contacts.map((contact_i) => (
        <li key={contact_i.id}>
          <Contact data={contact_i} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
