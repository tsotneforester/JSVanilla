import styled from "styled-components";
import Star from "./Star";

const CardStyled = styled.article`
  width: 450px;
  height: 242px;
  border-radius: 12px;
  background-color: transparent;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  & .img-side {
    width: 40%;
    height: 100%;
  }
  & .img-side img {
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
  }
  & .info-side {
    width: 60%;
    height: 100%;
    padding: 12px;
    background-color: black;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 20px;
  }
  & .info-side h1 {
    font-size: 24px;
    color: white;
    font-weight: 800;
    text-align: left;
    height: 78px;
    overflow: hidden;
  }
  & .info-side h6 {
    font-size: 14px;
    color: white;
    font-weight: 400;
    text-align: left;
    font-style: italic;
  }
  & .info-side .rating {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  & .info-side .filminfo {
    font-size: 16px;
    color: rgb(255, 205, 5);
    font-weight: 600;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;


function Card({ title, poster, rating, premiered, array, genre }) {
  return (
    <CardStyled>
      <div className="img-side">
        <img src={"https://image.tmdb.org/t/p/original" + poster} alt="The Super Mario Bros. Movie" />
      </div>
      <div className="info-side">
        <h1>{title}</h1>
        <h6>{genre}</h6>
        <div className="rating">
          <Star rating={array} />
        </div>
        <div className="filminfo">
          <span>{rating}</span>
          <span>{premiered}</span>
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;
