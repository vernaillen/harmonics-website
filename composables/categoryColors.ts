export function useCategoryTextColor(category: string) {
  if (category && category.length > 0) {
    return 'text-' + category + '-500'
  }
  else {
    return 'text-primary-500'
  }
}

export function useCategoryBGColor(category: string) {
  if (category && category.length > 0) {
    return 'bg-' + category + '-500'
  }
  else {
    return 'bg-primary-500'
  }
}

export function useCategoryLinkHover(category: string) {
  if (category && category.length > 0) {
    return 'link-border-' + category
  }
  else {
    return ''
  }
}

export function getNavItemColors(category: string) {
  let cat = 'primary'
  if (category && category.length > 0) {
    cat = category
  }
  return 'text-' + cat + '-500'
}

export function useCategoryImage(category: string) {
  if (category && category.length > 0) {
    return '/images/harmonics-' + category + '.svg'
  }
  else {
    return '/images/harmonics_logo_notext.png'
  }
}
