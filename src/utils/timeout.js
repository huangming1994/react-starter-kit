export const delay = ms => promise => (
  new Promise((resolve, reject) => {
    promise.then(result => {
      setTimeout(() => resolve(result), ms)
    }).catch(error => {
      setTimeout(() => reject(error), ms)
    })
  })
)

export const timeout = ms => promise => (
  Promise.race([
    delay(ms)(Promise.reject(new Error('请求超时，请稍后重试'))),
    promise
  ])
)
