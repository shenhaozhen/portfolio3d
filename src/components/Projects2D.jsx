const Projects2D = () => {
  return (
    <div className="w-[85%] h-[90%] bg-[rgba(255,255,255,0.8)] flex flex-row justify-start items-center ">
        <div className="project w-[30%] h-[90%] flex flex-col justify-start items-center px-[1vw]">
                <h1 className="font-bold text-[3rem] text-black"> Nextjs Shop </h1>
                <p className="mt-[3vh] mb-[2vh]">An ecommerce website built with Nextjs and Supabase</p>
                <button className="w-[15vw] h-[5vh] bg-violet-400 rounded-[10px]">
                <a href="https://shenhz-next-shop.netlify.app" className="hover:underline hover:text-white" target="_blank"> Learn More </a>
                </button>
        </div>
    </div>
  )
}

export default Projects2D