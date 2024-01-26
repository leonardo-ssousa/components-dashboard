import styled from "styled-components";

export const VerticalGraphBarWrapper = styled.div`

  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  padding: 32px;
  border-radius: 6px;

  & > header{
    padding-bottom: 24px;
  }

  & > main{
    display: flex;
    flex-direction: column;
  }


`

export const ItemWrapper = styled.div`

display: flex;
align-items: center;
height: 32px;
gap: 8px;

& > p{
  text-align: right;
  width: 100px;
}

& > .progress-wrapper {
  width: 100px;  
  height: 100%;
  background-color: #6239EB22;
  border-radius: 2px;
  overflow: hidden;
  
  & > .progress-bar{
    height: 100%;
    width: 20%;
    background-color: #6239EB;
    transition: all 200ms ease-in-out;
  }
}

`