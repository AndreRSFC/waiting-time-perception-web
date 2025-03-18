export const fetchDataAfterDelay = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Success')
    }, 5000)
  })
}
