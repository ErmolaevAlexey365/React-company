import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const PaymentIndex = lazy(async () => import('pages/PaymentIndex'))
const CompanyIndex = lazy(async () => import('pages/CompanyIndex'))
const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Switch>
					<Route exact path='/' component={PaymentIndex} />
					<Route exact path='/companies' component={CompanyIndex} />
					<Route exact path='/gallery' component={Gallery} />
					<Route path='/:fruitName' component={Details} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}
