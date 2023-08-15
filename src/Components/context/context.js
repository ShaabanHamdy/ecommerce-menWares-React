import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let ContainerContext = createContext(null);

export default function ContainerContextProvider(props) {
  const [sideBar, setSideBar] = useState(false); // Side Nav
  const [addToSideCart, setAddToSideCart] = useState([]); // Side Nav
  const [apiData, setApiData] = useState([])

  // ============================================================
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-men-wares-node.vercel.app/product/getAllProducts"
      );
      setApiData(data.products)
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const [first, setfirst] = useState([])
  const getTokenData = () => {
    if (JSON.parse(localStorage.getItem("TOKEN")) != null) {
      const allData = JSON.parse(localStorage.getItem("TOKEN"));
      setAddToSideCart(allData)
    }

  }
  useEffect(() => {
    getTokenData()
  }, [])




  // ====================================================================================
  const clickBtnStore = (item) => {
    let exist = addToSideCart.find((elm) => elm._id == item._id);
    if (exist) {
      let cart = addToSideCart.map((elm) =>
        elm._id == item._id ? { ...exist, quantity: exist.quantity + 1 } : elm,
      );
      setAddToSideCart(cart);
      localStorage.setItem("TOKEN", JSON.stringify(addToSideCart))

    } else {
      let cart = [...addToSideCart, item];
      setAddToSideCart(cart);
      localStorage.setItem("TOKEN", JSON.stringify(addToSideCart))
    }
  };
  
  let removeCart = (removeCart) => {
    let remove = addToSideCart.filter((elm) => elm._id !== removeCart._id);
    localStorage.clear()
    setAddToSideCart(remove);

  };
  let decrement = (item) => {
    let exist = addToSideCart.find((elm) => elm._id === item._id);
    if (exist.quantity > 1) {
      let cart = addToSideCart.map((elm) =>
        elm._id === item._id ? { ...exist, quantity: exist.quantity - 1 } : elm
      );
      setAddToSideCart(cart);

    }
  };
  // ====================================================================
  return (
    <ContainerContext.Provider
      value={{
        clickBtnStore,
        apiData,
        setSideBar,
        decrement,
        removeCart,
        sideBar,
        addToSideCart,
      }}
    >
      {props.children}
    </ContainerContext.Provider>
  );
}

// // ---------------------------------------------------------------------------
