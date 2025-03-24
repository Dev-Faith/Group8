// export const runtime = "nodejs"; // Ensures Node.js compatibility

// export async function GET() {
//   try {
//     const ModbusRTU = (await import("modbus-serial")).default;
//     const client = new ModbusRTU();

//     const host = process.env.MODBUS_HOST || "10.211.55.4";
//     const port = Number(process.env.MODBUS_PORT) || 502;

//     if (!host || !port) throw new Error("Missing MODBUS connection details.");

//     await client.connectTCP(host, { port });
//     await client.setID(1);

//     const data = await client.readHoldingRegisters(0, 10);
//     await client.close();

//     return Response.json({ success: true, data: data.data });
//   } catch (error) {
//     console.error("API Error:", error);
//     return Response.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }
