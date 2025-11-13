import { mockTickets } from "@/data/mockTickets";
import { delay } from "./utils";

export const getTickets = async (spaceId: string) => {
  await delay(1000);
  return mockTickets.filter((ticket) => ticket.spaceId === spaceId);
};
