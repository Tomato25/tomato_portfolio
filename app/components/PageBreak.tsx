import {useEffect} from "react"
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dotsVariants} from "../animations/Animations";

function PageBreak() {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

  return (
    <motion.svg  ref={ref}
    animate={controls} variants={dotsVariants}
        initial="hidden"
         id="visual" viewBox="0 0 1600 100" width="1600" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="z-10 !w-screen  md:px-16  lg:mb-6 opacity-75">
<g><g transform="translate(765 83)"><motion.path variants={dotsVariants} d="M0 -15.9L6.9 -14.4L12.5 -9.9L15.5 -3.5L15.5 3.5L12.5 9.9L6.9 14.4L0 15.9L-6.9 14.4L-12.5 9.9L-15.5 3.5L-15.5 -3.5L-12.5 -9.9L-6.9 -14.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1060 71)"><motion.path variants={dotsVariants} d="M0 -13L5.6 -11.7L10.2 -8.1L12.7 -2.9L12.7 2.9L10.2 8.1L5.6 11.7L0 13L-5.6 11.7L-10.2 8.1L-12.7 2.9L-12.7 -2.9L-10.2 -8.1L-5.6 -11.7Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(877 40)"><motion.path variants={dotsVariants} d="M0 -6L2.6 -5.4L4.7 -3.7L5.8 -1.3L5.8 1.3L4.7 3.7L2.6 5.4L0 6L-2.6 5.4L-4.7 3.7L-5.8 1.3L-5.8 -1.3L-4.7 -3.7L-2.6 -5.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(999 39)"><motion.path variants={dotsVariants} d="M0 -7L3 -6.3L5.5 -4.4L6.8 -1.6L6.8 1.6L5.5 4.4L3 6.3L0 7L-3 6.3L-5.5 4.4L-6.8 1.6L-6.8 -1.6L-5.5 -4.4L-3 -6.3Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(346 58)"><motion.path variants={dotsVariants} d="M0 -10L4.3 -9L7.8 -6.2L9.7 -2.2L9.7 2.2L7.8 6.2L4.3 9L0 10L-4.3 9L-7.8 6.2L-9.7 2.2L-9.7 -2.2L-7.8 -6.2L-4.3 -9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(285 74)"><motion.path variants={dotsVariants} d="M0 -11L4.8 -9.9L8.6 -6.9L10.7 -2.4L10.7 2.4L8.6 6.9L4.8 9.9L0 11L-4.8 9.9L-8.6 6.9L-10.7 2.4L-10.7 -2.4L-8.6 -6.9L-4.8 -9.9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(502 36)"><motion.path variants={dotsVariants} d="M0 -12L5.2 -10.8L9.4 -7.5L11.7 -2.7L11.7 2.7L9.4 7.5L5.2 10.8L0 12L-5.2 10.8L-9.4 7.5L-11.7 2.7L-11.7 -2.7L-9.4 -7.5L-5.2 -10.8Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(659 31)"><motion.path variants={dotsVariants} d="M0 -14L6.1 -12.6L10.9 -8.7L13.6 -3.1L13.6 3.1L10.9 8.7L6.1 12.6L0 14L-6.1 12.6L-10.9 8.7L-13.6 3.1L-13.6 -3.1L-10.9 -8.7L-6.1 -12.6Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(665 72)"><motion.path variants={dotsVariants} d="M0 -5L2.2 -4.5L3.9 -3.1L4.9 -1.1L4.9 1.1L3.9 3.1L2.2 4.5L0 5L-2.2 4.5L-3.9 3.1L-4.9 1.1L-4.9 -1.1L-3.9 -3.1L-2.2 -4.5Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1403 71)"><motion.path variants={dotsVariants} d="M0 -6L2.6 -5.4L4.7 -3.7L5.8 -1.3L5.8 1.3L4.7 3.7L2.6 5.4L0 6L-2.6 5.4L-4.7 3.7L-5.8 1.3L-5.8 -1.3L-4.7 -3.7L-2.6 -5.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1200 20)"><motion.path variants={dotsVariants} d="M0 -12L5.2 -10.8L9.4 -7.5L11.7 -2.7L11.7 2.7L9.4 7.5L5.2 10.8L0 12L-5.2 10.8L-9.4 7.5L-11.7 2.7L-11.7 -2.7L-9.4 -7.5L-5.2 -10.8Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(443 71)"><motion.path variants={dotsVariants} d="M0 -6L2.6 -5.4L4.7 -3.7L5.8 -1.3L5.8 1.3L4.7 3.7L2.6 5.4L0 6L-2.6 5.4L-4.7 3.7L-5.8 1.3L-5.8 -1.3L-4.7 -3.7L-2.6 -5.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(833 70)"><motion.path variants={dotsVariants} d="M0 -12L5.2 -10.8L9.4 -7.5L11.7 -2.7L11.7 2.7L9.4 7.5L5.2 10.8L0 12L-5.2 10.8L-9.4 7.5L-11.7 2.7L-11.7 -2.7L-9.4 -7.5L-5.2 -10.8Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(71 83)"><motion.path variants={dotsVariants} d="M0 -14L6.1 -12.6L10.9 -8.7L13.6 -3.1L13.6 3.1L10.9 8.7L6.1 12.6L0 14L-6.1 12.6L-10.9 8.7L-13.6 3.1L-13.6 -3.1L-10.9 -8.7L-6.1 -12.6Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(557 57)"><motion.path variants={dotsVariants} d="M0 -10L4.3 -9L7.8 -6.2L9.7 -2.2L9.7 2.2L7.8 6.2L4.3 9L0 10L-4.3 9L-7.8 6.2L-9.7 2.2L-9.7 -2.2L-7.8 -6.2L-4.3 -9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(155 20)"><motion.path variants={dotsVariants} d="M0 -10L4.3 -9L7.8 -6.2L9.7 -2.2L9.7 2.2L7.8 6.2L4.3 9L0 10L-4.3 9L-7.8 6.2L-9.7 2.2L-9.7 -2.2L-7.8 -6.2L-4.3 -9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(499 77)"><motion.path variants={dotsVariants} d="M0 -10L4.3 -9L7.8 -6.2L9.7 -2.2L9.7 2.2L7.8 6.2L4.3 9L0 10L-4.3 9L-7.8 6.2L-9.7 2.2L-9.7 -2.2L-7.8 -6.2L-4.3 -9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(789 57)"><motion.path variants={dotsVariants} d="M0 -14L6.1 -12.6L10.9 -8.7L13.6 -3.1L13.6 3.1L10.9 8.7L6.1 12.6L0 14L-6.1 12.6L-10.9 8.7L-13.6 3.1L-13.6 -3.1L-10.9 -8.7L-6.1 -12.6Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(699 82)"><motion.path variants={dotsVariants} d="M0 -11L4.8 -9.9L8.6 -6.9L10.7 -2.4L10.7 2.4L8.6 6.9L4.8 9.9L0 11L-4.8 9.9L-8.6 6.9L-10.7 2.4L-10.7 -2.4L-8.6 -6.9L-4.8 -9.9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(385 58)"><motion.path variants={dotsVariants} d="M0 -12L5.2 -10.8L9.4 -7.5L11.7 -2.7L11.7 2.7L9.4 7.5L5.2 10.8L0 12L-5.2 10.8L-9.4 7.5L-11.7 2.7L-11.7 -2.7L-9.4 -7.5L-5.2 -10.8Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(307 35)"><motion.path variants={dotsVariants} d="M0 -13L5.6 -11.7L10.2 -8.1L12.7 -2.9L12.7 2.9L10.2 8.1L5.6 11.7L0 13L-5.6 11.7L-10.2 8.1L-12.7 2.9L-12.7 -2.9L-10.2 -8.1L-5.6 -11.7Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1536 30)"><motion.path variants={dotsVariants} d="M0 -6L2.6 -5.4L4.7 -3.7L5.8 -1.3L5.8 1.3L4.7 3.7L2.6 5.4L0 6L-2.6 5.4L-4.7 3.7L-5.8 1.3L-5.8 -1.3L-4.7 -3.7L-2.6 -5.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1579 48)"><motion.path variants={dotsVariants} d="M0 -14L6.1 -12.6L10.9 -8.7L13.6 -3.1L13.6 3.1L10.9 8.7L6.1 12.6L0 14L-6.1 12.6L-10.9 8.7L-13.6 3.1L-13.6 -3.1L-10.9 -8.7L-6.1 -12.6Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1261 62)"><motion.path variants={dotsVariants} d="M0 -10L4.3 -9L7.8 -6.2L9.7 -2.2L9.7 2.2L7.8 6.2L4.3 9L0 10L-4.3 9L-7.8 6.2L-9.7 2.2L-9.7 -2.2L-7.8 -6.2L-4.3 -9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1317 42)"><motion.path variants={dotsVariants} d="M0 -7L3 -6.3L5.5 -4.4L6.8 -1.6L6.8 1.6L5.5 4.4L3 6.3L0 7L-3 6.3L-5.5 4.4L-6.8 1.6L-6.8 -1.6L-5.5 -4.4L-3 -6.3Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(149 58)"><motion.path variants={dotsVariants} d="M0 -7L3 -6.3L5.5 -4.4L6.8 -1.6L6.8 1.6L5.5 4.4L3 6.3L0 7L-3 6.3L-5.5 4.4L-6.8 1.6L-6.8 -1.6L-5.5 -4.4L-3 -6.3Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(813 30)"><motion.path variants={dotsVariants} d="M0 -10L4.3 -9L7.8 -6.2L9.7 -2.2L9.7 2.2L7.8 6.2L4.3 9L0 10L-4.3 9L-7.8 6.2L-9.7 2.2L-9.7 -2.2L-7.8 -6.2L-4.3 -9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(264 33)"><motion.path variants={dotsVariants} d="M0 -13L5.6 -11.7L10.2 -8.1L12.7 -2.9L12.7 2.9L10.2 8.1L5.6 11.7L0 13L-5.6 11.7L-10.2 8.1L-12.7 2.9L-12.7 -2.9L-10.2 -8.1L-5.6 -11.7Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(752 46)"><motion.path variants={dotsVariants} d="M0 -9L3.9 -8.1L7 -5.6L8.8 -2L8.8 2L7 5.6L3.9 8.1L0 9L-3.9 8.1L-7 5.6L-8.8 2L-8.8 -2L-7 -5.6L-3.9 -8.1Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(21 48)"><motion.path variants={dotsVariants} d="M0 -6L2.6 -5.4L4.7 -3.7L5.8 -1.3L5.8 1.3L4.7 3.7L2.6 5.4L0 6L-2.6 5.4L-4.7 3.7L-5.8 1.3L-5.8 -1.3L-4.7 -3.7L-2.6 -5.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(102 18)"><motion.path variants={dotsVariants} d="M0 -5L2.2 -4.5L3.9 -3.1L4.9 -1.1L4.9 1.1L3.9 3.1L2.2 4.5L0 5L-2.2 4.5L-3.9 3.1L-4.9 1.1L-4.9 -1.1L-3.9 -3.1L-2.2 -4.5Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1449 40)"><motion.path variants={dotsVariants} d="M0 -5L2.2 -4.5L3.9 -3.1L4.9 -1.1L4.9 1.1L3.9 3.1L2.2 4.5L0 5L-2.2 4.5L-3.9 3.1L-4.9 1.1L-4.9 -1.1L-3.9 -3.1L-2.2 -4.5Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(239 61)"><motion.path variants={dotsVariants} d="M0 -11L4.8 -9.9L8.6 -6.9L10.7 -2.4L10.7 2.4L8.6 6.9L4.8 9.9L0 11L-4.8 9.9L-8.6 6.9L-10.7 2.4L-10.7 -2.4L-8.6 -6.9L-4.8 -9.9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(453 28)"><motion.path variants={dotsVariants} d="M0 -9L3.9 -8.1L7 -5.6L8.8 -2L8.8 2L7 5.6L3.9 8.1L0 9L-3.9 8.1L-7 5.6L-8.8 2L-8.8 -2L-7 -5.6L-3.9 -8.1Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1356 18)"><motion.path variants={dotsVariants} d="M0 -12L5.2 -10.8L9.4 -7.5L11.7 -2.7L11.7 2.7L9.4 7.5L5.2 10.8L0 12L-5.2 10.8L-9.4 7.5L-11.7 2.7L-11.7 -2.7L-9.4 -7.5L-5.2 -10.8Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1208 70)"><motion.path variants={dotsVariants} d="M0 -5L2.2 -4.5L3.9 -3.1L4.9 -1.1L4.9 1.1L3.9 3.1L2.2 4.5L0 5L-2.2 4.5L-3.9 3.1L-4.9 1.1L-4.9 -1.1L-3.9 -3.1L-2.2 -4.5Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(961 72)"><motion.path variants={dotsVariants} d="M0 -12L5.2 -10.8L9.4 -7.5L11.7 -2.7L11.7 2.7L9.4 7.5L5.2 10.8L0 12L-5.2 10.8L-9.4 7.5L-11.7 2.7L-11.7 -2.7L-9.4 -7.5L-5.2 -10.8Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1491 17)"><motion.path variants={dotsVariants} d="M0 -14L6.1 -12.6L10.9 -8.7L13.6 -3.1L13.6 3.1L10.9 8.7L6.1 12.6L0 14L-6.1 12.6L-10.9 8.7L-13.6 3.1L-13.6 -3.1L-10.9 -8.7L-6.1 -12.6Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1353 58)"><motion.path variants={dotsVariants} d="M0 -14L6.1 -12.6L10.9 -8.7L13.6 -3.1L13.6 3.1L10.9 8.7L6.1 12.6L0 14L-6.1 12.6L-10.9 8.7L-13.6 3.1L-13.6 -3.1L-10.9 -8.7L-6.1 -12.6Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1103 78)"><motion.path variants={dotsVariants} d="M0 -11L4.8 -9.9L8.6 -6.9L10.7 -2.4L10.7 2.4L8.6 6.9L4.8 9.9L0 11L-4.8 9.9L-8.6 6.9L-10.7 2.4L-10.7 -2.4L-8.6 -6.9L-4.8 -9.9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(49 28)"><motion.path variants={dotsVariants} d="M0 -13L5.6 -11.7L10.2 -8.1L12.7 -2.9L12.7 2.9L10.2 8.1L5.6 11.7L0 13L-5.6 11.7L-10.2 8.1L-12.7 2.9L-12.7 -2.9L-10.2 -8.1L-5.6 -11.7Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1502 82)"><motion.path variants={dotsVariants} d="M0 -6L2.6 -5.4L4.7 -3.7L5.8 -1.3L5.8 1.3L4.7 3.7L2.6 5.4L0 6L-2.6 5.4L-4.7 3.7L-5.8 1.3L-5.8 -1.3L-4.7 -3.7L-2.6 -5.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1022 71)"><motion.path variants={dotsVariants} d="M0 -12L5.2 -10.8L9.4 -7.5L11.7 -2.7L11.7 2.7L9.4 7.5L5.2 10.8L0 12L-5.2 10.8L-9.4 7.5L-11.7 2.7L-11.7 -2.7L-9.4 -7.5L-5.2 -10.8Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(192 64)"><motion.path variants={dotsVariants} d="M0 -10L4.3 -9L7.8 -6.2L9.7 -2.2L9.7 2.2L7.8 6.2L4.3 9L0 10L-4.3 9L-7.8 6.2L-9.7 2.2L-9.7 -2.2L-7.8 -6.2L-4.3 -9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(845 20)"><motion.path variants={dotsVariants} d="M0 -6L2.6 -5.4L4.7 -3.7L5.8 -1.3L5.8 1.3L4.7 3.7L2.6 5.4L0 6L-2.6 5.4L-4.7 3.7L-5.8 1.3L-5.8 -1.3L-4.7 -3.7L-2.6 -5.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1139 39)"><motion.path variants={dotsVariants} d="M0 -6L2.6 -5.4L4.7 -3.7L5.8 -1.3L5.8 1.3L4.7 3.7L2.6 5.4L0 6L-2.6 5.4L-4.7 3.7L-5.8 1.3L-5.8 -1.3L-4.7 -3.7L-2.6 -5.4Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(534 29)"><motion.path variants={dotsVariants} d="M0 -11L4.8 -9.9L8.6 -6.9L10.7 -2.4L10.7 2.4L8.6 6.9L4.8 9.9L0 11L-4.8 9.9L-8.6 6.9L-10.7 2.4L-10.7 -2.4L-8.6 -6.9L-4.8 -9.9Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1388 21)"><motion.path variants={dotsVariants} d="M0 -14L6.1 -12.6L10.9 -8.7L13.6 -3.1L13.6 3.1L10.9 8.7L6.1 12.6L0 14L-6.1 12.6L-10.9 8.7L-13.6 3.1L-13.6 -3.1L-10.9 -8.7L-6.1 -12.6Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1311 83)"><motion.path variants={dotsVariants} d="M0 -8L3.5 -7.2L6.3 -5L7.8 -1.8L7.8 1.8L6.3 5L3.5 7.2L0 8L-3.5 7.2L-6.3 5L-7.8 1.8L-7.8 -1.8L-6.3 -5L-3.5 -7.2Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(1039 25)"><motion.path variants={dotsVariants} d="M0 -7L3 -6.3L5.5 -4.4L6.8 -1.6L6.8 1.6L5.5 4.4L3 6.3L0 7L-3 6.3L-5.5 4.4L-6.8 1.6L-6.8 -1.6L-5.5 -4.4L-3 -6.3Z" fill="#ADE6B9"></motion.path></g>
<g transform="translate(625 64)"><motion.path variants={dotsVariants} d="M0 -10L4.3 -9L7.8 -6.2L9.7 -2.2L9.7 2.2L7.8 6.2L4.3 9L0 10L-4.3 9L-7.8 6.2L-9.7 2.2L-9.7 -2.2L-7.8 -6.2L-4.3 -9Z" fill="#ADE6B9"></motion.path></g>
</g></motion.svg> 
  )
}

export default PageBreak