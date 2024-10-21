    export default function Home(){
      return(  
      <div>
      <header>
        <nav className="flex w-full bg-gray-500 h-20 items-center ">
       
        <div className="w-56 bg-orange-400 h-14"></div>
        
        <div className="flex gap-10 w-full justify-end">
        <div className="w-40 bg-lime-600 h-14"></div>
        <div className="w-40 bg-teal-400 h-14"></div>
        <div className="w-40 bg-violet-600 h-14" ></div> </div>
        </nav>
      </header>

        <div className="flex w-full bg-gray-200 h-12 items-center justify-center font-bold text-3xl ">
      <h1>&quot; WELCOME " </h1>
      </div>
       
        <div className="flex bg-slate-400 w-full h-screen justify-between place-items-center gap-10">
            <div className="w-96 bg-pink-600 h-96"></div>
            <div className="w-96 bg-yellow-500 h-96"></div>
            <div className="w-96 bg-red-900 h-96"></div>
        </div>
           
        <div className="flex bg-slate-400 w-full h-full justify-center gap-10">
            <div  className="w-96 bg-lime-400 h-96"></div>
            <div  className="w-96 bg-slate-600 h-96"></div>
        </div>
      </div>
        );
      }
  