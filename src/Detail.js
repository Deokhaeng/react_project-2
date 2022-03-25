import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Detail = () => {
  const history = useHistory();
  const text = React.useRef(null);
  return (
    <CardWrap>
      <WordCard>
        단어 추가하기
        <GrayLine />
        <MiniTitle>단어</MiniTitle>
        <input type="text" ref={text} />
        {/* <GrayLine /> */}
        <MiniTitle>설명</MiniTitle>
        <input type="text" ref={text} />
        {/* <GrayLine /> */}
        <MiniTitle>예시</MiniTitle>
        <input type="text" ref={text} />
      </WordCard>
      <WordBtn
        onClick={() => {
          history.goBack();
        }}
      >
        +
      </WordBtn>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5vh auto;
  flex-direction: column;
`;

const WordCard = styled.div`
  min-height: 40vh;
  width: 270px;
  background: #fff;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 30px;
  box-shadow: 0px 0px 10px lightgray;
  margin: 5px auto 30px auto;
  color: #222;
  & input {
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 75%;
    height 25px;
  }

  & input:focus {
    outline: none;
    border: 1px solid #999;
  }
`;

const GrayLine = styled.hr`
  margin-top: 20px;
  border: 1px solid #eee;
`;

const MiniTitle = styled.p`
  background: #eee;
  padding: 5px;
  margin: 20px;
  border-radius: 15px;
`;

const WordBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid transparent;
  margin: 0px 0px -40px 0px;
  color: #cecece;
  font-size: 40px;
`;

export default Detail;
