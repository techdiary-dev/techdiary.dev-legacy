import { useQuery } from '@apollo/react-hooks'
import { ME } from 'quries/AUTH'
const useMe = () => {
	let { data, error, refetch, loading } = useQuery(ME, {
		fetchPolicy: 'network-only'
	})
	return { data: data?.me, error, refetch, loading }
}

export default useMe
