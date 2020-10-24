import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
import { FaHome, FaWrench } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  isFixed: boolean;
  onSidebarClosed: () => void;
}

interface SidebarState { }

export class Sidebar extends Component<SidebarProps, SidebarState> {
  renderLoggedInButtons() {
    return (
      <Fragment>
      </Fragment>
    )
  }

  renderLoggedOutButtons() {
    return (
      <Fragment>

      </Fragment>
    )
  }

  render() {

    var sidebarClass = "sidebar-frame";
    if (this.props.isOpen) {
      sidebarClass += " open";
    }

    if (this.props.isFixed) {
      sidebarClass += " fixed";
    }

    return (
      <div className={sidebarClass}>
        <div className="mb-2" style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>

          <h4 className="text-light mb-0 mt-2">
            Confer
          </h4>

          <div className="text-right">
            <button type="button" className="btn btn-secondary btn-sm m-1" onClick={this.props.onSidebarClosed}>
              X
            </button>
          </div>

        </div>

        <button className="btn btn-secondary d-block mx-4 my-2">
          <NavLink tag={Link} className="text-light" to="/">
            <FaHome className="mr-2" />
            Home
          </NavLink>
        </button>
        <button className="btn btn-secondary d-block mx-4 my-2">
          <NavLink tag={Link} className="text-light" to="/settings">
            <FaWrench className="mr-2" />
              Settings
            </NavLink>
        </button>

        {/* <AuthAwareContainer
          loggedInRender={this.renderLoggedInButtons()}
          loggedOutRender={this.renderLoggedOutButtons()}
        />

        <div className="my-2"></div>

        <LoginMenu></LoginMenu> */}
      </div>
    );
  }
}
