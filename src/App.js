import { useState } from "react";

function App() {
  const DISC_NUM = 3;
  const [towers, setTowers] = useState([[1, 2, 3], [], []]);
  const [selectedTowerIdx, setSelectedTowerIdx] = useState();
  const [numberOfMoves, setNumberOfmoves] = useState(0);

  const handleSelectTower = (towerIdx) => {
    if (selectedTowerIdx !== undefined) {
      const tempTowers = [...towers];
      if (tempTowers[selectedTowerIdx][0] < (tempTowers[towerIdx][0] ?? 9)) {
        const poppedDisc = tempTowers[selectedTowerIdx].shift();
        tempTowers[towerIdx].unshift(poppedDisc);
        setTowers(tempTowers);
        setNumberOfmoves((prev) => prev + 1);
      }
      setSelectedTowerIdx(undefined);
    } else {
      setSelectedTowerIdx(towerIdx);
    }
  };

  return (
    <div className="app">
      {towers[2].length >= DISC_NUM && <div className="win">You win</div>}
      <p className="moves">Number of moves: {numberOfMoves}</p>
      {towers.map((tower, i) => (
        <div
          className="tower-space"
          key={i}
          onClick={() => handleSelectTower(i)}
        >
          <div
            className="tower"
            style={{ backgroundColor: selectedTowerIdx === i && "red" }}
          >
            <div className="discs">
              {tower.map((disc, i) => (
                <div
                  className="disc"
                  key={i}
                  style={{ width: `${disc * 20 + 10}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
