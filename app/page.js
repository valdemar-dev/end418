import Image from 'next/image'

export default function Home() {
  return (  
    <div className="h-screen w-full flex">
      <main className='relative rounded-2xl box-border p-4 sm:p-10 lg:p-20 w-full overflow-hidden'>
        <div className="relative h-full" id="stuff">
          <ul id="abt_me" className='absolute right-0 bottom-48 sm:top-0 list-disc list-inside text-xl'>
            <li className="list-item">age: 18</li>
            <li className="list-item">height: 186cm</li>
            <li className="list-item">location: bulgaria</li>
            <li className="list-item">gender: enderMAN</li>
            <li className="list-item">occupation: certified dumbass</li>
            <li className="list-item">status: alive {"(for now)"}</li>
          </ul>
          
          <div className='absolute left-0 bottom-20 sm:bottom-0' id="name">
            <h1 className="border-b-4 text-5xl sm:text-7xl w-fit pb-1 mb-1">End</h1>
            <span className="ml-0"><i>"To Be Born Is To Have A Soul, I Guess."</i></span>
          </div>


          <div id="socials" className='absolute right-0 bottom-0 flex flex-row  sm:flex-col justify-end text-right gap-2 flex-wrap'>
              <div className="flex gap-2">
                <Image src="/minecraft.svg" height="24" width="24"/> End418
              </div>
              <div className="flex gap-2">
                <Image src="/discord.svg" height="24" width="24"/> .eendless
              </div>
            </div>
        </div>
      </main>
    </div>
  )
}
