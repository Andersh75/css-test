let oldScroll = 0
let book = document.querySelector(`.float`)
let caps = document.querySelector(`.caps`)

window.addEventListener(`scroll`, e => {
  // console.log(book.parentElement.offsetHeight - book.offsetTop)
  // if (book.parentElement.offsetHeight - book.offsetTop < 100) {
  //   book.setAttribute(`style`, `position:relative;`)
  // } else {
  //   if (oldScroll > window.scrollY) {
  //     book.setAttribute(`style`, `position:sticky;`)
  //   }
  // }
  // oldScroll = window.scrollY

  console.log(book.getBoundingClientRect())
  let parent = book.parentElement.parentElement
  console.log(parent.getBoundingClientRect())
  if (
    book.getBoundingClientRect().top - parent.getBoundingClientRect().top > 40 &&
    parent.getBoundingClientRect().height +
      parent.getBoundingClientRect().top -
      book.getBoundingClientRect().top -
      book.getBoundingClientRect().height >
      40
  ) {
    // book.setAttribute(`style`, `visibility:visible;`)
    book.setAttribute(`style`, `animation: scale-in 0.5s forwards;`)
  } else {
    // book.setAttribute(`style`, `visibility:hidden;`)
    book.setAttribute(`style`, `animation: scale-out 0.5s forwards;`)
  }
})
