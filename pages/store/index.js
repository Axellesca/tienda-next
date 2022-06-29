import Image from "next/image";
import Layout from "../../components/layout";
import Product from "../../components/products";
import { getItems } from "../../services/itemService";
import stylesItem from '../../styles/Product.module.css'

export default function Index({items}){
  return(
    <Layout>
        <h1>Colón Store</h1>
        
          {/* // items && items.map(item => <div key={item.id}>
          //     <Image src={item.image} width='200' height='200'/>
          //     {item.title}
          //   </div>) */}
          <div className={stylesItem.items}>
            {items &&
              items.map((item) => (
                <Product 
                  key={item.id}
                  item={item}
                  showAs='Default'
                />
              ))
            }
          </div>
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await getItems();

  return {
    props:{
      items:res,
    },
  };
}