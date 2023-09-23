import Image from 'next/image'
import flowersPic from '../flowers.jpg'

export default async function StaticPage() {
  return (
    <main className='min-h-screen grid place-content-center'>
      <div className='w-[400px] rounded-2xl overflow-hidden'>
        <Image
          src={flowersPic}
          alt='Flowers'
          width={640}
          height={425}
          sizes='400px'
          placeholder='blur'
          priority
        />
      </div>
    </main>
  )
}
