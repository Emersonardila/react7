import { NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink  to='/' activeClassName='active'>
              GetUsers
            </NavLink>
          </li>
          <li>
            <NavLink to='/post' activeClassName='active'>
              CreateUsers
            </NavLink>
          </li>
          <li>
            <NavLink to='/post2' activeClassName='active'>
              CreateUsersForm
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
