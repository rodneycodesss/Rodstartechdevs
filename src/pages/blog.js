import { setupBlog } from '../components/blog.js'

export function setupBlogPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const blogSection = document.querySelector('#blog')
  if (blogSection) {
    blogSection.style.display = 'block'
  }
  
  setupBlog()
}
