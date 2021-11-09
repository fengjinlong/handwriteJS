const limit = function (fn, timer) {
  let firstTime = new Date()
  return new Proxy(fn, {
    apply(target, content, args) {
      let lastTime = new Date()
      if (lastTime - firstTime > timer) {
        fn.bind(target)(args)
        firstTime = new Date()
      } else {
        console.log('节流')
      }
    }
  })
}
const fun = () => {
  console.log('执行')
}
const targetFun = limit(fun, 5000)

setInterval(targetFun, 1000)