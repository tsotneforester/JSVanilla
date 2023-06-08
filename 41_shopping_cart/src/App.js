import "./App.css";
import { GlobalStyle } from "./root/GlobalStyle";
import React, { useState, useEffect } from "react";
import { rawData } from "./data";
import * as S from "./Styled";

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 1,
});

function countify(arr) {
  let count = 0;
  let price = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i].amount;
    price += arr[i].price * arr[i].amount;
  }
  return [count, price];
}

function App() {
  const [data, setData] = useState(rawData);
  const [cart, setCart] = useState();
  const [total, setTotal] = useState();
  const [clear, setClear] = useState(false);

  useEffect(() => {
    setCart(countify(data)[0]);
    setTotal(countify(data)[1]);
  }, [data]);

  function remover(id) {
    let filteredData = data.filter((item) => {
      return item.id !== id;
    });
    if (filteredData.length === 0) {
      setData([]);
      makeClear();
    } else {
      setData(filteredData);
    }
  }

  function handler(e, id) {
    let inputValue = e.target.value;

    if (Number(inputValue) === 0) {
      remover(id);
    } else {
      let newData = [...data];
      let index = newData.findIndex((e) => e.id === id);
      newData[index].amount = inputValue * 1;
      setCart(countify(newData)[0]);
      setTotal(countify(newData)[1]);
      setData(newData);
    }
  }

  function makeClear() {
    setClear(!clear);
    setData([]);
  }

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.Wrapper>
          <h1>useState</h1>
          <S.Cart>
            <S.CartIcon />
            <span>{cart}</span>
          </S.Cart>
        </S.Wrapper>
      </S.Header>
      <S.Main>
        <h1>Your Bag</h1>
        <S.Items>
          {data.map((item) => {
            return (
              <>
                <S.Article key={item.id}>
                  <S.Poster>
                    <img src={item.img} alt="cart" />
                  </S.Poster>
                  <S.Details>
                    <S.DetailsName>{item.title}</S.DetailsName>
                    <S.DetailsPrice>{USDollar.format(item.price)}</S.DetailsPrice>
                    <S.DetailsRemove onClick={() => remover(item.id)}>remove</S.DetailsRemove>
                  </S.Details>
                  <S.Amount>
                    <input type="number" value={item.amount} min="0" onChange={(e) => handler(e, item.id)} />
                  </S.Amount>
                </S.Article>
              </>
            );
          })}
        </S.Items>
      </S.Main>
      {clear ? (
        "bag is empty"
      ) : (
        <S.Footer>
          <S.TotalAmount>{USDollar.format(total)}</S.TotalAmount>
          <button onClick={makeClear}>Clear Cart</button>
        </S.Footer>
      )}
    </>
  );
}

export default App;
