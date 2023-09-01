import {
    BarChart,
    CartesianGrid,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import "./Weigth.css";
  
  export default function Weight({ data }) {
  // function Infos bulle
  const CustomTooltip = ({ active, payload}) => {
    if (active && payload) {
      return (
        <div className="custom-tooltip">
          <p> {`${payload[0].value} kg`}</p>
          <p> {`${payload[1].value} kCal`}</p>
        </div>
      );
    }
  
    return null;
  };
  
  
    const formatXAxis = (index) => {
      return index + 1;
    };
  
    return (
      <section className="weight-container">
        <div className="weight-legend">
          <div className="weight-title">Activité quotidienne</div>
          <div className="weight-circles">
            <div className="weight-circle">
              <div className="weight-circle_black"></div>
              <p>Poids (kg)</p>
            </div>
            <div className="weight-circle">
              <div className=" weight-circle_red"></div>
              <p>Calories brûlées (kCal)</p>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            
            margin={{
              top: 30,
              right: 50,
              left: 50,
              bottom: 10,
            }}
            //Espacement entre des bars de catégories diférentes 
            barCategoryGap="40%"
            //L'écart entre deux barres de la même catégorie
            barGap={1}
            data={data}
            >
            <CartesianGrid
            //point horizontale de la grid
              strokeDasharray="2 4"
              vertical={false}
            //couleur des traits
              stroke="#dedede"
            />
            <XAxis
              tickFormatter={formatXAxis}
              tick={{ fill: "#9b9eac" }}
              tickLine={false}
              stroke="#DEDEDE"
              padding={{ left: -47, right: -47 }}
              tickSize="25"
            />
  
            <YAxis yAxisId="left" orientation="left" hide={true} />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={["dataMin-1", "dataMax+1"]}
              axisLine={false}
              tickLine={false}
              tickSize="50"
              tickCount={4}
            />
            {/* fond du fiagram lors du survol */}
            <Tooltip
              position={{ y: 0 }}
              cursor={{
                fill: "#C4C4C4",
                fillOpacity: "0.4",
              }}
              // Infos bulle
              content={<CustomTooltip />}
            />
  
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill="black"
              radius={[50, 50, 0, 0]}
              maxBarSize={10}
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              fill="#E60000"
              radius={[50, 50, 0, 0]}
              maxBarSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </section>
    );
  }