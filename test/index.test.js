import { sum } from './index'

describe('Test Jest Work!', () => {
  it('Working...', () => {
    expect(2 + 2).toBe(4)
  })
})

describe('Test Sum Function', () => {
  it('Number', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
