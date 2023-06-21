import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <nav className={css.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.active}` : `${css.link}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? `${css.active}` : `${css.link}`
            }
          >
            Movies
          </NavLink>
        </nav>
      </div>
      <div className={css.mainSection}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default SharedLayout;
