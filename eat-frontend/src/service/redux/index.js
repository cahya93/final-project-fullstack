import { combineReducers } from "redux";
import ProductList from "./productlist";

export default combineReducers({
  Product: ProductList,
});
