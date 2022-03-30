import React from "react";
import { BsX, BsPencilSquare } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { TiPlus } from "react-icons/ti";
import {
  deleteDictionaryFB,
  loadDictionaryFB,
} from "./redux/modules/dictionary";

const DictionaryList = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const dictionary_list = useSelector((state) => state.dictionary.list);
  //리덕스에서 가져온 데이터
  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);

  console.log(dictionary_list);
  return (
    <>
      <Title>MY DICTIONARY</Title>
      <CardWrap>
        {dictionary_list.map((list, index) => {
          return (
            <WordCard key={list.id}>
              <ButtonWrap>
                <DeleteBtn
                  onClick={() => {
                    dispatch(deleteDictionaryFB(dictionary_list[index].id));
                  }}
                >
                  <IconDelete />
                </DeleteBtn>
                <EditBtn
                  onClick={() => {
                    history.push("/editWord/" + list.id);
                  }}
                >
                  <IconEdit />
                </EditBtn>
              </ButtonWrap>
              <MiniTitle>단어</MiniTitle>
              {list.word}
              <MiniTitle>설명</MiniTitle>
              {list.explanation}
              <MiniTitle>예시</MiniTitle>
              <div style={{ color: "#457ad6" }}>{list.example}</div>
            </WordCard>
          );
        })}
      </CardWrap>
      <AddBtn
        onClick={() => {
          history.push("/addWord");
        }}
      >
        <IconAdd />
      </AddBtn>
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

const IconDelete = styled(BsX)`
  margin: -15px -15px -1px;
  font-size: 15px;
  color: transparent;
`;

const IconEdit = styled(BsPencilSquare)`
  margin: 0px -15px 3px;
  font-size: 11px;
  color: transparent;
`;

const ButtonWrap = styled.div`
  &:hover {
    ${IconDelete} {
      color: #a33d3d;
    }
    ${IconEdit} {
      color: #6e560c;
    }
  }
`;

const DeleteBtn = styled.button`
  // display: flex;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  border: 1px solid transparent;
  margin: -15px 0px -5px;
  background: #fa8383;
`;

const EditBtn = styled.button`
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  border: 1px solid transparent;
  margin: -15px 20px -5px;
  background: #ffe06d;
`;

const MiniTitle = styled.p`
  background: #eee;
  padding: 5px;
  margin: 20px;
  border-radius: 15px;
`;

const IconAdd = styled(TiPlus)`
  font-size: 30px;
`;

const AddBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid transparent;
  margin: 20px 0px -10px 0px;
  color: #cecece;

  ${IconAdd} {
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    ${IconAdd} {
      transform: rotate(90deg);
    }
  }
`;

export default DictionaryList;
