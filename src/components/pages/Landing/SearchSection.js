/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
const SearchSection = () => {
  return (
    <section className='flex relative justify-center items-center gap-y-7 flex-col text-white h-96'>
        <h2 className='font-bold text-4xl'>Shorten your links with <span className='text-[#32D29A]'>Kesy!</span></h2>
        <div className='p-1 flex justify-between rounded-lg border-2 border-white/[.6] w-96'>
            <input className='bg-transparent mx-2 text-xs' placeholder='Paste your link...'></input>
            <button className='bg-white rounded-lg px-2 py-1 text-zinc-900 text-xs'>Shorten</button>
        </div>
        <p className="text-xs text-center font-medium opacity-60 transition hover:opacity-100">Hey there! Do you want to shorten your urls ?<br></br>It's super easy to use, just paste the link and voila!</p>
        <div className="bg-zinc-700/[.4] py-1 px-3.5 rounded-3xl flex justify-center items-center">
            <span className="animate-pulse w-2.5 h-2.5 mr-2 bg-[#26EE9F] rounded-full ring ring-[#26EE9F]/[.4] "></span>
            <div className="text-[#2AEE9F] text-xs">1.999.999 links shortened.</div>
        </div>
        <Image className='absolute z-[-10]' alt='flare' width={1024} height={628} src="/images/flare.png"/>
        <Image className='absolute z-[-10]' alt='flare' fill src="/images/grid.png"/>

    </section>
  )
}

export default SearchSection