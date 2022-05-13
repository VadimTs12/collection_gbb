import MainComponent from "../src/components/MainComponent";
import Image from "next/image";
import React, {useState} from "react";
import styles from '/src/styles/Home.module.scss'

export default function Home() {
    const headerStyle = ['bg-transparent']
    const [lang, setLang] = useState({})

  return (
      <div className={'wrapper_home relative'} id={'wrapper_home'}>

          <Image src={'https://raw.githubusercontent.com/VadimTs12/collection_gbb/master/public/image/background-home.png'}
                 alt="Picture of the author"
                 layout='fill'
                 className={'image'}
                 objectFit='cover'
          />
          <div className="absolute w-screen lg:h-screen top-0 bottom-0 bg-white/30 dark:bg-neutral-900/60"></div>
          <MainComponent title={'Home'} textColor={'text-white'} headerStyle={headerStyle} setLang={setLang}>

              <div className={ " lg:px-8 flex flex-col md:flex-row h-screen items-center pt-24   md:px-5 relative"}>
                  <div className=" h-full w-full lg:w-1/2 flex">
                      <div className={styles.logo + "  relative m-auto "}>
                          <Image src={'/../public/image/Logotype-Ghetto-Baby-Boy.png'}
                                 alt="img"
                                 layout='fill'
                                 className={'image'}
                                 objectFit='contain'

                          />
                      </div>
                  </div>
                  <div className="h-full w-full lg:w-1/2 flex items-end relative">
                  <div className={styles.babyImage + "  relative mx-auto  "}>
                      <Image src={'/../public/image/Gif-black-dude.gif'}
                             alt="img"
                             layout='fill'
                             className={'image'}
                             objectFit='contain'
                             priority={true}
                      />
                  </div>
                  </div>
              </div>
          </MainComponent>
      </div>
  )
}