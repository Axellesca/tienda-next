import Head  from "next/head";
import style from '../styles/Layout.module.css'
import Menu from "./menu";
import ShoppingCart from "./shoppingCart";


const Layout = ({children,title}) => {
    return (
        <div>
            <Head>
                <title>Colón Store {title ? `| ${title}` : ''}</title>
                <meta name="description" content="App Store Colón" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="icon" href="/colonIcon.jpg" />
            </Head>

            <Menu/>
            <div className={style.container}>{children}</div>
            <ShoppingCart/>
        </div>
    );
}

export default Layout;