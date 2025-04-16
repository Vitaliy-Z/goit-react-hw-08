import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const filterValue = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handeleChange = (e) => {
    const value = e.target.value.trim();
    value !== filterValue && dispatch(changeFilter(value));
  };
  // It's project was created by Vitalii Zvieriev
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Search contact:</p>
      <input
        className={styles.searchInput}
        type="text"
        value={filterValue}
        onChange={handeleChange}
      />
    </div>
  );
}
