"use client";
import { useQuery } from "@tanstack/react-query";
import Page from "./dashboard/page";
import { Login3 } from "./auth/login/page";
import { account, ID } from "./appwrite";
import { Divide } from "lucide-react";
import { useEffect, useState } from "react";
import useStore from "@/store";

const fetchModbusData = async () => {
  //   const response = await fetch("http://localhost:8000/modbus-data"); // Adjust API URL
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch data");
  //   }
  //   return response.json();
};

export default function ModbusDashboard() {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["modbusData"],
  //   queryFn: fetchModbusData,
  //   refetchInterval: 1000, // Auto-refresh every second
  // });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // const [loggedInUser, setLoggedInUser] = useState(null);

  const user = useStore((state) => state.user);
  const login = useStore((state) => state.login);
  const register = useStore((state) => state.register);
  const logout = useStore((state) => state.logout);

  return (
    <div className="flex justify-center w-[100vw] h-[100vh]">
      {user ? <Page /> : <Login3 />}
    </div>
  );
}
