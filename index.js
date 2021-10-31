/**
 * @name timeplay {joenix}
 * ======== ======== ========
 */
class Time {
  // 构造器
  constructor(time) {
    // 数源
    this.origin = this.generate(time);

    // 时间
    this.time;

    // 间隔
    this.delay;

    // 倒计时
    this.down = [String, Number].includes(time && time.constructor)
      ? time * 1000
      : undefined;

    // 锁
    this.lock = false;

    // 倒计时
    // this.count = this.time;

    // 计时器
    this.out = undefined;
  }

  // 播放
  play(time) {
    // 数源赋值
    this.time = this.origin;

    // 暂停用到
    this.lock = false;
  }

  // 结束
  stop() {
    this.lock = true;
  }

  // 暂停
  pause() {
    this.lock = true;
  }

  // 重播
  replay() {
    this.time = this.origin;
  }

  // 清除
  clear() {
    this.origin = this.time = undefined;
  }

  // 生成
  generate(time) {
    return time ? new Date(time) : new Date();
  }

  // 设置
  set(time) {
    this.time = this.generate(time);
  }

  // 获取
  get() {
    if (this.time) {
      return this.generate() - this.time;
    }
    console.log(`Please use 'time.set' to set start time.`);
  }
}

// Export Instance
export default new Time();
