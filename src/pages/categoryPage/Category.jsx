import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./category.module.css";
import ProductItem from "../../components/productItem/ProductItem";

const Category = () => {
  const products = useSelector((state) => state.products.productsArr);
  const { categoryId } = useParams();

  const filteredProducts = products.filter(
    (item) => item.categoriesId === categoryId
  );
  return (
    <div className={style.category}>
      <div className="container">
        <div className={style.category_product}>
          {filteredProducts.length > 0
            ? filteredProducts.map((item, i) => (
                <ProductItem key={i} product={item} />
              ))
            : "Товар в данной категории временно отсутствуєт"}
        </div>
      </div>
    </div>
  );
};

export default Category;
