import { useQuery } from '@apollo/react-hooks'
import { ME } from 'quries/AUTH'
interface Props {
	data: any
}
const Me = (props: Props) => {
	let { data, error, refetch, loading } = useQuery(ME, {
		fetchPolicy: 'network-only'
	})

	return props.data({ data: data?.me, error, refetch, loading })
}

export default Me
