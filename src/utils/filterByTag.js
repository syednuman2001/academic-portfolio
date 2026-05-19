export function filterByTag(items, tag) {
  if (!tag || tag === 'All') return items
  return items.filter(item =>
    item.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}
