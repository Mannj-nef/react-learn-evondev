import React from "react";
import styled, { css } from "styled-components";

const StyleCard = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: inherit;
`;

const CardContent = styled.div`
  background-color: #fff;
  border-radius: 20px;
  width: calc(100% - 36px);

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  padding: 20px;
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopAuthorWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  color: #333;
`;

const AvataAuthor = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
`;

const AuthorName = styled.span`
  font-weight: 300;
`;

const CardQuantity = styled.span`
  font-weight: 400;
`;

const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const CardAmount = styled.span`
  font-weight: 700;
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #ffb86c 64.35%, #fc2872 119.91%);
    `}

  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
      color: transparent;
    `}
      
    -webkit-background-clip: text;
`;

const Card = ({ secondary }) => {
  return (
    <StyleCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/17642525/media/8dbf73ddb6c36e1e95575d57d84ac6e4.png?compress=1&resize=800x600&vertical=top"
          alt=""
        />
      </CardImage>

      <CardContent>
        <ContentTop>
          <TopAuthorWrapp>
            <AvataAuthor
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?compress=1&resize=1200x900&vertical=top"
              alt=""
            />
            <AuthorName>@zndrson</AuthorName>
          </TopAuthorWrapp>
          <TopAuthorWrapp>
            <img src="./icon-heart.svg" alt="" />
            <CardQuantity>256</CardQuantity>
          </TopAuthorWrapp>
        </ContentTop>
        <ContentBottom>
          <Title>Cosmic Perspective</Title>
          <CardAmount secondary={secondary}>12,000 PSL</CardAmount>
        </ContentBottom>
      </CardContent>
    </StyleCard>
  );
};

export default Card;
