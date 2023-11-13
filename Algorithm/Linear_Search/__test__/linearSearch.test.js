import linearSearch from '../linearSearch'
import { describe, it, expect, vi } from 'vitest'

describe('Linear Search', () => {
  it('should return undefined if input is empty array', () => {
    expect(linearSearch([], 23)).toBe(undefined)
  })
  it('should return correct position if input is array of numbers', () => {
    expect(linearSearch([2, 5, 1, 74, 123, 65, 23, 75, 123, 66, 3], 23)).toBe(
      '23 在 index = 6 的位置。'
    )
  })
  it('should return correct position for duplicate elements', () => {
    expect(
      linearSearch([2, 5, 1, 74, 123, 65, 23, 23, 75, 123, 66, 3], 23)
    ).toBe('23 在 index = 6 的位置。')
  })
  it('should return not found if input is array of numbers', () => {
    expect(linearSearch([2, 5, 1, 74, 123, 65, 23, 75, 123, 66, 3], 77)).toBe(
      '在陣列中找不到 77。'
    )
  })
})
