import React, { useContext, useReducer } from 'react';
import { useState } from 'react';
import reducer from '../reducers/sidebar_reducer';

const initialState = {
  isSidebarOpen: false,
};

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  const openDropdown = (evt) => {
    if (evt.textContent === 'Features') {
      setShowDropdown(!showDropdown);
    } else {
      setShowDropdown(showDropdown);
    }
  };

  const openCompanyDropdown = (evt) => {
    if (evt.textContent === 'Company') {
      setShowCompanyDropdown(!showCompanyDropdown);
    } else {
      setShowCompanyDropdown(showCompanyDropdown);
    }
  };

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openDropdown,
        showDropdown,
        openCompanyDropdown,
        showCompanyDropdown,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
