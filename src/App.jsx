import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  function toggleGamePlay() {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}
