import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className='container mx-auto pt-20 px-20'>
      <div className='flex flex-col items-center mt-6 lg:mt-20'>

        {/* heading */}
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
          VirtualR build tools
          <span className='bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text'>{" "}for developers</span>
        </h1>
        {/* paragraph */}
        <p className='text-center mt-10 text-lg text-neutral-500 max-w-4xl'>
          Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
        </p>

        {/* buttons */}
        <div className='flex justify-center my-10 gap-5 flex-col sm:flex-row'>
          <a href="#" className='bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 rounded-md flex justify-center items-center whitespace-nowrap'>
            Start for free
          </a>
          <a href='#' className='py-3 px-4 rounded-md border flex justify-center items-center'>
            Documentation
          </a>
        </div>

        {/* videos */}
        <div className='flex mt-10 justify-center'>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4'>
            <source src={video1} type='video/mp4' />
            Your browser does not suppert video tag
          </video>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4'>
            <source src={video2} type='video/mp4'/>
            Your browser does not support video tag
          </video>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
