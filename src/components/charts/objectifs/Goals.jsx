import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Goals.css";


// function Infos bulle
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="custom-tooltip_goals">
          <p> {`${payload[0].value} `}min</p>
        </div>
      );
    }

    return null;
  };

export default function Goals({ data: { sessions } }) { 
  return (
    <section className="goals-container">
      <div className="goals-title">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%" padding={0}>
        <LineChart
          data={sessions}
          margin={{ top: 0, right: 0, left: 0, bottom: -10 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            padding={{ left: 20, right: 15 }}
            tick={false}
          />
          <YAxis
            hide={true}
            domain={["dataMin-50", "dataMax+50"]}
            padding={{ top: 10, bottom: -20 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.08,
              strokeWidth: 30,
            }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            dot={false}
            activeDot={{
              stroke: "white",
              strokeOpacity: 0.2,
              fill: "white",
              strokeWidth: 15,
              r: 5,
            }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="formatXAxis">
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
    </section>
  );
}

Goals.propTypes = {
  data: PropTypes.object.isRequired,
};