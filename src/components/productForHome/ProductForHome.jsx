import ProductItem from "./../productItem/ProductItem";
import { useSelector } from "react-redux";
import "../../redux/loadProducts";
import style from "./poduductForHome.module.css"

const ProductForHome = () => {
    const products = useSelector((state) => state.products.productsArr);

    const sortResult = products.reduce((acc, product) => {
        if (!acc[product.categoriesId]) {
            acc[product.categoriesId] = [];
        }
        if (acc[product.categoriesId].length < 3) {
            acc[product.categoriesId].push(product);
        }
        return acc;
    }, {});

    const productsForHomePage = Object.values(sortResult).flat()


    const productsItem = productsForHomePage.map((product, i) => <ProductItem product={product} key={i} />);

    return (
        <section className={style.intro_product}>
            <div className="container">
                <div className={style.product_menu}>
                    <h5 className={style.product_menu_title}>
                        Телефоны, планшеты, ноутбуки и многое другое!
                    </h5>
                    <div className={style.product_list}>
                        {productsItem}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductForHome;
