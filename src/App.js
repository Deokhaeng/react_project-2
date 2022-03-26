import React from "react";
import styled from "styled-components";
import DictionaryList from "./DictionaryList";
import Detail from "./Detail";
import NotFound from "./NotFound";
// import Spinner from "./Spinner";
// import NotFound from "./NotFound";
// import Progress from "./Progress";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createDictionary } from "./redux/modules/dictionary";

function App() {
  const text = React.useRef(null);
  const dispatch = useDispatch();
  const addDictionaryList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // 여긴 이제 주석처리!
    // setList([...list, text.current.value]);

    dispatch(createDictionary(text.current.value));
  };

  return (
    <AppWrap>
      <Route></Route>
      <Container>
        <Route path="/detail" exact>
          <Detail />
        </Route>
        <Route path="/" exact>
          <DictionaryList />
        </Route>
      </Container>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background: #fff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  width: 370px;
  min-height: 60vh;
  background: #cecece;
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 30px;
  box-shadow: 0px 0px 15px #cecece;
  webkit-scrollbar
`;

export default App;
