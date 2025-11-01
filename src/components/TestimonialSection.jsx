import { features, testimonials } from '../constants'
import { user1, user2 ,user3, user4, user5, user6 } from '../assets/profile-pictures'

const TestimonialSection = () => {
  return (
     <div className='container mx-auto px-20 relative mt-25 pb-15 lg:mt-50 lg:pb-25 border-b border-neutral-700 min-h-[800px]'>
          {/* Testimonials heading */}
          <div className='text-center pb-10'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide pt-5'>
              What People are saying
            </h2>
          </div>
    
          {/* Testimonials cards */}
          <div className='flex flex-wrap mt-10 lg:mt-30 justify-center'>
            {testimonials.map((review, idx)=>(
              <div key={idx} className='w-full md:w-1/2 lg:w-1/3 mb-8'>
                <div className='flex bg-neutral-800 mx-3 h-full p-4 rounded-md flex-col gap-8'> 
                  <div>
                    <p className='text-neutral-300'>{review.text}</p>
                  </div>
                  <div className='mt-auto flex gap-5'>
                    <div><img src={review.image} className='w-10 h-10 rounded-full border border-blue-500' /></div>
                    <div>
                      <h5>{review.user}</h5>
                      <p className='text-sm text-neutral-500'>{review.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default TestimonialSection
