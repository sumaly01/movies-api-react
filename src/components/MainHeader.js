import { NavLink } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              onClick={props.onClickHandler}
              activeClassName="active"
              to="/"
              exact
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/aboutus">
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
