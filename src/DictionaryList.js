import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadDictionaryFB } from "./redux/modules/dictionary";
import { useDispatch } from "react-redux";

// import { createDictionary, addDictionary } from "./redux/modules/dictionary";

const DictionaryList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const dictionary_list = useSelector((state) => state.dictionary.list);
  console.log(dictionary_list);
  //리덕스에서 가져온 데이터

  React.useEffect(async () => {
    dispatch(loadDictionaryFB());
  }, []);

  return (
    <>
      <Title>MY DICTIONARY</Title>
      <CardWrap>
        {dictionary_list.map((list, id) => {
          return (
            <WordCard key={id}>
              <MiniTitle>단어</MiniTitle>
              {list.word}
              {/* <GrayLine /> */}
              <MiniTitle>설명</MiniTitle>
              {list.explanation}
              {/* <GrayLine /> */}
              <MiniTitle>예시</MiniTitle>
              <div style={{ color: "#0a9aa2" }}>{list.example}</div>
            </WordCard>
          );
        })}
      </CardWrap>
      <WordBtn
        onClick={() => {
          // addDictionary();
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
