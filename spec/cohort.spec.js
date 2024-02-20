const { a, b } = require('../src/CohortManager.js')

describe('Cohort basic testing', () => {
  it('Cohort should exist', () => {
    const res = a('TestCohort')
    expect(res).toBeDefined()
    expect(res.name).toEqual('TestCohort')
  })

  it('Cohort should have a name', () => {
    expect(a.name).toBeDefined()
  })

  it('Find cohorts', () => {
    const res = b('TestCohort')
    expect(res).toBeDefined()
  })

  it('Attempt to find undefined cohort', () => {
    expect(() => b('UndefinedCohort')).toThrowError()
  })
})
