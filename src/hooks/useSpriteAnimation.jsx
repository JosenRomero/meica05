import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const frame_count  = 5;
const offset_value = 100;

export const useSpriteAnimation = () => {

  gsap.registerPlugin(ScrollTrigger);

  const viewer = useRef(null);
  const scene = useRef(null);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      // Sprite Animation With ScrollTrigger
      gsap.to(viewer.current, {
        backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
        ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
        scrollTrigger: { trigger: scene.current, start: "top top", end: "+=" + (frame_count * offset_value), pin: true, scrub: true }
      });
      
    }, viewer)

    return () => ctx.revert()

  }, [])

  return {
    viewer,
    scene
  }

}
