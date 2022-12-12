import styled from "styled-components";

export const StyledFavorites = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  div {
    display: flex;
  }
  h2 {
    display: block;
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
    width: 100%;
    /* padding: 16px 32px; */
    gap: 16px;
  }
  section {
        
    
    /* width: 100%; */
    /* overflow: hidden; */
    /* padding: 16px; */
    div {
        display: inline-flex;
      /* width: calc(100vw - 16px * 4);
      display: grid; */
      /* grid-gap: 16px; */
      /* grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); */
      /* grid-auto-flow: column; */
      /* grid-auto-columns: minmax(200px,1fr); */
      /* overflow-x: scroll;
      scroll-snap-type: x mandatory; */
      a {
        height: auto;
        width: 100%;
        margin: 3px;
        padding: 15px;
        /* scroll-snap-align: start; */
        text-align: center;
        span {
            
            font-size: 14px;
            line-height: 16.1px;
          /* padding-top: 8px; */
          /* display: block; */
          /* padding-right: 24px; */
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`