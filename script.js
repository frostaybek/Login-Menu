const div = document.getElementById('offline')

window.addEventListener('online', () => {
    div.style.display = 'none'
})

window.addEventListener('offline', () => {
    div.style.display = 'block'
})