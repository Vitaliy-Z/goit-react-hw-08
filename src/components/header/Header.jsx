import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { fetchLogOutUser } from "../../redux/auth/operations";

export default function Header() {
  const dispatch = useDispatch();
  const userIsLogIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const handleLogOut = () => dispatch(fetchLogOutUser());

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          {userIsLogIn && (
            <NavLink className={styles.link} to="/contacts">
              Contacts
            </NavLink>
          )}
        </div>

        {userIsLogIn ? (
          <div className={styles.wrapper}>
            <p className={styles.text}>Hi, {name ?? "User"}!</p>
            <button
              className={styles.link}
              type="button"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className={styles.wrapper}>
            <NavLink className={styles.link} to="/login">
              Log In
            </NavLink>
            <NavLink className={styles.link} to="/register">
              Sing Up
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
