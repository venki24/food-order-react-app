import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header =(props) =>{
return(
    <Fragment>
        <header className={classes.header}>
            <h1>Barbique Nation</h1>
            <HeaderCartButton onClicktoButton={props.onCartShowtoHeader}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='meals image'/>
        </div>
    </Fragment>
)



}

export default Header;