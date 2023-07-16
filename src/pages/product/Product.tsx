import { Single } from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

export const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};
