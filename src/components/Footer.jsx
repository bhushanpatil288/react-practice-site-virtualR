import { resourcesLinks, platformLinks, communityLinks } from '../constants'

const Footer = () => {
  return (
    <div className='container mx-auto px-20 mt-15 pb-15'>
      <div className='flex flex-wrap'>
        <div className='w-full sm:w-1/2 md:w-1/3 pb-10'>
         <h2 className='font-semibold'>Resources</h2>
         <ul>
          {resourcesLinks.map((link, idx)=>(
            <li><a href={link.href} className='text-sm text-neutral-300'>{link.text}</a></li>
          ))}
         </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 pb-10'>
         <h2 className='font-semibold'>Platform</h2>
         <ul>
          {platformLinks.map((link, idx)=>(
            <li><a href={link.href} className='text-sm text-neutral-300'>{link.text}</a></li>
          ))}
         </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 pb-10'>
         <h2 className='font-semibold'>Community</h2>
         <ul>
          {communityLinks.map((link, idx)=>(
            <li><a href={link.href} className='text-sm text-neutral-300'>{link.text}</a></li>
          ))}
         </ul>
        </div>
      </div>

      <p className='text-end'>- Made by Bhushan</p>
    </div>
  )
}

export default Footer
