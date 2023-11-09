# Linear Search - 線性搜尋 (遍歷搜尋)

這個演算法很簡單。

做法就是用 for 迴圈在數列中一個一個找，找到想要的值。  
實際用程式碼執行大致上是這樣:

```js
//假設我們要從這個串數列(陣列)中找想要的值。
const arr = [123, 94, 431, 12, 2, 54, 23, 68]
```

```js
//那我們可以定義一個函式，用來處理我們的邏輯，並設定一個用來尋找值的參數。
function linearSearch(theValueWantToFind) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === theValueWantToFind) {
      //若找到就 print
      console.log(`${theValueWantToFind} 在 index 的第 ${i}`)

      return //結束迴圈
    }
  }
}
```

```js
linearSearch(2) // 接著執行函式，並傳入要找的值。
```
