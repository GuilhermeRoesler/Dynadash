import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTicketsByDepartment } from "@/data/mockData";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--warning))",
  "hsl(var(--success))",
  "hsl(var(--primary-light))",
];

export const CategoryChart = () => {
  const data = getTicketsByDepartment();
  const mostCommon = data.reduce((max, item) =>
    item.value > max.value ? item : max
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chamados por Departamento</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          {mostCommon.name} é o departamento com mais chamados: {mostCommon.value}{" "}
          ({((mostCommon.value / data.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(0)}%)
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm text-foreground">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
