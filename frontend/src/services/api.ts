import axios from "axios";
import { type AuctionItem, type Bid } from "../types/auction";

const API_BASE_URL = "http://localhost:3000/api";

// Create axios instance
const restApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAllItems = async (): Promise<AuctionItem[]> => {
  const response = await restApi.get<AuctionItem[]>("/items");
  return response.data;
};

export const fetchItemById = async (id: number): Promise<AuctionItem> => {
  const response = await restApi.get<AuctionItem>(`/items/${id}`);
  return response.data;
};

export const placeBid = async (
  itemId: number,
  bidAmount: number,
  bidder: string
): Promise<Bid> => {
  const response = await restApi.post<Bid>("/bids", {
    itemId,
    bidAmount,
    bidder,
  });
  return response.data;
};
