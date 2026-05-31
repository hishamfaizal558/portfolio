export const scrollToSection = (target) => {
  const section = document.getElementById(target)

  if (!section) {
    return
  }

  const navOffset = 96
  const targetPosition =
    section.getBoundingClientRect().top + window.scrollY - navOffset
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  const duration = 700
  const startTime = performance.now()

  const easeOutQuart = (progress) => 1 - Math.pow(1 - progress, 4)

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutQuart(progress)

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
  window.history.pushState(null, '', `#${target}`)
}

export const submitContactForm = (event) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const name = formData.get('name')
  const email = formData.get('email')
  const topic = formData.get('topic')
  const message = formData.get('message')
  const subject = encodeURIComponent(`Portfolio contact: ${topic}`)
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
  )

  window.location.href = `mailto:hishamfaizal558@gmail.com?subject=${subject}&body=${body}`
}
