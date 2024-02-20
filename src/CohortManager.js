const cohorts = []

function generateCohort(cohortName) {
  const cohort = {
    name: cohortName
  }

  cohorts.push(cohort)
  return cohort
}

function searchForCohort(cohortName) {
  const cohort = cohorts.filter((cohort) => cohort.name === cohortName)
  if (cohort.length === 0) {
    throw new Error('No cohort of the provided name could be found!')
  }
  return cohort
}

module.exports = {
  a: generateCohort,
  b: searchForCohort
}
