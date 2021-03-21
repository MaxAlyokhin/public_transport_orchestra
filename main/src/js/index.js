window.addEventListener('load', () => {
  // Settings
  //  Чтобы поменять язык по-умолчанию, меняем на единицу
  let languageMarker = 0 // 1 - en, 0 - ru

  if (languageMarker) {
    document.querySelector('.en-button').classList.toggle('active')
    document.querySelector('.en').style.display = 'block'
    document.querySelector('.en').style.opacity = 1
  } else {
    document.querySelector('.ru-button').classList.toggle('active')
    document.querySelector('.ru').style.display = 'block'
    document.querySelector('.ru').style.opacity = 1
  }

  document.querySelector('.ru-button').addEventListener('click', () => {
    document.querySelector('.ru-button').classList.toggle('active')
    document.querySelector('.en-button').classList.toggle('active')
    document.querySelector('.en').style.opacity = 0
    setTimeout(() => {
      document.querySelector('.en').style.display = 'none'
    }, 1000)
    setTimeout(() => {
      document.querySelector('.ru').style.display = 'block'
      setTimeout(() => {
        document.querySelector('.ru').style.opacity = 1
      }, 100)
    }, 1001)
  })

  document.querySelector('.en-button').addEventListener('click', () => {
    document.querySelector('.en-button').classList.toggle('active')
    document.querySelector('.ru-button').classList.toggle('active')
    document.querySelector('.ru').style.opacity = 0
    setTimeout(() => {
      document.querySelector('.ru').style.display = 'none'
    }, 1000)
    setTimeout(() => {
      document.querySelector('.en').style.display = 'block'
      setTimeout(() => {
        document.querySelector('.en').style.opacity = 1
      }, 100)
    }, 1001)
  })

  // Плавно показываем контент только после полной загрузки
  document.querySelector('body').style.opacity = 1
})
