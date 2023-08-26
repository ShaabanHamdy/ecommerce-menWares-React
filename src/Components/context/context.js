import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export let ContainerContext = createContext(null);

export default function ContainerContextProvider(props) {
  const [sideBar, setSideBar] = useState(false); // Side Nav
  const [addToSideCart, setAddToSideCart] = useState([]); // Side Nav
  const [apiData, setApiData] = useState([])

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-men-wares-node.vercel.app/product/getAllProducts"
      );
      setApiData(data.products)
    } catch (error) {
    }
  };



  // ==================================================================================================
  const [toViewCart, setToViewCart] = useState(null);

  const viewCart = async (prams) => {
    try {
      const { data } = await axios.get(
        `https://ecommerce-men-wares-node.vercel.app/product/getOneProduct/${prams.id}`
      );

      setToViewCart(data.product);
    } catch (error) {
    }
  };

  // ============================================================
  // ==============================================================================================
  const getTokenData = () => {
    if (JSON.parse(localStorage.getItem("TOKEN")) != null) {
      const allData = JSON.parse(localStorage.getItem("TOKEN"));
      setAddToSideCart(allData)
    }

  }

const [qntNum , setQntNum] = useState(0)
  // ====================================================================================
  const clickBtnStore = (item) => {
    let exist = addToSideCart.find((elm) => elm._id == item._id);
    
    setQntNum(exist?.quantity)
    // console.log(qntNum);
    if (exist) {
        let cart = addToSideCart.map((elm) =>
          elm._id == item._id ? { ...exist, quantity: exist.quantity + 1 } : elm,
        );
        setAddToSideCart(cart);
        localStorage.setItem("TOKEN", JSON.stringify(cart))

      } else {
        let cart = [...addToSideCart, item];
        setAddToSideCart(cart);
        localStorage.setItem("TOKEN", JSON.stringify(cart))
      }

  };
  // ==========================================================================
  const [val, setVal] = useState(1);

  const clickBtnViewCart = (item) => {
    if (val < 100) {
      let exist = addToSideCart.find((elm) => elm._id == item._id);
      if (exist) {
        let cart = addToSideCart.map((elm) =>
          elm._id == item._id ? { ...exist, quantity: exist.quantity = + val } : elm,
        );
        setAddToSideCart(cart);
        localStorage.setItem("TOKEN", JSON.stringify(cart))

      } else {
        let cart = [...addToSideCart, item];
        setAddToSideCart(cart);
        localStorage.setItem("TOKEN", JSON.stringify(cart))
      }
    }


  };

  // ========================================================================
  let removeCart = (removeCart) => {
    let remove = addToSideCart.filter((elm) => elm._id !== removeCart._id);
    localStorage.clear()
    setAddToSideCart(remove);

  };
  // ===================================================================================
  let decrement = (item) => {
    let exist = addToSideCart.find((elm) => elm._id === item._id);
    if (exist.quantity > 1) {
      let cart = addToSideCart.map((elm) =>
        elm._id === item._id ? { ...exist, quantity: exist.quantity - 1 } : elm
      );
      setAddToSideCart(cart);

    }
  };
  useEffect(() => {
    getData();
    getTokenData()
  }, []);
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
        toViewCart,
        viewCart,
        val, setVal,
        clickBtnViewCart
      }}
    >
      {props.children}
    </ContainerContext.Provider>
  );
}

// // ---------------------------------------------------------------------------
