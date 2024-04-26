document.querySelector('.left-arrow').addEventListener('click', () => {
    document.querySelector('.project-container').scrollBy({
        left:-300,
        behavior: 'smooth'
    })
})

document.querySelector('.right-arrow').addEventListener('click', () => {
    document.querySelector('.project-container').scrollBy({
        left:-300,
        behavior: 'smooth'
    })
})