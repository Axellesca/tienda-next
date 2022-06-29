import styles from '../styles/Product.module.css'
import { useAppContext } from './stateWrapper'


export default function CartButton({item}){

  const cart = useAppContext();

  const handleClick = () => {
    cart.addItemToCart(item);
    cart.openCart();
  }

  return (
    <button 
      className={styles.addBoton}
      onClick={handleClick}
    >
      Add to Cart
    </button>
  )
}