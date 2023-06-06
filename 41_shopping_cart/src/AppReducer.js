import "./App.css";
import { GlobalStyle } from "./root/GlobalStyle";
import React, { useEffect } from "react";
import rawData from "./data";
import { useReducer } from "react";
import reducer from "./Reducer";
import { Header, Wrapper, Cart, CartIcon, Footer, TotalAmount, Main, Items, Article, Poster, Details, DetailsName, DetailsPrice, DetailsRemove, Amount } from "./Styled";

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 1,
});

const initialState = {
  data: rawData,
  cart: "",
  total: "",
  clear: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "calculate",
    });
  }, [state.data]);

  return (
    <>
      <GlobalStyle />
      <Header>
        <Wrapper>
          <h1>useReducer</h1>
          <Cart>
            <CartIcon />
            <span>{state.cart}</span>
          </Cart>
        </Wrapper>
      </Header>
      <Main>
        <h1>Your Bag</h1>
        <Items>
          {state.data.map((item) => {
            return (
              <>
                <Article key={item.id}>
                  <Poster>
                    <img src={item.img} alt="cart" />
                  </Poster>
                  <Details>
                    <DetailsName>{item.title}</DetailsName>
                    <DetailsPrice>{USDollar.format(item.price)}</DetailsPrice>
                    <DetailsRemove
                      onClick={() =>
                        dispatch({
                          type: "remove",
                          id: item.id,
                        })
                      }>
                      remove
                    </DetailsRemove>
                  </Details>
                  <Amount>
                    <input
                      type="number"
                      value={item.amount}
                      min="0"
                      onChange={(e) =>
                        dispatch({
                          type: "change",
                          value: e.target.value,
                          id: item.id,
                        })
                      }
                    />
                  </Amount>
                </Article>
              </>
            );
          })}
        </Items>
      </Main>

      {state.clear ? (
        "bag is empty"
      ) : (
        <Footer>
          <TotalAmount>{USDollar.format(state.total)}</TotalAmount>
          <button
            onClick={() =>
              dispatch({
                type: "clear",
              })
            }>
            Clear Cart
          </button>
        </Footer>
      )}
    </>
  );
}

export default App;
