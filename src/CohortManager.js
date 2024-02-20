const cohorts = []

function generateCohort(cohortName) {
  const cohort = {
    name: cohortName,
    students: []
  }

  cohorts.push(cohort)
  return cohort
}

function searchForCohort(cohortName) {
  const cohort = cohorts.find((cohort) => cohort.name === cohortName)
  if (!cohort) {
    throw new Error('No cohort of the provided name could be found!')
  }
  return cohort
}

function addStudentToCohort(student, cohortName) {
  const cohort = searchForCohort(cohortName)
  cohort.students.push(student)
  return cohort
}

function generateStudentObject(id, firstName, lastName, githubUsername, email) {
  const student = {}
  student.studentID = id
  student.firstName = firstName
  student.lastName = lastName
  student.githubName = githubUsername
  student.email = email
  return student
}

function removeCohortFromCohorts(cohortName) {
  let cohort = searchForCohort(cohortName)
  const indexOfCohort = cohorts.indexOf(cohort)
  cohort = cohorts.splice(indexOfCohort, 1)
  return cohort
}

module.exports = {
  a: generateCohort,
  b: searchForCohort,
  c: addStudentToCohort,
  d: generateStudentObject,
  e: removeCohortFromCohorts
}
