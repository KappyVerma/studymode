import "./secondPage.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SecondPage({ data }) {
  const Navigate = useNavigate();
  const eventHandler = (event) => {
    event.preventDefault();
    if (!event.target.name.value || !event.target.category.value) {
      return;
    }

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
              type="text"
              name="name"
              placeholder="Group Name"
              className="form__input form__input--name"
            />
          </label>
          <label className="form__label">
            Group Category
            <input
              type="text"
              name="category"
              placeholder="Group Category"
              className="form__input form__input--category"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
