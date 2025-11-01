import { CheckCircle2 } from 'lucide-react';
import { checklistItems } from '../constants';
import code from '../assets/code.jpg'

const WorkflowSection = () => {
  return (
    <div className='container mx-auto relative mt-25 pb-25 lg:mt-50 lg:pb-50 border-b border-neutral-700'>
        {/* Workflow heading */}
        <div className='text-center'>
          <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
            Accelerate your
            <span className='bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text'>
              {" "} Coding workflow
            </span>
          </h2>
        </div>

        <div className='flex flex-wrap mt-10'>
          <div className='w-full lg:w-1/2'>
            <img src={code} alt='code' />
          </div>
          <div className='w-full lg:w-1/2 flex flex-col flex-wrap justify-center items-center py-5'>
            {checklistItems.map((item, idx)=>(
              <div key={idx} className='flex p-2 h-1/4 justify-center'>
                <div className='text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full'>
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className='text-xl mb-3'>{item.title}</h5>
                  <p className='text-lg text-neutral-500 mb-5 lg:mb-0'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
  )
}

export default WorkflowSection
