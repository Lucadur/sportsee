import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./RadarComponent.css"

export default function RadarComponent({ data: { data } }) {
  const formatActivity = (capaciter) => {
    const performanceMapping = {
      1: "Cardio",
      2: "Énergie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
  
    return performanceMapping[capaciter] || "";
  };
  
  return (
    <section className="radar-container">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadarChart
        //La coordonnée du centre
          cx="50%"
          cy="50%"
        //Le rayon intérieur minim du cercle
          innerRadius="5%"
        //Le rayon extérieur maxminim du cercle
          outerRadius="60%"
          data={data}
          
        >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tickFormatter={(capaciter) => formatActivity(capaciter)}
            tick={{ fontSize: 13, fontWeight: 500 }}
            stroke="white"
            dy={5}
            
          />
          
          <Tooltip
          labelFormatter={(capaciter) => formatActivity(capaciter)}
          />

          <Radar
            name="Performance"
            dataKey="value"
            fill="#e60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

RadarComponent.propTypes = {
  data: PropTypes.object.isRequired,
};