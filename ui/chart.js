"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Monday", productA: 186, productB: 80 },
  { day: "Tuesday", productA: 305, productB: 200 },
  { day: "Wednesday", productA: 237, productB: 120 },
  { day: "Thursday", productA: 73, productB: 190 },
  { day: "Friday", productA: 209, productB: 130 },
  { day: "Saturday", productA: 214, productB: 140 },
];

const chartConfig = {
  productA: {
    label: "productA",
    color: "#2563eb",
  },
  productB: {
    label: "productB",
    color: "#60a5fa",
  },
};

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <h1 className="text-center text-[20px] mb-[16px]">Daily Product Count Chart</h1>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="productA" fill="var(--color-productA)" radius={4} />
        <Bar dataKey="productB" fill="var(--color-productB)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
