import 'App/Controllers/DocsController'

export function RoutesProvider(app) {

	app.routes.get('/', (req, res) => res.render('welcome.show')).as('welcome.show')

	app.routes.group({ prefix: 'docs', controller: DocsController }, routes => {
		routes.pattern('version', 'master|[0-9.]+')
		routes.get(':version?/:group?/:a?/:b?/:c?/:d?/:e?/:f?', 'show').as('docs.show')
	})

}
