import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartSuggestion } from "@/lib/gemini";
import {
  BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from "recharts";

interface DynamicChartProps {
  suggestion: ChartSuggestion;
  data: any[];
}

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--warning))", "hsl(var(--success))", "hsl(var(--primary-light))"];

export const DynamicChart = ({ suggestion, data }: DynamicChartProps) => {
  const renderChart = () => {
    switch (suggestion.chartType) {
      case "BarChart":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={suggestion.categoryKey} stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
            <Bar dataKey={suggestion.dataKey} fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case "PieChart":
        // Para PieChart, precisamos agregar os dados
        const aggregatedData = data.reduce((acc, item) => {
            const category = item[suggestion.categoryKey];
            const value = parseFloat(item[suggestion.dataKey]);
            if (!isNaN(value)) {
                acc[category] = (acc[category] || 0) + value;
            }
            return acc;
        }, {});
        const pieData = Object.keys(aggregatedData).map(key => ({ name: key, value: aggregatedData[key] }));

        return (
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="hsl(var(--primary))" label>
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
            <Legend />
          </PieChart>
        );
      case "LineChart":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={suggestion.categoryKey} stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
            <Line type="monotone" dataKey={suggestion.dataKey} stroke="hsl(var(--primary))" />
          </LineChart>
        );
      default:
        return <p>Tipo de gráfico não suportado: {suggestion.chartType}</p>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{suggestion.title}</CardTitle>
        <CardDescription>{suggestion.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          {renderChart()}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};