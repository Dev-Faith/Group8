let modbusClient = null;

const initializeModbusClient = (client) => {
  if (!client) {
    console.error("Modbus client cannot be initialized with a null value.");
    return;
  }
  modbusClient = client;
  console.log("Modbus client initialized successfully.");
};

const subscribeToModbusData = async (address, length) => {
  if (!modbusClient) {
    throw new Error("Modbus client is not initialized.");
  }

  try {
    const { data } = await modbusClient.readHoldingRegisters(address, length);
    return data;
  } catch (error) {
    console.error("Error reading Modbus data:", error);
    throw error;
  }
};

const controlActuator = async (address, value) => {
  if (!modbusClient) {
    throw new Error("Modbus client is not initialized.");
  }

  try {
    await modbusClient.writeSingleRegister(address, value);
    console.log(`Actuator at address ${address} set to ${value}`);
  } catch (error) {
    console.error("Error writing to Modbus actuator:", error);
    throw error;
  }
};

export { initializeModbusClient, subscribeToModbusData, controlActuator };
