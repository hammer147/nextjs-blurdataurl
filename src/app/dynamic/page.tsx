import Image from 'next/image'
import getBase64 from '@/lib/getLocalBase64'

export default async function DynamicPage() {
  const myBlurDataUrl = await getBase64('http://localhost:3000/flowers.jpg')

  return (
    <main className='min-h-screen grid place-content-center'>
      <div className='w-[400px] rounded-2xl overflow-hidden'>
        <Image
          src='/flowers.jpg'
          alt='Flowers'
          width={640}
          height={525}
          sizes='400px'
          placeholder='blur'
          blurDataURL={myBlurDataUrl}
          priority
        />
      </div>
    </main>
  )
}
