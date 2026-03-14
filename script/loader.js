const nav = document.querySelector('nav')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const thena = document.querySelector('.loader')

function loader() {
  nav.style.display = 'none'
  main.style.display = 'none'
  footer.style.display = 'none'
  thena.style.display = 'flex'

  const bar = document.querySelector('.bar')
  const barVal = document.querySelector('.val')

  const max = 100
  const duration = 9000
  const steps = 18
  const minDelay = 210
  const maxDelay = 550

  if (!bar) {
    pageContent()
    thena.style.display = 'none'
    return
  }

  bar.style.transition = 'width 220ms ease-out'

  const delayWeights = Array.from({ length: steps }, () => {
    return minDelay + Math.random() * (maxDelay - minDelay)
  })

  const delayTotal = delayWeights.reduce((sum, val) => sum + val, 0)
  const delays = delayWeights.map((val) => Math.round((val / delayTotal) * duration))

  const jumpWeights = Array.from({ length: steps }, () => 0.6 + Math.random())
  const jumpTotal = jumpWeights.reduce((sum, val) => sum + val, 0)

  let stepIndex = 0
  let progress = 0

  const tick = () => {
    progress = Math.min(progress + jumpWeights[stepIndex] / jumpTotal, 1)
    bar.style.width = `${Math.round(progress * max)}%`
    if (barVal) barVal.textContent = `${Math.round(progress * 100)}%`

    if (stepIndex < steps - 1) {
      stepIndex += 1
      setTimeout(tick, delays[stepIndex - 1])
      return
    }

    setTimeout(() => {
      pageContent()
      thena.style.display = 'none'
    }, 1500)
  }

  setTimeout(tick, delays[0])
}
function pageContent(){
  main.style.display = ''
  nav.style.display = 'flex'
  footer.style.display = 'flex'
  thena.style.display = 'none'
}

loader()


//Deprecated Function
function navControl() {
  const container = document.querySelector('#home')
  const btn = document.querySelector('#homeNav')

  const container1 = document.querySelector('#about')
  const btn1 = document.querySelector('#aboutNav')

  const container2 = document.querySelector('#gallery')
  const btn2 = document.querySelector('#galleryNav')

  const container3 = document.querySelector('#contact')
  const btn3 = document.querySelector('#contactNav')

  const body = document.body

  function eventa(cont, pointer, loc) {

    pointer.addEventListener('click', ()=>{
      // cont.style.position = 'relative';
      // cont.style.top = '200px';
      window.location.href = loc;
    })
  }

  eventa(container,btn, "#home")
  eventa(container1,btn1, "#about")
  eventa(container2,btn2, "#gallery")
  eventa(container3,btn3, "#contact")
}
