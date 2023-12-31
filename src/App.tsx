import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {myTheme} from "./styles/Theme.styled";

function App () {
    return (
        <div>
            <div>My favourite films</div>
        <div><span>Deev branch commit 1</span></div>
        <div>dev 2</div>
            <div>popup1</div>
        </div>
    <div>login commit</div>
    <div>login 2</div>
        <div className="App">
            <h1>My job</h1>
            <Menu>
                <ul>
                    <li><a href="#">menu item 1</a></li>
                    <li><a href="#">menu item 2</a></li>
                    <li><a href="#">menu item 3</a></li>
                </ul>
            </Menu>
            <p>Lorem ipsum dolor</p>
            <Box>
                <StyledBtn color={myTheme.colors.primary} btnType={"primary"} active>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.primary} btnType={"outlined"} >Hello</StyledBtn>
            {/*<StyledBtn fontSize="50px">Link</StyledBtn>
                <StyledBtn color="red">Hello</StyledBtn>*/}
                {/*<input type="text"/>
                <input type="submit"/>
                <input type="radio"/>*/}

            </Box>

        </div>
    );
}

export default App;



const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button{
    cursor: pointer;
  }
${Link} {
  cursor: zoom-in;
}
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`


