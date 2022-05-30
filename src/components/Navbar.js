import logo from '../images/logo.svg';
import { ReactComponent as IconMenu } from '../images/icon-menu.svg';
import { useSidebarContext } from '../context/sidebar_context';
import {
  ArrowDown,
  IconTodo,
  IconCalender,
  IconPlanning,
  IconReminders,
  ArrowUp,
} from '../images';

const Navbar = () => {
  const {
    openSidebar,
    openDropdown,
    showDropdown,
    openCompanyDropdown,
    showCompanyDropdown,
  } = useSidebarContext();

  return (
    <nav className="navbar">
      {/* nav header */}
      <div className="nav-header">
        {/* nav center */}
        <div className="nav-center">
          <img src={logo} className="nav-logo" alt="snap logo" />
          <button
            type="button"
            className="nav-toggle btn"
            onClick={openSidebar}
          >
            <IconMenu />
          </button>
          {/* nav links */}
          <div className="nav-links">
            {/* features dropdown */}
            <div className="dropdown">
              <button
                type="button"
                className="btn dropdown-btn"
                onClick={(e) => openDropdown(e.target)}
              >
                Features
                <span>{showDropdown ? <ArrowUp /> : <ArrowDown />}</span>
              </button>
              <div
                className={`dropdown-content ${
                  showDropdown && 'show-dropdown'
                }`}
              >
                <ul className="dropdown-links">
                  <li>
                    <span>
                      <IconTodo />
                    </span>
                    <a href="https://www.google.com">todo list</a>
                  </li>

                  <li>
                    <span>
                      <IconCalender />
                    </span>
                    <a href="https://www.google.com">calendar</a>
                  </li>

                  <li>
                    <span>
                      <IconReminders />
                    </span>
                    <a href="https://www.google.com">reminders</a>
                  </li>
                  <li>
                    <span>
                      <IconPlanning />
                    </span>
                    <a href="https://www.google.com">planning</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* company dropdown */}
            <div className="dropdown">
              <button
                type="button"
                className="btn dropdown-btn"
                onClick={(e) => openCompanyDropdown(e.target)}
              >
                Company
                <span>{showCompanyDropdown ? <ArrowUp /> : <ArrowDown />}</span>
              </button>
              <div
                className={`company-dropdown dropdown-content ${
                  showCompanyDropdown && 'show-dropdown'
                }`}
              >
                <ul className="dropdown-links">
                  <li>
                    <a href="https://www.google.com">history</a>
                  </li>
                  <li>
                    <a href="https://www.google.com">our team</a>
                  </li>
                  <li>
                    <a href="https://www.google.com">blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="https://www.google.com">Careers</a>
            <a href="https://www.google.com">About</a>
          </div>
          {/* end of nav links */}
        </div>
        {/* end of nav center */}

        <div className="nav-user-links">
          <a href="https://www.google.com" className="login-btn btn">
            Login
          </a>
          <a href="https://www.google.com" className="register-btn btn">
            Register
          </a>
        </div>
      </div>
      {/* end of nav header */}
    </nav>
  );
};

export default Navbar;
