import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { PropagateLoader } from "react-spinners";
import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
// It's project was created by Vitalii Zvieriev
import "./App.css";
import { selectErorr, selectLoading } from "../../redux/contactsSlice";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErorr);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <p>
        Project created by{" "}
        <a href="https://github.com/Vitaliy-Z" target="_black">
          Vitalii Zvieriev
        </a>
      </p>
      <h1>Phonebook</h1>
      <ContactForm />
      <hr />
      <SearchBox />
      {loading && <PropagateLoader color="red" size={17} />}
      {error && <p>Error...</p>}
      {!loading && !error && <ContactList />}
    </>
  );
}

export default App;
