import React from "react";
import "./Score.css";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Score({ todayScore, score }) {
  const scoreValue = todayScore !== undefined ? todayScore : score;

  const scorePerCent = scoreValue * 100;
  const rest = 100 - scorePerCent;

  const scoreData = [
    { name: "objectif", value: scorePerCent, fillColor: `red` },
    { name: "objectif Restant", value: rest, fillColor: "white" },
  ];

  const scoreLabel = scoreData[0].value + "%";

  const data0 = [{ name: "Score", value: 100 }];

  return (
    <section className="score-container">
      <div className="score-title">Score</div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data0}
            dataKey="Base"
            innerRadius={0}
            outerRadius={80}
            fill="white"
            stroke="none"
          />
          <Pie
            dataKey="value"
            data={scoreData}
            innerRadius={"60%"}
            outerRadius={"70%"}
            startAngle={180}
            endAngle={-360}
          >
            {scoreData.map((base, index) => (
              <Cell
                key={`progresse-${index}`}
                fill={base.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="score-legend">
        <p className="score-label">{scoreLabel}</p>
        <p className="score-text">
          de votre <br />
          objectif
        </p>
      </div>
    </section>
  );
}
