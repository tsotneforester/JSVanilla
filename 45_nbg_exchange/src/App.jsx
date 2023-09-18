import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { root, defaultInput } from "./theme";
import { AppContext } from "./Context";
import Eu from "./assets/eu.png";
import axios from "axios";
import { ThemeToggler, Header, Select, InputAmount, Swap, Available, Calendar, VersusRates, Container, ConvertedAmount } from "./components";
import { georgia, excludeCurr, countryData, url } from "./data";
import { motion } from "framer-motion";

function App() {
  const { date, setDate } = useContext(AppContext);
  const [data, setData] = useState([]);

  //curencies
  const [amount, setAmount] = useState("100");
  const [amountStr, setAmountStr] = useState(100);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("GEL");
  //result
  const [converted, setConverted] = useState(0);
  const [singleRates, setSingleRates] = useState([]);

  async function jsonData(date) {
    try {
      const res = await axios(`${url}?date=${date}`);

      let filtered = res.data[0].currencies.filter((e) => {
        for (let key in excludeCurr) {
          if (excludeCurr[key] === e.code) return false;
        }
        return true;
      });

      let filteredOut = res.data[0].currencies.filter((e) => {
        for (let key in excludeCurr) {
          if (excludeCurr[key] === e.code) return true;
        }
        return false;
      });

      let tempData = [...filteredOut, ...filtered];

      for (let i = 0; i < data.length; i++) {
        ["rateFormated", "diffFormated", "diff", "date", "validFromDate"].forEach((e) => delete data[i][e]);
      }

      for (let i = 0; i < tempData.length; i++) {
        for (let ii = 0; ii < countryData.length; ii++) {
          if (tempData[i].code == countryData[ii].currencyCode) {
            tempData[i].nameENG = countryData[ii].currencyName;
            tempData[i].countryCode3 = countryData[ii].countryCode3;
            tempData[i].countryCode2 = countryData[ii].countryCode2;
            tempData[i].countryName = countryData[ii].country;
            tempData[i].flag = `https://flagsapi.com/${countryData[ii].countryCode2}/flat/64.png`;
          }
        }
      }

      tempData.splice(0, 0, georgia);

      for (let i = 0; i < tempData.length; i++) {
        if (tempData[i].code == "EUR") {
          tempData[i].nameENG = "EU Euro";
          tempData[i].flag = Eu;
        }
      }

      setData(tempData);

      let fromRate =
        tempData.filter((e) => {
          return e.code == fromCur;
        })[0].rate /
        tempData.filter((e) => {
          return e.code == fromCur;
        })[0].quantity;

      let toRate =
        tempData.filter((e) => {
          return e.code == toCur;
        })[0].rate /
        tempData.filter((e) => {
          return e.code == toCur;
        })[0].quantity;

      //setConverted(((amount * fromRate) / toRate).toFixed(4));
      setConverted((amountStr * fromRate) / toRate);

      setSingleRates([(fromRate / toRate).toFixed(4), (toRate / fromRate).toFixed(4)]);
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  function handleSwap() {
    setFromCur(toCur);
    setToCur(fromCur);
  }

  useEffect(() => {
    jsonData(date);
  }, [amount, fromCur, toCur, date]);

  return (
    <>
      <ThemeToggler />
      <Header />
      <Container>
        <Available />
        <Calendar date={date} setDate={setDate} />
        <Select data={data} setFromCur={setFromCur} curr={fromCur}>
          <InputAmount amount={amount} setAmount={setAmount} setAmountStr={setAmountStr} disabled={false} />
        </Select>
        <Swap handler={handleSwap} />
        <Select data={data} setFromCur={setToCur} curr={toCur}>
          <ConvertedAmount value={converted} />
        </Select>

        <VersusRates curr1={fromCur} rate={singleRates[0]} curr2={toCur} />
        <VersusRates curr1={toCur} rate={singleRates[1]} curr2={fromCur} />
      </Container>
    </>
  );
}

export default App;
