Function.prototype.myCall = function(content, ...aergs) {
    let ctx = content || window
    let func = Symbol()
    ctx[func] = this

    args = args ? args : []

    const res = args.lenght > 0 ? ctx[func](...args) : ctx[func]()
    delete ctx[func]
    return res
}