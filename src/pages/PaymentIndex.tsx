import getPayments from 'api/getPayments';
import Head from 'components/Head';
import LoadingOrError from 'components/LoadingOrError';
import type { ReactElement } from 'react';
import DataGrid from 'react-data-grid';
import { useQuery } from 'react-query';
import { IPayment } from 'types';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Name' }
];

function rowKeyGetter(row: IPayment) {
  return row.id;
}


export default function PaymentIndexPage(): ReactElement {
	const { isLoading, isError, error, data } = useQuery('payments', getPayments)
	if (isLoading || isError || !data?.data.length) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Payment' />
			<DataGrid columns={columns} rows={data?.data} rowKeyGetter={rowKeyGetter} />
		</>
	)
}
