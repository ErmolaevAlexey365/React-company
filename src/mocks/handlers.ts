import { rest } from 'msw'
import {apiUrl, token } from 'config'
import fruits from './data/fruits.json'
import companies from './data/companies.json'

const handlers = [
	rest.get(
		'https://614c99f03c438c00179faa84.mockapi.io/fruits',
		(_, response, context) => response(context.json(fruits))
	),
	rest.get(
		`${apiUrl}/companies`,
		(_, response, context) => response(context.json(companies))
	)
]

export default handlers
