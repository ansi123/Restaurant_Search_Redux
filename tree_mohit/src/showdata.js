import React from "react";
import index from "../src/redux/action/index";
import { Provider } from "react-redux";
import mystore from "./mystore";

function ShowProductIndex() {
  return (
    <>
      <Provider store={mystore}>
        <index />
      </Provider>
    </>
  );
}

export default ShowProductIndex;

