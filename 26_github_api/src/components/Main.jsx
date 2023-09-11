import logo from "../assets/img/nouser.png";
import styled from "styled-components";
import cardsvg from "../assets/img/bg-pattern-card.svg";

function Main({ avatar_url, login, name, location, followers, following, public_repos, loading, error }) {
  return loading ? (
    "Loading..."
  ) : (
    <Card>
      <section className="image">
        <div className="frame">
          <img src={avatar_url || logo} alt={login} />
        </div>
      </section>
      <section className="person">
        <h1>{name || login || error}</h1>
      </section>
      <h3>{location || "Unknown"}</h3>
      <section className="statistics">
        <div>
          <h4>{followers || "--"}</h4>
          <h5>Followers</h5>
        </div>
        <div>
          <h4>{public_repos || "--"}</h4>
          <h5>Repos</h5>
        </div>
        <div>
          <h4>{following || "--"}</h4>
          <h5>Following</h5>
        </div>
      </section>
    </Card>
  );
}

export default Main;

const Card = styled.div`
  width: 326px;
  border-radius: 15px;
  background-color: white;
  background-image: url(${cardsvg});
  background-repeat: no-repeat;
  background-size: 100% 118px;

  & .image {
    width: 100%;
    height: 188px;
    border-radius: 20px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    & .frame {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      & img {
        width: 128px;
        height: 128px;
        border-radius: 50%;
        background-color: transparent;
      }
    }
  }

  & .person {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    -moz-column-gap: 8.5px;
    column-gap: 8.5px;
    margin-top: 5px;
    & h1 {
      font-size: 25px;
      color: #2e3349;
      font-weight: 700;
      text-align: center;
    }
    & h2 {
      font-size: 18px;
      color: #6b7082;
      font-weight: 400;
      text-align: center;
    }
  }

  & h3 {
    font-size: 14px;
    color: #6b7082;
    font-weight: 400;
    text-align: center;
    margin-top: 8px;
  }

  & .statistics {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-top: #e8e9ec solid 1px;
    margin-top: 28px;
    padding-top: 24px;
    padding-bottom: 24px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 9px;
      & h4 {
        font-size: 24px;
        color: #2e3349;
        font-weight: 700;
        text-align: center;
        line-height: 22px;
      }
      & h5 {
        font-size: 14px;
        color: #2e3349;
        font-weight: 400;
        text-align: center;
        line-height: 12px;
        letter-spacing: 1.5px;
      }
    }
  }
`;
