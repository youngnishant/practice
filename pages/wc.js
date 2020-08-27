export default function wc(){

    return(<>
    <nav className="bg-white  shadow-b shadow-md flex items-center justify-between sm:px-8 sm:py-2 px-4 py-1">
        <div className="sm:text-4xl text-3xl  tracking-tight">
        <span className="text-pink-400  font-bold">What's</span>  <span className="text-gray-800  font-bold">Cookin;</span>
        </div>
        <div className="md:flex hidden">
            <div className="text-pink-400 text-sm font-bold text-center "><span>Start a new Group</span><br/><span>50% off</span></div>
            <div className="border-r mx-4 border-gray-400"></div>
            <div className="flex items-center">
                <ul className="flex items-center text-center space-x-4 text-gray-800 text-sm font-light">
                    <li>Explore</li>
                    <li>Messages</li>
                    <li>Notifications</li>
                    <li><div className="h-7 w-7 rounded-full bg-pink-200 text-gray-800 font-semibold text-xs text-center p-2">NS</div></li>

                </ul>
            </div>

        </div>
    </nav>
        <header className="px-32 py-4 flex justify-between items-end">
        <div>
            <div>
        <p className="text-sm text-gray-600">Saturday, May 16, 2020</p>
        <h1 className="text-3xl font-black">What's Cookin' banglore</h1>
            </div>
        
        <div className="flex space-x-4 mt-3">
        <div className="h-7 w-7 rounded-full bg-pink-200 text-gray-800 font-semibold text-xs text-center p-4">NS</div>
        <div>
        <p>Hosted by</p>
        <h6 className="font-medium">Nishant Sharma</h6>
        </div>
        

        </div>
        </div>
        <div>
            <button className="px-3 py-1 text-sm bg-white border-pink-500 hover:bg-pink-500 hover:text-white font-bold border-2 text-pink-500 rounded-lg">Share</button>
        </div>
         </header>
         {/* <div className="sticky top-0 scrolling-auto h-5">
        <p className="text-sm text-gray-600">Saturday, May 16, 2020</p>
        <h1 className="text-3xl font-black">What's Cookin' banglore</h1>
            </div> */}
    <main className="bg-pink-200 text-gray-900 px-32 flex space-x-32 pt-10 pb-16">
        <div className="w-8/12">
          <section className="mb-10">
          <h4 className="font-medium  text-xl mb-5">
           Details
            </h4> 
            <p className="mb-3">
            This is a online meetup which you can join with zoom/youtube Live </p>{'  '}
          <p>  If your like to present in this meetup  
            propose a talk. 
            Fill this Google Form-<br/>
            <a className="text-pink-500"href="#">
            https://google.com

            </a>
            </p>
           
          </section>
          <section className=" mb-5">
              <div className="flex justify-between">
              <h4 className="text-xl font-bold">Attendees (69)</h4>
            <button className="text-pink-500">See all</button>
              </div>
           
        <ul className="grid grid-cols-4 gap-4 mt-8 ">
            <li className="bg-white flex flex-col items-center rounded-lg py-4 hover:shadow-md shadow-sm">
                <div className="h-16 w-16 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
                <h6 className="font-bold text-sm mt-3">Nishant S</h6>
                <p className="text-xs text-gray-600">Member</p>
                <p className="text-xs text-gray-600">8 shared groups</p>

                </li>
            <li className="bg-white flex flex-col items-center rounded-lg hover:shadow-md py-4 shadow-sm">
                <div className="h-16 w-16 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
                <h6 className="font-bold text-sm mt-3">Nishant S</h6>
                <p className="text-xs text-gray-600">Member</p>
                <p className="text-xs text-gray-600">8 shared groups</p>

                </li>
            <li className="bg-white flex flex-col items-center rounded-lg py-4 hover:shadow-md shadow-sm">
                <div className="h-16 w-16 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
                <h6 className="font-bold text-sm mt-3">Nishant S</h6>
                <p className="text-xs text-gray-600">Member</p>
                <p className="text-xs text-gray-600">8 shared groups</p>

                </li>
                <li className="bg-white flex flex-col items-center rounded-lg py-4 hover:shadow-md shadow-sm">
                <div className="h-16 w-16 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
                <h6 className="font-bold text-sm mt-3">Nishant S</h6>
                <p className="text-xs text-gray-600">Member</p>
                <p className="text-xs text-gray-600">8 shared groups</p>

                </li>
                <li className="bg-white flex flex-col items-center rounded-lg py-4 hover:shadow-md shadow-sm">
                <div className="h-16 w-16 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
                <h6 className="font-bold text-sm mt-3">Nishant S</h6>
                <p className="text-xs text-gray-600">Member</p>
                <p className="text-xs text-gray-600">8 shared groups</p>

                </li>
            <li className="bg-white flex flex-col items-center rounded-lg py-4 hover:shadow-md shadow-sm">
                <div className="h-16 w-16 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
                <h6 className="font-bold text-sm mt-3">Nishant S</h6>
                <p className="text-xs text-gray-600">Member</p>
                <p className="text-xs text-gray-600">8 shared groups</p>
                </li>
            <li className="bg-white flex flex-col items-center rounded-lg py-4 hover:shadow-md shadow-sm">
                <div className="h-16 w-16 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
                <h6 className="font-bold text-sm mt-3">Nishant S</h6>
                <p className="text-xs text-gray-600">Member</p>
                <p className="text-xs text-gray-600">8 shared groups</p>
                </li>
            <li className="bg-white flex flex-col items-center rounded-lg py-4 hover:shadow-md shadow-sm">
                <div className="h-16 w-16 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
                <h6 className="font-bold text-sm mt-3">Nishant S</h6>
                <p className="text-xs text-gray-600">Member</p>
                <p className="text-xs text-gray-600">8 shared groups</p>
                </li>

        </ul>
          </section>
          <section className="">
              <h4 className="text-xl font-bold mb-5">Comments</h4>
            <div className="flex space-x-4">
            <div className="h-12 w-12 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
            <div className="flex-1 bg-white shadow-sm px-4 py-3 rounded-md">
                <h6>Nishant Sharma</h6>
                <p>To control the background color of an element at a specific breakpoint, add a  prefix to any existing background color utility. </p>
            </div>
            </div>
          </section>
        </div>
        <aside className="4/12 sticky h-64" style={{top:"20px"}}>
        <div className="  shadow-sm bg-white flex px-4 py-4 space-x-4 items-center mb-6 rounded-md hover:shadow-md">
        <div className="h-12 w-12 rounded-full bg-blue-500 text-gray-800 font-semibold text-xs text-center p-2"></div>
        <div className="flex-1 ">
        <h6 className="font-medium text-sm">What's Cookin' Banglore</h6>
        <p className=" text-xs text-gray-600">Public Group</p>
        </div>
        </div>
        <div className=" shadow-sm rounded-lg">
        <div className="bg-white  px-4 py-4  ">
            <div className="flex space-x-4">
        <span>O</span>
        <div className="flex-1 h-12 text-sm">Something</div>
            </div>

        </div>
        <div className="bg-white  px-4 py-4 ">
            <div className="flex space-x-4">
        <span>O</span>
        <div className="flex-1 h-12 text-sm">Something</div>
            </div>

        </div>
        </div>
       
        </aside>
    </main>
<div className="flex justify-between bg-white px-32 py-5 sticky bottom-0 border-t-2  border-gray-200  "> 
<div>
    <p>Sat, May 16 2:00PM</p>
    <p className="font-bold text-xl"> What's Cookin' banglore</p>
</div>
<div className="flex space-x-8 item-center">
    <p className="flex items-center font-bold mr-12">FREE</p>
    <button className="border-pink-500 border-2 text-pink-500 px-8 py-4 rounded-lg font-bold bg-white hover:bg-pink-500 hover:text-gray-100 focus:outline-none ">Attend Online</button>
    </div>
    </div>
    <footer className="px-32 bg-gray-700  " style={{height:"60vh"}}>
        
    </footer>
    </>)
}
