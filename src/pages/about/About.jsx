import React from 'react'

export default function About() {
  return (
    <div className='grid grid-cols-2 gap-10'>

      <div>
        <img className='w-full opacity-75' src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="" />
      </div>

      <div>
        <h1 className='text-center mt-7 text-3xl tracking-[5px]'>About Catering</h1>
        <div className='mt-10 space-y-5'>
          <p className='text-center tracking-[5px]'>Tradition since 1889</p>
          <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
          <p className='opacity-45'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>

      </div>



    </div>
  )
}
