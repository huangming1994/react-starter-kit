let ENV = {}

if (process.env.APP_ENV === 'local') {
  ENV.API = ''
}
if (process.env.APP_ENV === 'dev') {
  ENV.API = ''
}
if (process.env.APP_ENV === 'prod') {
  ENV.API = ''
}

export default ENV
