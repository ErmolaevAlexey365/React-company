import { Key } from "react";

export interface IFruit {
	name: string
	image: {
		author: {
			name: string
			url: string
		}
		color: string
		url: string
	}
	metadata: {
		name: string
		value: string
	}[]
}
export interface ICompany {
	id: Key
	team_id: BigInteger
	name: string
	locale: string
	city: string
	legal: object
	aggregator: IAggregator
}

export interface IAggregator {
	id: Key
	name: string
	file: string
	locale: string
	currency: string
	price_table: string
	legal: object
}
export interface ICompaniesPaginate {
	data: ICompany[]
}
export interface IPayment {
	id: Key
	name: string
}

export interface IPaymentsPaginate {
	data: IPayment[]
}