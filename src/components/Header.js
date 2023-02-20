import { useDispatch, useSelector } from 'react-redux';
import { authActions, authActionTypes } from '../store/calculator/authSlice';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch()
  const isAuthorized = useSelector((state)=>state.auth.isAuthorized)

const logOut=()=>{
  dispatch(authActions.logOut())
}

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
