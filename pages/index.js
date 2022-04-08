import Head from "next/head"

export default function Home() {
  return (
     
    <div>
   
   <Head>
      <title>Mobile Layout</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="grid min-h-screen bg-gray-300 antialiased md:grid-cols-2 place-items-center ">

  {/* 1st box  */}
  <div className="relative mt-16 box-content h-4/5 w-72 space-y-3 rounded-md bg-white p-4 shadow-md hover:shadow-xl md:ml-16 md:space-y-5 lg:ml-44 xl:ml-80">
    <div className="flex">
      <div><img src=" https://picsum.photos/200/300" alt="" className="h-12 w-12 rounded-full p-2" /></div>
      <div className="-ml-4 mt-8 h-2 w-2 rounded-full bg-green-500"></div>

      <div>
        <div className="pl-3">
          <div className="pt-1 font-semibold">Ralph Edwards</div>
          <div className="text-sm text-gray-400">ralph@pixsellz.io</div>
        </div>
      </div>
    </div>

    <div><input type="text" placeholder="Search" className="h-9 w-72 rounded-md bg-gray-200 pl-4 focus-within:bg-white focus:outline-none focus:ring-1 focus:ring-blue-400" /></div>

    <div className="font-semibold text-gray-700">
      <div className="flex space-x-3 text-base">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        <div className="text-">Profile</div>
      </div>
    </div>

    <div className="font-semibold text-gray-700">
      <div className="flex space-x-3 text-base">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
        <div className="text-">Feed</div>
      </div>
    </div>

    <div className="font-semibold text-gray-700">
      <div className="flex space-x-3 text-base">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
        </svg>
        <div className="text-">Analytics</div>
      </div>
    </div>

    <div className="border"></div>

    <div className="font-semibold text-gray-700">
      <div className=" flex justify-between">
      <div className="flex space-x-3 text-base">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <div className="text-">Dark Mode</div>
          </div>

        <div className="">
          <label htmlFor="toggle-switch">
            <input type="checkbox" id="toggle-switch" className="h-5 w-10 cursor-pointer appearance-none rounded-full bg-gray-700 bg-opacity-5 transition duration-200 checked:bg-blue-500 relative" />
          </label>
        </div>
      </div>
    </div>

    <div className="font-semibold text-gray-700">
      <div className="flex space-x-3 text-base">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        <div className="text-">Settings</div>
      </div>
    </div>

    <div className="font-semibold text-gray-700">
      <div className="flex space-x-3 text-base">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        <div className="text-">Support</div>
      </div>
    </div>

    <div className="border"></div>

    <div className="font-semibold text-gray-700">
      <div className="flex space-x-3 text-base">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <div className="text-">Log Out</div>
      </div>
    </div>
  </div>

  <div>
     {/* 2nd box  */}
    <div className="mt-4 box-content h-32 w-72 space-y-5 rounded-md bg-white p-4 md:mt-16">

      <div className="font-semibold text-gray-700">
      <div className=" flex justify-between">
        <div className="flex space-x-3 text-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <div className="text-">Airplane Mode</div>
          </div>

          <div className="">
          <label htmlFor="toggle-switch">
            <input type="checkbox" id="toggle-switch" className="h-5 w-10 cursor-pointer appearance-none rounded-full bg-gray-700 bg-opacity-5 transition duration-200 checked:bg-blue-500 relative" />
          </label>
          </div>

        </div>
      </div>

      <div className="font-semibold text-gray-700">
      <div className=" flex justify-between">
        <div className="flex space-x-3 text-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
          <div className="text-">Wi-Fi</div>
          </div>

          <div className="">
          <label htmlFor="toggle-switch">
            <input type="checkbox" id="toggle-switch" className="h-5 w-10 cursor-pointer appearance-none rounded-full bg-gray-700 bg-opacity-5 transition duration-200 checked:bg-blue-500 relative" />
          </label>
          </div>

        </div>
      </div>

      <div className="font-semibold text-gray-700 ">
      <div className=" flex justify-between">
        <div className="flex space-x-3 text-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <div className="text-">Bluetooth</div>
          </div>
          
          <div className="">
          <label htmlFor="toggle-switch">
            <input type="checkbox" id="toggle-switch" className="h-5 w-10 cursor-pointer appearance-none rounded-full bg-gray-700 bg-opacity-5 transition duration-200 checked:bg-blue-500 relative" />
          </label>
        </div>

        </div>
      </div>
    </div>

     {/* 3rd box  */}
    <div className="mt-4 box-content h-36 w-72 rounded-md bg-white p-4">
      <div className="font-semibold text-gray-700">
        <div className="flex justify-between">
          <div><img src="https://i.pravatar.cc/300" alt="" className="h-12 w-12 rounded-full p-2" /></div>
          <div className="-ml-8 mt-8 h-2 w-2 rounded-full bg-green-500"></div>

          <div className="p-3">John Meyers</div>
          <div className="pl-20 pt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="font-semibold text-gray-700">
        <div className="flex justify-between">
          <div><img src="https://i.pravatar.cc/150?img=3" alt="" className="h-12 w-12 rounded-full p-2" /></div>
          <div className="-ml-6 mt-8 h-2 w-2 rounded-full bg-green-500"></div>

          <div className="p-3">Ololade Asake</div>
          <div className="pl-20 pt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="font-semibold text-gray-700">
        <div className="flex justify-between">
          <div><img src=" https://i.pravatar.cc/300" alt="" className="h-12 w-12 rounded-full p-2" /></div>
          <div className="-ml-6 mt-8 h-2 w-2 rounded-full bg-green-500"></div>

          <div className="p-3">Benson Brown</div>
          <div className="pl-20 pt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* 4th box */}
    <div className="mt-4 box-content h-40 w-72 space-y-5 rounded-md bg-white p-4">
      <div><input type="text" placeHolder="Search" className="h-9 w-72 rounded-md bg-gray-200 pl-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-400" /></div>

      <div className="font-semibold text-gray-700">
        <div className="flex space-x-3 text-base">
          <div><input type="checkbox" /></div>
          <div className="text-">United States</div>
        </div>
      </div>

      <div className="font-semibold text-gray-700">
        <div className="flex space-x-3 text-base">
          <div><input type="checkbox" /></div>
          <div className="text-">France</div>
        </div>
      </div>

      <div className="font-semibold text-gray-700">
        <div className="flex space-x-3 text-base">
          <div><input type="checkbox" /></div>
          <div className="text-">Italy</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  )
}
