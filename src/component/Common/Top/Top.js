import React from 'react';
import { Link } from 'react-router-dom';
const Top = () => {
  return (
    <div class="topbar">
      <div class="topbar-left">
        <a href="/" class="logo">
          <span>ADMINISTRATOR</span>
          <i>
            <img src="assets/images/logo-sm.png" height="48" alt="logo" />
          </i>
        </a>
      </div>
      <nav class="navbar-custom">
        <ul class="navbar-right list-inline float-right mb-0">
          <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
            <form role="search" class="app-search">
              <div class="form-group mb-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search.."
                />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </form>
          </li>

          <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
            <a
              class="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/flags/us_flag.jpg"
                class="mr-2"
                height="12"
                alt=""
              />{' '}
              English <span class="mdi mdi-chevron-down"></span>
            </a>
          </li>

          <li class="dropdown notification-list list-inline-item">
            <a
              class="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i class="mdi mdi-bell-outline noti-icon"></i>{' '}
              <span class="badge badge-pill badge-danger noti-icon-badge">
                3
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">
              <h6 class="dropdown-item-text">Notifications (2)</h6>
              <div class="slimscroll notification-item-list">
                <a
                  href="javascript:void(0);"
                  class="dropdown-item notify-item active"
                >
                  <div class="notify-icon bg-success">
                    <i class="mdi mdi-cart-outline"></i>
                  </div>
                  <p class="notify-details">
                    Your order is placed
                    <span class="text-muted">
                      Dummy text of the printing and typesetting industry.
                    </span>
                  </p>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                class="dropdown-item text-center text-primary"
              >
                View all <i class="fi-arrow-right"></i>
              </a>
            </div>
          </li>
          <li class="dropdown notification-list list-inline-item">
            <div class="dropdown notification-list nav-pro-img">
              <a
                class="dropdown-toggle nav-link arrow-none waves-effect nav-user"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="assets/images/users/user-4.jpg"
                  alt="user"
                  class="rounded-circle"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                <a class="dropdown-item" href="#">
                  <i class="mdi mdi-account-circle m-r-5"></i> Profile
                </a>{' '}
                <a class="dropdown-item" href="#">
                  <i class="mdi mdi-wallet m-r-5"></i> My Wallet
                </a>{' '}
                <a class="dropdown-item d-block" href="#">
                  <span class="badge badge-success float-right">11</span>
                  <i class="mdi mdi-settings m-r-5"></i> Settings
                </a>{' '}
                <a class="dropdown-item" href="#">
                  <i class="mdi mdi-lock-open-outline m-r-5"></i> Lock screen
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger" href="#">
                  <i class="mdi mdi-power text-danger"></i> Logout
                </a>
              </div>
            </div>
          </li>
        </ul>
        <ul class="list-inline menu-left mb-0">
          {/* <li class="float-left">
            <button class="button-menu-mobile open-left waves-effect">
              <i class="mdi mdi-menu"></i>
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Top;
