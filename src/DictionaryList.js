import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteDictionaryFB,
  loadDictionaryFB,
} from "./redux/modules/dictionary";

const DictionaryList = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const dictionary_list = useSelector((state) => state.dictionary.list);
  //리덕스에서 가져온 데이터
  React.useEffect(async () => {
    dispatch(loadDictionaryFB());
  }, []);

  return (
    <>
      <Title>MY DICTIONARY</Title>
      <CardWrap>
        {dictionary_list.map((list, index) => {
          return (
            <WordCard key={index}>
              <DeleteBtn
                onClick={() => {
                  dispatch(deleteDictionaryFB(dictionary_list[index].id));
                }}
              ></DeleteBtn>
              <UpdateBtn
                onClick={() => {
                  history.push("/editWord/" + index);
                }}
              ></UpdateBtn>
              <MiniTitle>단어</MiniTitle>
              {list.word}
              <MiniTitle>설명</MiniTitle>
              {list.explanation}
              <MiniTitle>예시</MiniTitle>
              <div style={{ color: "#0a9aa2" }}>{list.example}</div>
            </WordCard>
          );
        })}
      </CardWrap>
      <WordBtn
        onClick={() => {
          history.push("/addWord");
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

const DeleteBtn = styled.button`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  border: 1px solid transparent;
  margin: -15px -7px -5px;
  background: #fa8383;
`;

const UpdateBtn = styled.button`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  border: 1px solid transparent;
  margin: -15px 15px -5px;
  background: #ffe06d;
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
