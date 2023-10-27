import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-black w-full px-6 py-10  text-white">
        <section className="w-full flex sm:flex-row flex-col justify-between items-center p-2">
          <div className="text-red-600 font-bold sm:text-3xl text-lg">NetflixGPT</div>
          <div className="flex sm:w-[20%] justify-between">
            <p className="pr-2 hover:text-red-600">About</p>
            <p className="pr-2  hover:text-red-600">Privacy policy</p>
            <p className=" hover:text-red-600">Contact</p>
          </div>
        </section>
        <hr />
        <div className="flex justify-center w-full">
          <p className="p-4"> Made with ❤️ by SURYAKANT</p> 
        </div>
        <p className="text-center">© Copyright netfilxgpt-bb0b3.web.app . All Rights Reserved</p>
      </footer>
  )
}

export default Footer