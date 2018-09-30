// 判断变量是否为函数
const isFunction = v => typeof v === 'function';

// onFulfilled 和 onRejected 都是可选参数。

// 如果 onFulfilled 或 onRejected 不是函数，其必须被忽略

// onFulfilled 特性

//     如果 onFulfilled 是函数：

// 当 promise 状态变为成功时必须被调用，其第一个参数为 promise 成功状态传入的值（ resolve 执行时传入的值）

// 在 promise 状态改变前其不可被调用

// 其调用次数不可超过一次

// onRejected 特性

//     如果 onRejected 是函数：

// 当 promise 状态变为失败时必须被调用，其第一个参数为 promise 失败状态传入的值（ reject 执行时传入的值）

// 在 promise 状态改变前其不可被调用

// 其调用次数不可超过一次

// 多次调用

//     then 方法可以被同一个 promise 对象调用多次

// 当 promise 成功状态时，所有 onFulfilled 需按照其注册顺序依次回调

// 当 promise 失败状态时，所有 onRejected 需按照其注册顺序依次回调
class myPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a paramerter');
    }
    // 添加状态
    this._status = PENDING;
    this._value = undefined;
    //  添加成功回调函数的队列
    this._fullfilledQueues = [];
    // 添加失败回调函数的队列     
    this._rejectedQueues = [];
    //  执行handle
    try {
      handle(this._)
    } catch (err) {
      this._reject(err);
    }
  }
  // 添加resolve 时执行的函数
  _resolve(val) {
    if (this._status !== PENDING) return;
    this._status = FULFILLED;
    this._value = val;
  }
  // 添加reject时 执行的函数
  _reject(err) {
    if (this._status !== PENDING) return;
    this._status = REJECTED;
    this._value = err;
  }
}