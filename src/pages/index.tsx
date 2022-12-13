import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";

import initializeFirebaseClient from "@/root/lib/initFirebase";

const Home: NextPage = () => {
  const {auth, db} = initializeFirebaseClient()

  return (
    <section className='w-1/2 text-center m-auto py-10'>
      <h1 className='text-white font-bold text-7xl'>Hello</h1>
      <div className='mt-10'>

        <ConnectWallet colorMode='dark'/>
      </div>
    </section>
  )
}

export default Home;
