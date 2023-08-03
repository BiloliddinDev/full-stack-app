import { useQuery } from "@tanstack/react-query";
import { instance } from "../Utils";
import { gettypeprops } from "@/Interface";

export const useGetData = ({ keys, url, options }: gettypeprops) => {
  return useQuery(keys, () => instance.get(url).then((res) => res.data), {
    ...options,
  });
};

// export const useGetDataa = ({ keys, url, options }: gettypeprops) => {
//   return useQuery(keys, () => instance.get(url).then((res) => res?.data), {
//     ...options,
//   });
// };
