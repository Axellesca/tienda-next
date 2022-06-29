import Link from 'next/link';
import style from '../styles/Menu.module.css';
import { useAppContext } from './stateWrapper';
import Image from 'next/image';


export default function Menu(){

  const cart = useAppContext();

  function handleOpenCart(){
    cart.openCart();
  }

    return (
      <nav className={style.menu}>
        <div>
          <Image
            src='/leyenda.png'
            width={164}
            height={65}
          />
        </div>
        <div>
            <Link href='/'>
                <a className={style.link}>Home</a>
            </Link>
            <Link href='/store'>
                <a className={style.link}>Store</a>
            </Link>
            <Link href='/faq'>
                <a className={style.link}>FAQ</a>
            </Link>
        </div>
        <div>
            <a 
              href="#" 
              className={style.link}
              onClick={handleOpenCart}
            >
              {" "}Cart ({cart.getNumberOfItems()})
            </a>
        </div>
      </nav>
    )
}