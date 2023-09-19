import { useEffect} from 'react'
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from "react-icons/bs";
import {useInView} from "react-intersection-observer"
import { iconContainerVariants } from '../animations/Animations'
import { motion, useAnimation } from 'framer-motion'

function Contact() {

  const textVariant = {
   hidden: {
    opacity:0, y:100
   },
   visible: {
    opacity:1,
    y:0
   }

  }

  const controls = useAnimation();
  const [ref, inView] = useInView({threshold: 0.2});
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className='flex flex-col justify-center items-center w-screen sm:max-w-6xl xl:max-w-screen-2xl lg:px-16 mx-auto z-10 my-20 gap-16 overflow-hidden'>
        <motion.h1 variants={textVariant} initial="hidden" animate={controls} ref={ref} className='lg:text-4xl text-2xl text-pink w-1/2 font-poppins text-center'>If you have more questions or you wish to collaborate feel free to contact me!</motion.h1>
        <div className=" flex gap-6 flex-row justify-center items-center mb-16 text-4xl z-10">
        <motion.div
          ref={ref}
          variants={iconContainerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-row h-100 justify-center items-center gap-8 md:gap-16 "
        >
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              backgroundColor: "#DDACE6",

              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl  flex items-center justify-center rounded-full bg-lightGreen text-green cursor-pointer"
            href="tel:+447598236657"
            target="_blank"
          >
            <BsFillTelephoneFill />
          </motion.a>
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              backgroundColor: "#DDACE6",

              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-lightGreen text-green  cursor-pointer"
            href="https://www.linkedin.com/in/hrvoje-tomic/"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
          
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              backgroundColor: "#DDACE6",

              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-lightGreen text-green cursor-pointer"
            href="mailto:htomic4@gmail.com"
            target="_blank"
          >
            <MdEmail />
          </motion.a>
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              backgroundColor: "#DDACE6",

              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-lightGreen text-green  cursor-pointer"
            href="https://t.me/H_Tomic"
            target="_blank"
          >
            <FaTelegramPlane />
          </motion.a>
        </motion.div>

      </div>
    </div>
  )
}

export default Contact