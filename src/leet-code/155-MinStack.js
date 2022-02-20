/* 
  https://leetcode-cn.com/problems/min-stack/

  设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
  -  push(x) —— 将元素 x 推入栈中。
  -  pop() —— 删除栈顶的元素。
  -  top() —— 获取栈顶元素。
  -  getMin() —— 检索栈中的最小元素。

*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  /**
   * @type {number[]}
   */
  this._stack = [];

  this._min = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const { _stack } = this;

  if (_stack.length < 1) {
    _stack.push(0);
    this._min = val;
    return;
  }

  const min = this.getMin();

  _stack.push(val - min);
  if (val < min) {
    this._min = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const { _stack } = this;
  if (_stack.length < 1) {
    return;
  }

  const top = this._stack.pop();
  if (top < 0) {
    this._min -= top;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const { _stack, _min } = this;

  const len = _stack.length;

  const top = _stack[len - 1];

  if (top > 0) {
    return top + _min;
  }
  return _min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this._min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

(function test() {
  const s = new MinStack();
  s.push(1);
  s.push(2);

  s.getMin(); //?
  s.top(); //?

  s.pop();

  s.top(); //?
  s.getMin(); //?
})();
