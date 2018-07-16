interface Student extends String {
  key(): number;
}

/**
 * 键索引计数法
 *
 * @param {Student[]} a collection
 * @param {number} R range
 */
function sort(a: Student[], R: number) {
  const N = a.length;
  const aux = Array<Student>(N);
  const count = Array<number>(R + 1);

  for (let i = 0; i < N; i += 1) {
    count[a[i].key() + 1]++;
  }

  for (let r = 0; r < R; r += 1) {
    count[r + 1] += count[r];
  }

  for (let i = 0; i < N; i += 1) {
    const key = a[i].key();
    aux[count[key]] = a[i];
    count[key] += 1; // 移动到下一个位置
  }

  for (let i = 0; i < N; i += 1) {
    a[i] = aux[i];
  }
}

(function run() {
  console.log(1 + 1);
})();
