import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const DictionaryList = () => {
  const history = useHistory();

  return (
    <>
      <Title>MY DICTIONARY</Title>
      <CardWrap>
        <WordCard>
          <MiniTitle>단어</MiniTitle>
          <p>ㅎ1ㅎ1</p>
          {/* <GrayLine /> */}
          <MiniTitle>설명</MiniTitle>
          <div>히히를 변형한 단어. 숫자1을"|"로 쓴다.</div>
          {/* <GrayLine /> */}
          <MiniTitle>예시</MiniTitle>
          <p>저 친구가 초콜릿을 줬어.</p>
        </WordCard>
        <WordCard>
          <MiniTitle>단어</MiniTitle>
          <p>ㅎ1ㅎ1</p>
          {/* <GrayLine /> */}
          <MiniTitle>설명</MiniTitle>
          <div>히히를 변형한 단어. 숫자1을"|"로 쓴다.</div>
          {/* <GrayLine /> */}
          <MiniTitle>예시</MiniTitle>
          <p>저 친구가 초콜릿을 줬어.</p>
        </WordCard>
      </CardWrap>
      <WordBtn
        onClick={() => {
          history.push("/detail");
        }}
      >
        +
      </WordBtn>
    </>
  );
};

const CardWrap = styled.div`
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Title = styled.h1`
  margin: 15px 0px 40px 0px;
  color: #fff;
`;

const WordCard = styled.div`
  min-height: 30vh;
  width: 270px;
  background: #fff;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 30px;
  box-shadow: 0px 0px 10px lightgray;
  margin: 5px auto 30px auto;
  color: #222;
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
  margin: 20px 0px -10px 0px;
  color: #cecece;
  font-size: 40px;
`;

export default DictionaryList;
