import { useMutation } from "@tanstack/react-query";
import { instance } from "@/Utils";

export const useDelete = (url: string) => {
  return useMutation(() => instance.delete(url));
};
