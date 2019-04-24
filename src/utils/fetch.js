import { message } from 'antd'
import { timeout } from './timeout'
import { REQUEST_TIMEOUT } from './constants'
import ENV from './env'

const defaultOptions = {
  baseURL: ENV.API,
  requestTimeout: REQUEST_TIMEOUT,
  shouldHandleError: true
}

const getHeaders = () => ({
  'Content-Type': 'application/json;charset=utf8'
})

const formatQueryString = (url, params) => {
  const formatString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
  return ~url.indexOf('?') ? `${url}&${formatString}` : `${url}?${formatString}`
}

const getBodyString = params => JSON.stringify(params)

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) return response
  throw new Error(`${response.status}: ${response.statusText}`)
}

const parseJSON = response => response.json()

const handleResponse = result => {
  if (result && result.code === 200) return result

  if (result && result.code === 401) {
    return window.alert('登录信息已过期，请重新登录')
  }

  throw new Error(result.msg)
}

export function get(url, params = {}, options = {}) {
  const config = { method: 'GET' }
  options = { ...defaultOptions, ...options }
  const requestUrl = formatQueryString(`${options.baseURL}${url}`, params)

  return timeout(options.requestTimeout)(fetch(requestUrl, config)
    .then(checkStatus)
    .then(parseJSON)
    .then(handleResponse))
    .catch(err => {
      if (options.shouldHandleError) message.error(err.message)
      throw new Error(err.message)
    })
}

export function post(url, params = {}, options = {}) {
  const config = {
    method: 'POST',
    headers: getHeaders(),
    body: getBodyString(params)
  }
  options = { ...defaultOptions, ...options }

  return timeout(options.requestTimeout)(fetch(`${options.baseURL}${url}`, config)
    .then(checkStatus)
    .then(parseJSON)
    .then(handleResponse))
    .catch(err => {
      if (options.shouldHandleError) message.error(err.message)
      throw new Error(err.message)
    })
}
