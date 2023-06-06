import "./App.css";
import { GlobalStyle } from "./root/GlobalStyle";
import React, { useState, useEffect } from "react";
import rawData from "./data";
import { Header, Wrapper, Cart, CartIcon, Footer, TotalAmount, Main, Items, Article, Poster, Details, DetailsName, DetailsPrice, DetailsRemove, Amount } from "./Styled";

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

    if (inputValue === 0) {
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
      <Header>
        <Wrapper>
          <h1>useState</h1>
          <Cart>
            <CartIcon />
            <span>{cart}</span>
          </Cart>
        </Wrapper>
      </Header>
      <Main>
        <h1>Your Bag</h1>
        <Items>
          {data.map((item) => {
            return (
              <>
                <Article key={item.id}>
                  <Poster>
                    <img src={item.img} alt="cart" />
                  </Poster>
                  <Details>
                    <DetailsName>{item.title}</DetailsName>
                    <DetailsPrice>{USDollar.format(item.price)}</DetailsPrice>
                    <DetailsRemove onClick={() => remover(item.id)}>remove</DetailsRemove>
                  </Details>
                  <Amount>
                    <input type="number" value={item.amount} min="0" onChange={(e) => handler(e, item.id)} />
                  </Amount>
                </Article>
              </>
            );
          })}
        </Items>
      </Main>
      {clear ? (
        "bag is empty"
      ) : (
        <Footer>
          <TotalAmount>{USDollar.format(total)}</TotalAmount>
          <button onClick={makeClear}>Clear Cart</button>
        </Footer>
      )}
    </>
  );
}

export default App;
