import { useSidebarContext } from '../context/sidebar_context';
import { ReactComponent as CloseMenu } from '../images/icon-close-menu.svg';
import { ArrowDown } from '../images';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <button type="button" className="btn close-btn" onClick={closeSidebar}>
        <CloseMenu />
      </button>
      <div className="sidebar-content">
        <div className="sidebar-links">
          <button
            type="button"
            className="btn"
            onClick={() => console.log('Features Button')}
          >
            Features{' '}
            <span>
              <ArrowDown />
            </span>
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => console.log('Company Button')}
          >
            Company{' '}
            <span>
              <ArrowDown />
            </span>
          </button>
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
