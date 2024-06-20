import styled from "styled-components";
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  display: flex;
  color: white;
  padding: 10px 18px;
  background: #000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  justify-content: center;
  font-size: 16px;
  border: 1px solid transition;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export default function StartGame() {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" alt="diceimage" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button> Play Now</Button>
      </div>
    </Container>
  );
}
