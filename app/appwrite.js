import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67de942c000b4c565229"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
