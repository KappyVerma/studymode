import "./secondPage.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SecondPage({ data }) {
  const Navigate = useNavigate();
  const eventHandler = (event) => {
    event.preventDefault();

    const newGroup = {
      group: event.target.name.value,
      category: event.target.category.value,
    };
    data.push(newGroup);

    Navigate("/");
  };

  return (
    <div className="mobile">
      <form action="/" className="form" onSubmit={eventHandler}>
        <div className="form__btn-block">
          <Link to="/" className="form__button form__button--font">
            {" "}
            Back{" "}
          </Link>
          <button className="form__button">Create</button>
        </div>
        <div className="form__block">
          <label className="form__label">
            Create a Group
            <input
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Group Name"
              className="form__input form__input--name"
            />
          </label>
          <label className="form__label">
            Group Category
            <select
              name="category"
              className="form__input form__input--category"
            >
              <option value="default">Default</option>
              <option value="studies">Studies</option>
              <option value="work">Work</option>
              <option value="sports">Sports</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}
