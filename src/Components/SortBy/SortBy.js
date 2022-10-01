// Import Css
import "./SortBy.css";

const SortBy = (props) => {
  return (
    <form>
      <label htmlFor="sortBy">{props.title}</label>
      <label htmlFor="">
        <input type="checkbox" name="sortBy" id="" />
      </label>
      <label htmlFor="">
        <input type="checkbox" name="sortBy" id="" />
      </label>
    </form>
  );
};

export default SortBy;
