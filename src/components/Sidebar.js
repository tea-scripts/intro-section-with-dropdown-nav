import { useSidebarContext } from '../context/sidebar_context';
import { ReactComponent as CloseMenu } from '../images/icon-close-menu.svg';
import {
  ArrowDown,
  IconTodo,
  IconCalender,
  IconPlanning,
  IconReminders,
  ArrowUp,
} from '../images';

const Sidebar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    openDropdown,
    showDropdown,
    openCompanyDropdown,
    showCompanyDropdown,
  } = useSidebarContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <button type="button" className="btn close-btn" onClick={closeSidebar}>
        <CloseMenu />
      </button>
      <div className="sidebar-content">
        <div className="sidebar-links">
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
              className={`${
                !isSidebarOpen || !showDropdown
                  ? 'dropdown-content'
                  : 'dropdown-content show-dropdown'
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
              className={`${
                !isSidebarOpen || !showCompanyDropdown
                  ? 'dropdown-content'
                  : 'dropdown-content show-dropdown'
              }`}
            >
              <ul className="dropdown-links company-dropdown">
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
        <div className="user-links">
          <a href="https://www.google.com" className="login-btn btn">
            Login
          </a>
          <a href="https://www.google.com" className="register-btn btn">
            Register
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
