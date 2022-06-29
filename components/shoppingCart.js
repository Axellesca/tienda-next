import Product from "./products";
import { useAppContext } from "./stateWrapper"
import styles from '../styles/ShoppingCart.module.css'


export default function ShoppingCart(){

  const cart = useAppContext();

  function handleCloseCart(){
    cart.closeCart();
  }

  function getTotal(){
    const total = cart.items.reduce((acc,item) => acc + item.qty * item.price, 0);

    return total;
  }

  return (
    <div className={styles.shoppingCart} style={{display:cart.isOpen ? 'block' : 'none'}}>

      <button 
        onClick={handleCloseCart}
        className={styles.close}
        >
          Cerrar
      </button>

      {cart.items.length === 0 
        ? <div className={styles.empty}>No hay productos agregados</div> 
        : (
          <>
            <h3>Tus Productos</h3>
            <div>
              {cart.items.map((item) => 
                <Product 
                  key={item.id}
                  item={item}
                  showAs='ListItem'
                  qty={item.qty}
                />
              )}
            </div>
            <div className={styles.total}>
              Total: ${getTotal()}
            </div>
          </>
        )
      }

      

    </div>
  )
}