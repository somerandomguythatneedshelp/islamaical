import Image from "next/image";
import Box from './components/Box';
import NamazIMG from './Images/namaz.png';
import QuranIMG from './Images/Quran.png';
import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function Home() {

  const firebaseConfig = {
    apiKey: "AIzaSyC6tlpefW_xsLClEIctgJa9PUrxRsaeIwY",
    authDomain: "islamaical.firebaseapp.com",
    projectId: "islamaical",
    storageBucket: "islamaical.appspot.com",
    messagingSenderId: "896740515607",
    appId: "1:896740515607:web:102dfc2bac074198bb6152",
    measurementId: "G-561C11FN26"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Box
          imageSource={NamazIMG}
          imageAlt="Image description"
          text="Prayer"
          href="/prayer"
        />

        <Link href="/quran">
          <Box
            imageSource={QuranIMG}
            imageAlt="Image description"
            text="Q'uran"
          />
        </Link>
      </div>
    </main>
  );
}
