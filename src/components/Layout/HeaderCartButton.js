import CartIcon from '../Cart/CartIcon.js'
import classes from './HeaderCartButton.module.css'
import { useContext } from 'react';
import CartContext from '../../store/Cart-Context.js';
const HeaderCartButton=(props) =>{

const cartCtx=useContext(CartContext)
const numOfCartItems=cartCtx.items.reduce((currNum,item)=>{
    return currNum+item.amount;
},0);

    return <button className={classes.button} onClick={props.onClicktoButton}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
    </button>



}
export default HeaderCartButton;