function hasQueryParams(route) {
  return !!Object.keys(route.query).length
}

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (!hasQueryParams(to) && hasQueryParams(from)) {
      next({ name: to.name, query: from.query })
    } else {
      next()
    }
  })
}
