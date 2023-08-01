import { createContext, useEffect, useState } from "react";

export let ContainerContext = createContext(null);

export default function ContainerContextProvider(props) {
  const [sideBar, setSideBar] = useState(false); // Side Nav
  const [addToSideCart, setAddToSideCart] = useState([]); // Side Nav

  // ============================================================

  let getLocal = (data) => {
    
  };

  useEffect(() => {
    getLocal();
  }, []);

  let setLocal = (data) => {
     localStorage.setItem("data", JSON.stringify(data));
  
  };
  

  const clickBtnStore = (item) => {
    let exist = addToSideCart.find((elm) => elm.id === item.id);
    if (exist) {
      let cart = addToSideCart.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty + 1 } : elm
      );
      setAddToSideCart(cart);
      setLocal(cart);
    } else {
      let cart = [...addToSideCart, item];
      setAddToSideCart(cart);
      setLocal(cart);
    }
  };
  let removeCart = (removeCart) => {
    let remove = addToSideCart.filter((elm) => elm.id !== removeCart.id);
    setAddToSideCart(remove);
    setLocal(remove);
  };
  let decrement = (item) => {
    let exist = addToSideCart.find((elm) => elm.id === item.id);
    if (exist.qty > 1) {
      let cart = addToSideCart.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty - 1 } : elm
      );
      setAddToSideCart(cart);
      setLocal(cart);
    }
  };
  // ====================================================================
  return (
    <ContainerContext.Provider
      value={{
        clickBtnStore,
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
