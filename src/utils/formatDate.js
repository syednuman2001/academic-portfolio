export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export function formatYear(dateString) {
  return new Date(dateString).getFullYear()
}
