"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const chartData = [
  { date: "2024-04-01", productA: 222, productB: 150 },
  { date: "2024-04-02", productA: 97, productB: 180 },
  { date: "2024-04-03", productA: 167, productB: 120 },
  { date: "2024-04-04", productA: 242, productB: 260 },
  { date: "2024-04-05", productA: 373, productB: 290 },
  { date: "2024-04-06", productA: 301, productB: 340 },
  { date: "2024-04-07", productA: 245, productB: 180 },
  { date: "2024-04-08", productA: 409, productB: 320 },
  { date: "2024-04-09", productA: 59, productB: 110 },
  { date: "2024-04-10", productA: 261, productB: 190 },
  { date: "2024-04-11", productA: 327, productB: 350 },
  { date: "2024-04-12", productA: 292, productB: 210 },
  { date: "2024-04-13", productA: 342, productB: 380 },
  { date: "2024-04-14", productA: 137, productB: 220 },
  { date: "2024-04-15", productA: 120, productB: 170 },
  { date: "2024-04-16", productA: 138, productB: 190 },
  { date: "2024-04-17", productA: 446, productB: 360 },
  { date: "2024-04-18", productA: 364, productB: 410 },
  { date: "2024-04-19", productA: 243, productB: 180 },
  { date: "2024-04-20", productA: 89, productB: 150 },
  { date: "2024-04-21", productA: 137, productB: 200 },
  { date: "2024-04-22", productA: 224, productB: 170 },
  { date: "2024-04-23", productA: 138, productB: 230 },
  { date: "2024-04-24", productA: 387, productB: 290 },
  { date: "2024-04-25", productA: 215, productB: 250 },
  { date: "2024-04-26", productA: 75, productB: 130 },
  { date: "2024-04-27", productA: 383, productB: 420 },
  { date: "2024-04-28", productA: 122, productB: 180 },
  { date: "2024-04-29", productA: 315, productB: 240 },
  { date: "2024-04-30", productA: 454, productB: 380 },
  { date: "2024-05-01", productA: 165, productB: 220 },
  { date: "2024-05-02", productA: 293, productB: 310 },
  { date: "2024-05-03", productA: 247, productB: 190 },
  { date: "2024-05-04", productA: 385, productB: 420 },
  { date: "2024-05-05", productA: 481, productB: 390 },
  { date: "2024-05-06", productA: 498, productB: 520 },
  { date: "2024-05-07", productA: 388, productB: 300 },
  { date: "2024-05-08", productA: 149, productB: 210 },
  { date: "2024-05-09", productA: 227, productB: 180 },
  { date: "2024-05-10", productA: 293, productB: 330 },
  { date: "2024-05-11", productA: 335, productB: 270 },
  { date: "2024-05-12", productA: 197, productB: 240 },
  { date: "2024-05-13", productA: 197, productB: 160 },
  { date: "2024-05-14", productA: 448, productB: 490 },
  { date: "2024-05-15", productA: 473, productB: 380 },
  { date: "2024-05-16", productA: 338, productB: 400 },
  { date: "2024-05-17", productA: 499, productB: 420 },
  { date: "2024-05-18", productA: 315, productB: 350 },
  { date: "2024-05-19", productA: 235, productB: 180 },
  { date: "2024-05-20", productA: 177, productB: 230 },
  { date: "2024-05-21", productA: 82, productB: 140 },
  { date: "2024-05-22", productA: 81, productB: 120 },
  { date: "2024-05-23", productA: 252, productB: 290 },
  { date: "2024-05-24", productA: 294, productB: 220 },
  { date: "2024-05-25", productA: 201, productB: 250 },
  { date: "2024-05-26", productA: 213, productB: 170 },
  { date: "2024-05-27", productA: 420, productB: 460 },
  { date: "2024-05-28", productA: 233, productB: 190 },
  { date: "2024-05-29", productA: 78, productB: 130 },
  { date: "2024-05-30", productA: 340, productB: 280 },
  { date: "2024-05-31", productA: 178, productB: 230 },
  { date: "2024-06-01", productA: 178, productB: 200 },
  { date: "2024-06-02", productA: 470, productB: 410 },
  { date: "2024-06-03", productA: 103, productB: 160 },
  { date: "2024-06-04", productA: 439, productB: 380 },
  { date: "2024-06-05", productA: 88, productB: 140 },
  { date: "2024-06-06", productA: 294, productB: 250 },
  { date: "2024-06-07", productA: 323, productB: 370 },
  { date: "2024-06-08", productA: 385, productB: 320 },
  { date: "2024-06-09", productA: 438, productB: 480 },
  { date: "2024-06-10", productA: 155, productB: 200 },
  { date: "2024-06-11", productA: 92, productB: 150 },
  { date: "2024-06-12", productA: 492, productB: 420 },
  { date: "2024-06-13", productA: 81, productB: 130 },
  { date: "2024-06-14", productA: 426, productB: 380 },
  { date: "2024-06-15", productA: 307, productB: 350 },
  { date: "2024-06-16", productA: 371, productB: 310 },
  { date: "2024-06-17", productA: 475, productB: 520 },
  { date: "2024-06-18", productA: 107, productB: 170 },
  { date: "2024-06-19", productA: 341, productB: 290 },
  { date: "2024-06-20", productA: 408, productB: 450 },
  { date: "2024-06-21", productA: 169, productB: 210 },
  { date: "2024-06-22", productA: 317, productB: 270 },
  { date: "2024-06-23", productA: 480, productB: 530 },
  { date: "2024-06-24", productA: 132, productB: 180 },
  { date: "2024-06-25", productA: 141, productB: 190 },
  { date: "2024-06-26", productA: 434, productB: 380 },
  { date: "2024-06-27", productA: 448, productB: 490 },
  { date: "2024-06-28", productA: 149, productB: 200 },
  { date: "2024-06-29", productA: 103, productB: 160 },
  { date: "2024-06-30", productA: 446, productB: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  productA: {
    label: "productA",
    color: "hsl(var(--chart-1))",
  },
  productB: {
    label: "productB",
    color: "hsl(var(--chart-2))",
  },
};

export function Areachart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total products for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-productA)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-productA)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-productB)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-productB)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="productB"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-productB)"
              stackId="a"
            />
            <Area
              dataKey="productA"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-productA)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
