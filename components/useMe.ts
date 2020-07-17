import { useQuery } from "@apollo/client";
import { ME } from "quries/AUTH";
const useMe = () => {
  let { data, error, refetch, loading, fetchMore } = useQuery(ME);
  return { data: data?.me, error, refetch, loading, fetchMore };
};

export default useMe;
