import React from "react";
import { useState } from "react";
import { root, device } from "./theme";
import { data } from "./data";
import { FaAngleDoubleRight } from "react-icons/fa";
import styled from "styled-components";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const { title, company, dates, duties } = data[activeTab];

  return (
    <S.Container>
      <nav>
        {data.map((item, i) => {
          return (
            <span
              className={`link ${i === activeTab && "active"}`}
              key={item.id}
              onClick={() => {
                setActiveTab(i);
              }}>
              {item.company}
            </span>
          );
        })}
      </nav>
      <main>
        <h1>{title}</h1>
        <span className="company">{company}</span>
        <p className="date">{dates}</p>

        {duties.map((node, i) => {
          return (
            <div className="duty" key={i}>
              <Icon />
              <p>{node}</p>
            </div>
          );
        })}
      </main>
    </S.Container>
  );
}

export default App;

const S = {};

const Icon = styled(FaAngleDoubleRight)`
  color: ${root.violet};
  font-size: 22px;
  flex-shrink: 0;
`;

S.Container = styled.div`
  width: 80vw;
  margin: 5rem auto 0 auto;
  max-width: 1120px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
  }

  & nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 30px;
    cursor: pointer;
    text-transform: uppercase;

    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 160px;
      flex-shrink: 0;
    }

    & .link {
      color: black;
      border-bottom: 2px solid transparent;
      text-align: left;

      font-size: 20px;
      @media ${device.tablet} {
        border-left: 2px solid transparent;
        width: 100%;
        border-bottom: none;
        padding-left: 14px;
      }

      &.active {
        border-bottom: 2px solid ${root.violet};
        color: ${root.violet};
        @media ${device.tablet} {
          border-left: 2px solid ${root.violet};
          width: 100%;
          border-bottom: none;
        }
      }
      &:hover {
        color: ${root.violet};
        border-bottom: 2px solid ${root.violet};
      }
      @media ${device.tablet} {
        &:hover {
          border-left: 2px solid ${root.violet};
          border-bottom: none;
        }
      }
    }
  }

  & main {
    & h1 {
      font-size: 26px;
    }

    & .company {
      text-transform: uppercase;
      color: black;
      background: #cbd5e1;
      display: inline-block;
      padding: 0.375rem 0.75rem;
      border-radius: 4px;
      margin: 0.75rem 0;
    }

    & .date {
      color: #233958;
      letter-spacing: 1px;
      margin-bottom: 2rem;
    }

    & .duty {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: auto;
      height: auto;
      border-radius: 0;
      background-color: transparent;
      column-gap: 20px;
      margin: 20px 0;
    }
  }
`;
