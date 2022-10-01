// Import Css
import "./SortBy.css";

const SortBy = (props) => {
  return (
    <form className="sortBy">
      <label htmlFor="sortBy">{props.title}</label>
      {props.filterOptions.map((item) => (
        <label htmlFor="">
          <input type="checkbox" name="sortBy" id="" />
          {item}
        </label>
      ))}
    </form>
  );
};

export default SortBy;
