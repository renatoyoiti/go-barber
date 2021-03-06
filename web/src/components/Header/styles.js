import styled from 'styled-components';

export const Container = styled.div`
  background: #fcf7f8;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #5b5393;
    }

    a {
      font-weight: bold;
      color: #5b5393;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin: 0 20px;
  padding-left: 20px;
  border-left: 1px solid #5b5393;
  border-right: 1px solid #5b5393;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

export const ExitFromApp = styled.button`
  background: none;
  border: 0;
  position: relative;
`;
