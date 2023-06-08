import "./App.css";
import { GlobalStyle } from "./root/GlobalStyle";
import React, { useEffect } from "react";
import { rawData } from "./data";
import { useReducer } from "react";
import reducer from "./Reducer";
import * as S from "./Styled";

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
      <S.Header>
        <S.Wrapper>
          <h1>useReducer</h1>
          <S.Cart>
            <S.CartIcon />
            <span>{state.cart}</span>
          </S.Cart>
        </S.Wrapper>
      </S.Header>
      <S.Main>
        <h1>Your Bag</h1>
        <S.Items>
          {state.data.map((item) => {
            return (
              <>
                <S.Article key={item.id}>
                  <S.Poster>
                    <img src={item.img} alt="cart" />
                  </S.Poster>
                  <S.Details>
                    <S.DetailsName>{item.title}</S.DetailsName>
                    <S.DetailsPrice>{USDollar.format(item.price)}</S.DetailsPrice>
                    <S.DetailsRemove
                      onClick={() =>
                        dispatch({
                          type: "remove",
                          id: item.id,
                        })
                      }>
                      remove
                    </S.DetailsRemove>
                  </S.Details>
                  <S.Amount>
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
                  </S.Amount>
                </S.Article>
              </>
            );
          })}
        </S.Items>
      </S.Main>

      {state.clear ? (
        "bag is empty"
      ) : (
        <S.Footer>
          <S.TotalAmount>{USDollar.format(state.total)}</S.TotalAmount>
          <button
            onClick={() =>
              dispatch({
                type: "clear",
              })
            }>
            Clear Cart
          </button>
        </S.Footer>
      )}
    </>
  );
}

export default App;
