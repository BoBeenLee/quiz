import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export interface QuizSummaryChartProps {
  className?: string;
  correctCount: number;
  incorrectCount: number;
}

const COLORS = ['#0088FE', '#c40000'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function QuizSummaryChart(props: QuizSummaryChartProps) {
  const { className, correctCount, incorrectCount } = props;
  const data = [
    { name: 'correct', value: correctCount },
    { name: 'incorrect', value: incorrectCount },
  ];
  return (
    <ResponsiveContainer className={className} width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default QuizSummaryChart;
