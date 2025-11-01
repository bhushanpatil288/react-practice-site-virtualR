import { features } from '../constants'

const FeatureSection = () => {
  return (
    <div className='container mx-auto relative mt-25 border-b min-h-[800px]'>
      {/* features heading */}
      <div className='text-center'>
        <span className='bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
          Feature
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
          Easily build 
          <span className='bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text'>
            {" "} your code
          </span>
        </h2>
      </div>

      {/* feature cards */}
      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, idx)=>(
          <div key='idx' className='w-full sm:w-1/2 lg:w-1/3'>
            <div className='flex'> 
              <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-800 text-blue-700 justify-center items-center rounded-full'>
                {feature.icon}
              </div>
              <div>
                <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                <p className='text-md mb-20 text-neutral-500'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureSection
