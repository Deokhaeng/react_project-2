import React from "react";
import styled from "styled-components";
import DictionaryList from "./DictionaryList";
import AddWord from "./AddWord";
import EditWord from "./EditWord";
import { Route } from "react-router-dom";

function App() {
  return (
    <AppWrap>
      <Route></Route>
      <Container>
        <Route path="/addWord" exact>
          <AddWord />
        </Route>
        <Route path="/editWord/:index" exact>
          <EditWord />
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
