import getCompanies from 'api/getCompanies'
import DataGrid from 'react-data-grid'

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Name' }
];

function rowKeyGetter(row: ICompany) {
  return row.id;
}

import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { useQuery } from 'react-query'
import { ICompany, ICompaniesPaginate } from 'types';

export default function CompanyIndexPage(): ReactElement {
	const { isLoading, isError, error, data } = useQuery('companies', getCompanies)
	if (isLoading || isError || !data?.data.length) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Company' />
			<DataGrid columns={columns} rows={data?.data} rowKeyGetter={rowKeyGetter} />
		</>
	)
}
