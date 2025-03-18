"use client";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Chart } from "@/ui/chart";
import { Piechart } from "@/ui/piechart";
import { Areachart } from "@/ui/areaChart";
import { Radialchart } from "@/ui/radialChart";
import { Radarchart } from "@/ui/radarChart";
import { Linechart } from "@/ui/lineChart";
import Page from "./dashboard/page";

const fetchModbusData = async () => {
  const response = await fetch("http://localhost:8000/modbus-data"); // Adjust API URL
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default function ModbusDashboard() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["modbusData"],
    queryFn: fetchModbusData,
    refetchInterval: 1000, // Auto-refresh every second
  });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <Page/>
  );
}
