import { useMutation } from "@tanstack/react-query";
import { instance } from "../Utils";

export const useUpdate = (url: string) => {
  return useMutation((data) => instance.patch(url, data));
};
