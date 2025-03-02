const VideoTitle = ({title,overview}) => {
    return(
        <div className="w-screen aspect-video absolute pt-[20%] md:px-24 px-6  text-white bg-gradient-to-r from-black">
        <h1 className="font-bold md:text-6xl text-xl">{title}</h1>
        <p className="py-6 w-1/4 text-lg hidden md:inline-block">{overview}</p>
        <div>
            <button className=" bg-white text-black md:p-4 md:px-12 px-4 md:py-4 py-1 md:my-0 my-1 rounded-md mx-2 hover:bg-opacity-80">Play</button>
        
            <button className=" bg-gray-500 text-white p-4 px-12 bg-opacity-50 rounded-lg hidden md:inline-block">More Info</button>
        </div>
        </div>
    )
}
export default VideoTitle;