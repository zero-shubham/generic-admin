import React from "react";
import Menu from "containers/Menu";
import TopBar from "containers/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import MenuItem from "components/MenuItem";
import homeSvg from "assets/images/home.svg";
import homeBlackSvg from "assets/images/home_black.svg";
import SubMenu from "components/SubMenu";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Menu>
          <MenuItem to="/" img={homeSvg} imgBlack={homeBlackSvg}>
            Home
          </MenuItem>
          <SubMenu header="SubMenu" path="/submenu">
            <MenuItem
              to="/submenu/bookings"
              img={homeSvg}
              imgBlack={homeBlackSvg}
            >
              Booking
            </MenuItem>
            <MenuItem to="/submenu/about" img={homeSvg} imgBlack={homeBlackSvg}>
              About
            </MenuItem>
          </SubMenu>
        </Menu>
        <TopBar />
      </Router>
    </div>
  );
}

export default App;
