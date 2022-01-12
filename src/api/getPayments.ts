import { apiUrl, token } from 'config'
import type { IPaymentsPaginate } from 'types'

export default async function getPayments(): Promise<IPaymentsPaginate> {
	const response = await fetch(
		`${apiUrl}/payments`, {
			headers: {
				authorization: `Bearer ${token}`
			}
		}
	)
	return response.json() as Promise<IPaymentsPaginate>
}
