export default defineNuxtPlugin(() => {
  if (import.meta.client && typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
  }
})

function handleScroll() {
  if (import.meta.client) {
    const { isMobileNavOpen } = useMobileNav()
    const currentScrollPosition = window.scrollY

    const header = document.querySelector('.header') as HTMLElement
    if (header) {
      if (currentScrollPosition > 10 && !isMobileNavOpen.value) {
        header.classList.remove('bg-opacity-0')
        header.classList.add('bg-opacity-50')
        header.classList.add('shadow-lg')
      }
      else {
        header.classList.remove('shadow-lg')
        header.classList.remove('bg-opacity-50')
        header.classList.add('bg-opacity-0')
      }
    }

    const categoryImage = document.getElementById('categoryImage') as HTMLElement
    if (categoryImage) {
      let scrollPos = 130
      if (window.innerWidth >= 540 && window.innerWidth < 720) {
        scrollPos = 155
      }
      else if (window.innerWidth >= 720 && window.innerWidth < 960) {
        scrollPos = 180
      }
      else if (window.innerWidth > 960) {
        scrollPos = 233
      }
      if (currentScrollPosition > scrollPos) {
        categoryImage.classList.add('fixed')
      }
      else {
        categoryImage.classList.remove('fixed')
      }
    }

    const backToTop = document.querySelector('.back-to-top') as HTMLElement
    if (
      document.body.scrollTop > 50
      || document.documentElement.scrollTop > 50
    ) { backToTop.style.display = 'flex' }
    else { backToTop.style.display = 'none' }
  }
}
