import { useMutation } from "@tanstack/react-query";
import { instance } from "../Utils";

export const usePostData = (url: string) => {
  return useMutation((data) => instance.post(url, data));
};
