import { useQuery } from "@apollo/react-hooks";
import { ME } from "quries/AUTH";
const useMe = () => {
  let { data, error, refetch, loading, fetchMore } = useQuery(ME, {
    fetchPolicy: "network-only",
  });
  return { data: data?.me, error, refetch, loading, fetchMore };
};

export default useMe;
