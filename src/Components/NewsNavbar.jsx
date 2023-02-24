import React from 'react'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpIcon from '@mui/icons-material/Help';
import {motion} from "framer-motion";
const NewsNavbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-black p-2 max-w">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight"><NewspaperOutlinedIcon style={{fontSize: "30px"}} /></span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <motion.h2 initial={{color: "white",opacity: 0}} animate={{color: "#6249a3",opacity: 1}} transition={{ duration: 5.0 }}>
         <a href="#responsive-header" class="block mt-4 mb-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white text-xl mr-4">
          Learn
        </a>
        <a href="#responsive-header" class="block mt-4 mb-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white text-xl mr-4">
          Blog
        </a>
        <a href="#responsive-header" class="block mt-4 mb-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white text-xl  mr-4">
          What's new
        </a>
        <a href="#responsive-header" class="block mt-4 mb-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white text-xl">
          Subscribe
        </a>
       </motion.h2>
      </div>
    <div>
     <motion.h2 initial={{color: "white",opacity: 0}} animate={{color: "#6249a3",opacity: 1}} transition={{ duration: 5.0 }}>
        <a href="#responsive-header" class="block mt-4 mb-4 mr-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white text-xl">
         <TwitterIcon />
        </a>
        <a href="#responsive-header" class="block mt-4 mb-4 mr-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white text-xl">
         <InstagramIcon />
        </a>
        <a href="#responsive-header" class="block mt-4 mb-4 mr-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white text-xl">
         <MailOutlineIcon />
        </a>
        <a href="#responsive-header" class="block mt-4 mb-4 mr-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white text-xl">
         <HelpIcon />
        </a>
     </motion.h2>
      </div>
    </div>
  </nav>
  )
}

export default NewsNavbar;
