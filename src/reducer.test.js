import { surnameRanges, selectedMemberRange, selectedMember, buyMore, transactions } from './reducer'
import { TYPES } from './actions'
import expect from 'expect'
import faker from 'faker'

describe('Surname selection reducer', () => {
  it('should return an empty initial state', () => {
    expect(surnameRanges(undefined, {})).toEqual({
      members_per_range: 6 * 5,
      ranges: []
    })
  })

  it('ranges members based on their surname', () => {
    const members = [
        { surname: 'A'},
        { surname: 'B'},
        { surname: 'C'},
        { surname: 'D'},
        { surname: 'E'},
        { surname: 'F'},
    ]

    expect(surnameRanges({ members_per_range: 6 * 5}, {
      type: TYPES.FETCH_MEMBERS_SUCCESS, members
    })).toEqual({ members_per_range: 6 * 5, ranges: [
      { members, surname_start: 'A', surname_end: 'F' }
    ]})
  })

  it('uses multiple ranges when not all members fit in a range', () => {
    const members = [
        { surname: 'A'},
        { surname: 'B'},
        { surname: 'C'},
        { surname: 'D'},
        { surname: 'E'},
        { surname: 'F'},
    ]

    expect(surnameRanges({ members_per_range: 3}, {
      type: TYPES.FETCH_MEMBERS_SUCCESS, members
    })).toEqual({ members_per_range: 3, ranges: [
      { members: [{ surname: 'A'}, { surname: 'B'}, { surname: 'C'}],
        surname_start: 'A', surname_end: 'C' },
      { members: [{ surname: 'D'}, { surname: 'E'}, { surname: 'F'}],
        surname_start: 'D', surname_end: 'F' },
    ]})
  })
})

describe('selecting a member', () => {
  describe('selecting a range of members', () => {
    it('should not have selected any range by default', () => {
      expect(selectedMemberRange(undefined, {})).toEqual({
        members: []
      })
    })

    it('selects a range of members', () => {
      expect(selectedMemberRange(undefined, {
        type: TYPES.SELECT_SURNAME_RANGE, range: { members: ['Mark']}
      })).toEqual({
        members: ['Mark']
      })
    })
  })

  describe('selecting a member', () => {
    it('has no selected member by default', () => {
      expect(selectedMember(undefined, {})).toEqual({ age: 0 })
    })

    it('selects a member', () => {
      expect(selectedMember(undefined, {
        type: TYPES.SELECT_MEMBER, member: { name: 'mark' }
      })).toEqual({ name: 'mark' })
    })

    it('can cancel selecting a member', () => {
      expect(selectedMember({ name: 'mark' }, { type: TYPES.GO_BACK })).toEqual({ age: 0 })
    })
  })
})

describe('cancelling choices', () => {
})

describe('buying products', () => {
  it('is possible to buy more products', () => {
    expect(buyMore(undefined, {})).toBe(false)
    expect(buyMore(undefined, { type: TYPES.BUY_MORE })).toBe(true)
    expect(buyMore(true, { type: TYPES.BUY_MORE })).toBe(false)
  })

})

describe('keeping track of the latest transactions' , () => {
  it('has no transactions by default', () => {
    expect(transactions(undefined, {})).toEqual([]);
  })

  it('saves a transaction', () => {
    expect(transactions(undefined, {
      type: TYPES.BUY_ORDER_SUCCESS,
      member: { id: 1 },
      order: { id: 2 },
    })).toEqual([
      { member: { id: 1 }, order: { id: 2 } }
    ]);
  })

  it('saves additional transactions', () => {
    expect(
      transactions(
        [{ member: { id: 1 }, order: { id: 2 } }],
        { type: TYPES.BUY_ORDER_SUCCESS, member: { id: 3 }, order: { id: 4 },}
      )
    ).toEqual([
      { member: { id: 3 }, order: { id: 4 } },
      { member: { id: 1 }, order: { id: 2 } },
    ]);
  })

  it('only keeps track of the latest 10 transactions', () => {
    expect(
      transactions(
        [
          { member: { id: 9 }, order: { id: 2 } },
          { member: { id: 8 }, order: { id: 2 } },
          { member: { id: 7 }, order: { id: 2 } },
          { member: { id: 6 }, order: { id: 2 } },
          { member: { id: 5 }, order: { id: 2 } },
          { member: { id: 4 }, order: { id: 2 } },
          { member: { id: 3 }, order: { id: 2 } },
          { member: { id: 2 }, order: { id: 2 } },
          { member: { id: 1 }, order: { id: 2 } },
          { member: { id: 0 }, order: { id: 2 } },
        ],
        { type: TYPES.BUY_ORDER_SUCCESS, member: { id: 33 }, order: { id: 33 },}
      )
    ).toEqual([
          { member: { id: 33 }, order: { id: 33 } },
          { member: { id: 9 }, order: { id: 2 } },
          { member: { id: 8 }, order: { id: 2 } },
          { member: { id: 7 }, order: { id: 2 } },
          { member: { id: 6 }, order: { id: 2 } },
          { member: { id: 5 }, order: { id: 2 } },
          { member: { id: 4 }, order: { id: 2 } },
          { member: { id: 3 }, order: { id: 2 } },
          { member: { id: 2 }, order: { id: 2 } },
          { member: { id: 1 }, order: { id: 2 } },
    ]);
  })
})