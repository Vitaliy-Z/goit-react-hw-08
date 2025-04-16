import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";

export default function HomePage() {
  const userIsLogIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to your PhoneBook 📖</h1>

      {userIsLogIn ? (
        <p style={{ textAlign: "center", fontSize: 40 }}>
          What’s up, {user.name}? 🙋‍♀️
        </p>
      ) : (
        <p style={{ textAlign: "center", fontSize: 30, color: "red" }}>
          Please, Log IN!
        </p>
      )}
    </>
  );
}
