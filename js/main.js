new Swiper('.service .swiper-container', {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 36,
  navigation: {
    prevEl: '.service .swiper-prev',
    nextEl: '.service .swiper-next'
  }
})

new Swiper('.portfolio .swiper-container', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  spaceBetween: 37,
  navigation: {
    prevEl: '.portfolio .swiper-prev',
    nextEl: '.portfolio .swiper-next'
  }
})

new Swiper('.blog .swiper-container', {
  slidesPerView: 2,
  spaceBetween: 33,
  loop: true,
  navigation: {
    prevEl: '.blog .swiper-prev',
    nextEl: '.blog .swiper-next'
  }
})

const switchEl = document.querySelector('.pricing input')
const monthlyEl = document.querySelector('.pricing .monthly')
const yearlyEl = document.querySelector('.pricing .yearly')
const priceEls = document.querySelectorAll('.pricing .price')
const h4Els = document.querySelectorAll('.pricing .plans__price h4')
switchEl.addEventListener('change', function () {
  if (this.checked) {
    monthlyEl.classList.add('unchecked')
    yearlyEl.classList.add('checked')
    priceEls.forEach(function (priceEl) {
      let price = parseInt(priceEl.textContent)
      price = Math.floor((price * 12) * 0.9)
      priceEl.textContent = price.toString()
    })
    h4Els.forEach(function (h4El) {
      h4El.textContent = '/Yearly'
    })
  } else {
    monthlyEl.classList.remove('unchecked')
    yearlyEl.classList.remove('checked')
    priceEls.forEach(function (priceEl) {
      let price = parseInt(priceEl.textContent)
      price = Math.ceil((price / .9) / 12)
      priceEl.textContent = price.toString()
    })
    h4Els.forEach(function (h4El) {
      h4El.textContent = '/Monthly'
    })
  }
})

const thisYear = document.querySelector('footer .this-year')
thisYear.textContent = new Date().getFullYear()