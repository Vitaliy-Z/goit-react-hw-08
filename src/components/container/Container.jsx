import { useSelector } from "react-redux";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import {
  selectContactsError,
  selectContactsLoading
} from "../../redux/contacts/selectors";
import Header from "../header/Header";

import styles from "./Container.module.css";
import Loader from "../loader/Loader";

export default function Container({ children }) {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const contactsLoading = useSelector(selectContactsLoading);
  const contactsError = useSelector(selectContactsError);

  return (
    <div className={styles.container}>
      <Header />
      {authLoading ?? contactsLoading ? (
        <Loader />
      ) : authError ?? contactsError ? (
        <p style={{ textAlign: "center" }}>
          Opss... Something happen. Please try! 😢
        </p>
      ) : (
        children
      )}
      <p className={styles.footer}>
        Project created by{" "}
        <a href="https://github.com/Vitaliy-Z" target="_black">
          Vitalii Zvieriev
        </a>
      </p>
    </div>
  );
}
