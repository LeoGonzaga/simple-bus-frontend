import { AxiosRequestConfig } from "axios";
import { request } from "../api";
import { SHEET_ID } from "@src/constants/sheet-id";

const payload: AxiosRequestConfig = {
  method: "GET",
  url: `/d/${SHEET_ID}/gviz/tq?tqx=out:json`,
};

export const getAll = async () => {
  const data = await request(payload);
  return data;
};
