import React from "react";
import styled, { css } from "styled-components";

const Card2Style = styled.div`
  --size: 300px;
  position: relative;
  /* width: var(--size);*/
  height: var(--size);
  .card-image {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      flex-shrink: 0;
      border-radius: inherit;
    }
  }

  .card-content {
    position: absolute;
    width: calc(100% - 36px);
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .card-top-wrapp {
        display: flex;
        gap: 12px;
        font-size: 16px;
        margin-bottom: 30px;
        justify-content: space-between;
        align-items: center;

        .member-avata {
          width: 30px;
          height: 30px;
          border-radius: 100rem;
        }
        .member-name {
          font-weight: 300;
          color: ${(props) => props.theme.blue};
        }
        .heart-quantity {
          font-weight: 400;
        }
      }
    }

    .card-botton {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      .card-title {
        font-weight: 500;
      }
      .card-amount {
        font-weight: 700;
        text-align: end;
        ${(props) =>
          !props.secondary &&
          css`
            background: linear-gradient(
              86.88deg,
              #7d6aff 1.38%,
              #ffb86c 64.35%,
              #fc2872 119.91%
            );
          `};

        ${(props) =>
          props.secondary &&
          css`
            background: linear-gradient(
              86.88deg,
              #2cccff 1.38%,
              #f62682 64.35%,
              #6a5af9 119.91%
            );
          `};
        color: transparent;
        -webkit-background-clip: text;
      }
    }
  }
`;

const Card2 = ({ secondary, primary, image, author }) => {
  const cardAmount = `text-right font-bold text-transparent bg-clip-text ${
    primary ? "bg-primary-gradient" : "bg-gradient-s"
  }`;
  return (
    <Card2Style secondary={secondary}>
      <div className="card-image">
        <img src={image} alt="" className="card-img" />
      </div>

      <div className="card-content">
        <div className="card-top">
          <div className="card-top-wrapp">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?compress=1&resize=1200x900&vertical=top"
              alt=""
              className="member-avata"
            />
            <span className="member-name">{author}</span>
          </div>
          <div className="card-top-wrapp">
            <img src="/icon-heart.svg" alt="" className="heart-icon" />
            <span className="heart-quantity text-blue-600/100">256</span>
          </div>
        </div>
        <div className="card-botton">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className={secondary ? cardAmount : "card-amount"}>
            12,000 PSL
          </span>
        </div>
      </div>
    </Card2Style>
  );
};

export default Card2;
