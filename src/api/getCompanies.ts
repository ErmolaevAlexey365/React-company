import { apiUrl, token } from 'config'
import type { ICompaniesPaginate } from 'types'

export default async function getCompanies(): Promise<ICompaniesPaginate> {
	const response = await fetch(
		`${apiUrl}/companies`, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Access-Control-Request-Method': 'GET, OPTIONS',
				'Access-Control-Request-Headers': '*, Authorization'
			},
			mode: 'cors',
			credentials: 'include',
			method: "GET"
		}
	)
	return response.json() as Promise<ICompaniesPaginate>
}
