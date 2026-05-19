export function sortByYear(publications, direction = 'desc') {
  return [...publications].sort((a, b) =>
    direction === 'desc' ? b.year - a.year : a.year - b.year
  )
}
