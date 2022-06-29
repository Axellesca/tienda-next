import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Product.module.css'
import { convertToPath } from '../lib/utils'
import CartButton from './cartButton'

export default function Product({item,showAs,qty}){

    if(showAs === 'Page'){
      return(
        <div className={style.page}>
          <div className={style.image}>
            <Image
              src={item.image}
              alt={item.description}
              width={800}
              height={800}
            />          
          </div>

          <div className={style.info}>
            <div>
              <h2>{item.title}</h2>
            </div>
            <div className={style.price}>${item.price}</div>
            <div>{item.description}</div>
            <div>
              <CartButton
                item={item}
              />
            </div>
          </div>
        </div>
      )
    }

    if(showAs === 'ListItem'){
      return(
        <div className={style.listItem}>
          <div>
            <Image 
              src={item.image} 
              alt={item.description} 
              width={150} 
              height={150}
            />
          </div>
          <div>
            <div><h3>{item.title}</h3></div>
            <div>${item.price}</div>
            {qty === 0 ? '' : <div>{qty} unidades</div>}
            {qty === 0 ? '' : <div>Total: ARS${qty * item.price}</div>}
          </div>
        </div>
      )
    }

    return (
      <div className={style.item}>
        <div>
          <Link href={`/store/${item.id}`}>
            <a>
              <Image src={item.image} alt={item.description} width={500} height={500}/>
            </a>
          </Link>
        </div>

        <div>
          <h3>
            <Link href={`/store/${item.id}`}>
              <a>
                {item.title}
              </a>
            </Link>
          </h3>
        </div>

        <div>ARS$ {item.price}</div>
        <div>
          <CartButton
            item={item}
          />
        </div>
      </div>
    )

}