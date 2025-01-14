const { a, b, c, d, e } = require('../src/CohortManager.js')

describe('Cohort basic testing', () => {
  it('Cohort should exist', () => {
    const res = a('TestCohort')
    expect(res).toBeDefined()
    expect(res.name).toEqual('TestCohort')
  })

  it('Cohort should have a name', () => {
    const res = a('TestCohort')
    expect(res.name).toBeDefined()
  })

  it('Find cohorts', () => {
    a('TestCohort')
    const res = b('TestCohort')
    expect(res).toBeDefined()
  })

  it('Attempt to find undefined cohort', () => {
    expect(() => b('UndefinedCohort')).toThrowError()
  })
})

describe('Create and add student', () => {
  it('Generate student', () => {
    const student = d(
      'la8pv',
      'Tim',
      'Johnsen',
      'tim.johnsen',
      'tim.johnsen@mail.com'
    )
    expect(student.studentID).toEqual('la8pv')
    expect(student.firstName).toEqual('Tim')
    expect(student.lastName).toEqual('Johnsen')
    expect(student.githubName).toEqual('tim.johnsen')
    expect(student.email).toEqual('tim.johnsen@mail.com')
  })

  it('Add student to cohort', () => {
    const cohort = a('CohortWithStudent')
    const preRes = cohort
    expect(preRes.students.length).toEqual(0)
    const student = d(
      'la8pv',
      'Tim',
      'Johnsen',
      'tim.johnsen',
      'tim.johnsen@mail.com'
    )
    c(student, 'CohortWithStudent')
    const postRes = b('CohortWithStudent')
    expect(postRes.students.length).toEqual(1)
  })

  it('Remove cohort', () => {
    const res = a('CohortToAddThenRemove')
    const cohort = b(res.name)
    expect(cohort.students.length).toEqual(0)
    const removeRes = e(res.name)[0]
    expect(removeRes.name).toEqual(res.name)

    expect(() => b(res.name)).toThrowError()
  })

  it('Dont remove not specified cohort', () => {
    const res = a('CohortToAddThenRemove')
    const res2 = a('DoNotRemove')
    const cohort = b(res.name)
    expect(cohort.students.length).toEqual(0)
    const removeRes = e(res.name)[0]
    expect(removeRes.name).toEqual(res.name)

    expect(() => b(res.name)).toThrowError()

    const cohort2 = b(res2.name)
    expect(cohort2).toBeDefined()
  })
})
