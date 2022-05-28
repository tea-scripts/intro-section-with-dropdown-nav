import logo from '../images/logo.svg';
import { ReactComponent as IconMenu } from '../images/icon-menu.svg';
import { useSidebarContext } from '../context/sidebar_context';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="nav-center">
          <img src={logo} className="nav-logo" alt="snap logo" />
          <button
            type="button"
            className="nav-toggle btn"
            onClick={openSidebar}
          >
            <IconMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
