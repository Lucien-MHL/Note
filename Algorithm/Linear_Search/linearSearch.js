export default function linearSearch(arr, theValueWantToFind) {
  if (!arr.length) return // 如果是空陣列就不執行
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === theValueWantToFind) {
      return `${theValueWantToFind} 在 index = ${i} 的位置。`
    }
  }
  return `在陣列中找不到 ${theValueWantToFind}。`
}
