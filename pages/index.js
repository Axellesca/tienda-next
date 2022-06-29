import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Product from '../components/products'
import { getLatestItems } from '../services/itemService'
import styles from '../styles/Home.module.css'
import stylesProduct from '../styles/Product.module.css'


export default function Home({items}) {
  return (
    <Layout title='Welcome'>
      {/* <h1>Club Atlético Colón</h1> */}
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h2>Club Atlético Colón de Santa Fe</h2>
            <p>El 4 de junio de 2021 se convirtió en el día más importante para la historia del club, al consagrarse campeón por primera vez en la máxima categoría del fútbol Argentino, obteniendo la Copa de la Liga Profesional 2021. El equipo, dirigido por Eduardo Domínguez, ratificó su buena campaña en una final soñada y se impuso por 3:0 ante Racing Club, en el estadio San Juan del Bicentenario.</p>
          </div>
        </div>
      </div>

      <h3>Ultimos Productos</h3>
      <div className={stylesProduct.items}>
        {
          items && items.map((item) => (
            <Product
              key={item.id}
              item={item}
              showAs='item'
            />
          ))
        }
      </div>

      <div className={styles.footer}>
        <Image
          src='/logofooter.png'
          width={580}
          height={205}
        />
      </div>
    </Layout>
  )
}


export async function getStaticProps(){
  const res = await getLatestItems();

  return {
    props:{
      items:res
    }
  }
}