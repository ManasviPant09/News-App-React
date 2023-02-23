import React from 'react'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpIcon from '@mui/icons-material/Help';
const NewsNavbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-black p-2 max-w">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight"><NewspaperOutlinedIcon style={{fontSize: "30px"}} /></span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
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
      </div>
      <div>
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
      </div>
    </div>
  </nav>
  )
}

export default NewsNavbar;
