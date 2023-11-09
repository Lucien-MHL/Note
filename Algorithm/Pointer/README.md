# Pointer - 動態指向

這個名稱並非正式，因為概念是指向特定位置，所以普遍都稱呼 Pointer。

#### 目的

在一個排序好的陣列中要找出一對符合的兩個值。

#### 程式碼

這邊示範的是，從一個來旭好的陣列中，找到平均值為 1.5 的值。

預期接收到的值會是 `[[11,-14],[0,3],[1,2]]`。

```js
const sortedArr = [-11, 0, 1, 2, 3, 9, 14, 17, 21]

function averagePair(arr, avg) {
  let left = 0
  let right = arr.length - 1
  let result = []

  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2
    if (temp_avg > avg) {
      right--
    } else if (temp_avg < avg) {
      left++
    } else if (temp_avg == avg) {
      result.push([arr[right], arr[left]])
      right--
      left++
    }
  }

  console.log(result)
  return
}

averagePair(sortedArr, 1.5)
```
