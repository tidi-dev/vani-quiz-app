import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col px-24 py-12 justify-center items-center'>
      <Image className='!relative max-w-fit' src='/images/vani-icon.png' alt='Your Image' layout='fill' />

      <Link className=' mt-2 btn !text-white bg-vani' href='/auth'>
        Start Quiz
      </Link>
    </main>
  );
}
