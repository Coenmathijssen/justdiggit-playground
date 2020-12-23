import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const manifests = [...document.querySelectorAll('.manifest')]
const images = [...document.querySelectorAll('img')]

const audio = document.querySelector('audio')


manifests.forEach((manifest, i) => {
  const text = manifest.querySelector('.text')
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: manifest,
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "bottom center", // end after scrolling 500px beyond the start
      scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      onUpdate: self => {
        if (i === 0) {
          if (self.progress > 0.3 && self.progress < 0.5) {
            images[0].classList.add('active')
          } else {
            images[0].classList.remove('active')
          }
        } else if (i === 1) {
          if (self.progress > 0.3 && self.progress < 0.5) {
            images[1].classList.add('active')
          } else {
            images[1].classList.remove('active')
          }
        } else if (i === 2) {
          if (self.progress > 0.3 && self.progress < 0.5) {
            images[2].classList.add('active')
          } else {
            images[2].classList.remove('active')
          }
        }
      }
    }
  });
  
  // add animations and labels to the timeline
  tl
  .fromTo(text, 
    { backgroundSize: '0 100%' },
    { backgroundSize: '100% 100%' }
  )
})
