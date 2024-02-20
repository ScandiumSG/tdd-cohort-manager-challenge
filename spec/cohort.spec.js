import { Cohort } from '../src/CohortManager.js'

describe('Cohort basic testing', () => {
  it('Cohort should exist', () => {
    expect(Cohort).toBeDefined()
  })

  it('Cohort should have a name', () => {
    expect(Cohort.name).toBeDefined()
  })
})
