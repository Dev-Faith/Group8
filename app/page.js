"use client";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Chart } from "@/ui/chart";
import { Piechart } from "@/ui/piechart";
import { Areachart } from "@/ui/areaChart";
import { Radialchart } from "@/ui/radialChart";
import { Radarchart } from "@/ui/radarChart";
import { Linechart } from "@/ui/lineChart";

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
    <div className="p-[32px] flex flex-col gap-[8rem]">
      <h1 className="font-bold text-2xl text-center">
        INTELLIGENT CONVEYOR BELT SYSTEM DASHBOARD
      </h1>
      <div className=" flex-col lg:flex-row flex w-full items-center justify-between gap-[4rem]">
        <div className="">
          <Chart />
        </div>
        <Areachart />
        <Piechart />
      </div>
      <div className="flex-col lg:flex-row flex w-full items-center justify-between gap-[4rem]">
        <Radialchart />
        <Radarchart />
        <Linechart />
      </div>
    </div>
  );
}
