import { CheckCircle2 } from 'lucide-react';
import { pricingOptions } from '../constants'
import { Circle } from 'lucide-react';

const PricingSection = () => {
  return (
    <div className='container mx-auto relative mt-25 pb-25 lg:mt-50 lg:pb-50 border-b border-neutral-700'>
      <div>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl xl:text:7xl text-center'>Pricing</h1>
        <div className='flex mt-16 flex-wrap'>
            {pricingOptions.map((e, idx)=>(
              <div key={idx} className='w-full sm:w-1/2 lg:w-1/3 mt-10'>
                <div className='border rounded-md border-neutral-700 py-8 px-8 flex flex-col gap-5 mx-2'>
                  <h2 className='text-2xl'>{e.title} {e.title === 'Pro' ? <span className='text-sm bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text'>(Most Popular)</span> : ''} </h2>
                  <p className='text-3xl'>{e.price}<span className='text-sm text-neutral-500'>/Month</span></p>
                  <div className='flex flex-col gap-3'>
                    {e.features.map((feature, key)=>(
                      <div key={key} className='flex text-sm items-center text-neutral-100 gap-2'>
                        <CheckCircle2/>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className='text-center mt-10'>
                    <a href='#' className='border border-neutral-700 rounded-md w-full block py-1 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900 cursor-pointer transition duration-300 active:scale-95'>Subscribe</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PricingSection
