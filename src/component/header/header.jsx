import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to={"create-group"}>
      <div className="header"></div>
    </Link>
  );
}
