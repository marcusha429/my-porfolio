'use client'

import IntroCircle from '@/components/IntroCircle';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter()

  const clickOnCircle = () => {
    router.push('/porfolio')
  }
  return <IntroCircle name="Welcome to Marcus's Space" onClick={clickOnCircle} />;
}