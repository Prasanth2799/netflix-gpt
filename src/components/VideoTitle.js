const VideoTitle = ({title,overview}) => {
    return(
        <div className="w-screen aspect-video absolute pt-[20%] px-24  text-white bg-gradient-to-r from-black">
        <h1 className="font-bold text-6xl">{title}</h1>
        <p className="py-6 w-1/4 text-lg">{overview}</p>
        <div>
            <button className=" bg-white text-black p-4 px-12 text-lg rounded-md mx-2 hover:bg-opacity-80">Play</button>
        
            <button className=" bg-gray-500 text-white p-4 px-12 bg-opacity-50 rounded-lg">More Info</button>
        </div>
        </div>
    )
}
export default VideoTitle;