import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const GPTsearchBar = () => {
    const langType=useSelector((store)=>store.appConfig?.lang)
  return (
    <div className="flex justify-center pt-[12%] ">
    <form className="bg-black px-6 py-8 grid grid-cols-12 w-2/3 text-lg rounded-lg">
      <input
        type="text"
        placeholder={lang[langType]?.placeHolder}
        className="col-span-10 px-4 py-4 outline-none border-none"
      />
      <button className="col-span-2 bg-red-600 text-white p-2">
        {lang[langType]?.search}
        <i className="fa-solid fa-magnifying-glass pl-2"></i>
      </button>
    </form>
  </div>
  )
}

export default GPTsearchBar