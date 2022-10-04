import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlineMail,
} from 'react-icons/ai'

import Image from 'next/image'
import Foto from '../public/Foto.png'
import code from '../public/code.png'
import design from '../public/design.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portfolio - Mario Arita</title>
        <meta name="description" content="My first portfolio in react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 px-10 dark:bg-neutral-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-fira">Developed by:</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="font-fira text-center p-10">
            <h2 className="text-4xl text-cyan-600 font-semibold py-1">
              Mario Arita
            </h2>
            <h3 className="text-2xl text-pink-700 font-medium py-1">
              Developer and Desingner.
            </h3>
            <p className="text-lg text-gray-900 dark:text-amber-300 font-medium	py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              similique debitis nam quisquam, quibusdam voluptatem consequuntur?
              Dolore enim aliquam a officiis officia ullam nulla ex error
              dolorum incidunt, quam commodi.
            </p>
          </div>

          <div className="flex justify-center gap-16 text-gray-900 dark:text-lime-500 text-4xl cursor-pointer	">
            <AiOutlineWhatsApp />
            <AiFillLinkedin />
            <AiOutlineMail />
          </div>

          <div className="mx-auto bg-gradient-to-b from-sky-300 to-sky-100 rounded-full w-72 h-72 relative overflow-hidden mt-10 md:h-80 md:w-80">
            <Image src={Foto} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="font-fira text-center p-10">
            <h3 className="text-2xl text-pink-700 font-medium py-1">
              Services i offer
            </h3>
            <p className="text-lg text-gray-900 dark:text-amber-300 font-medium	py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quam itaque quae eligendi aliquid laboriosam sequi unde animi est
              hic, harum velit eos eveniet! Ex officiis quam accusantium
              consequuntur autem.
            </p>
            <p className="text-lg font-medium py-2 leading-8 text-gray-900 dark:text-amber-300">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-cyan-600"> agencies </span>
              consulted for <span className="text-cyan-600">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-lg font-medium py-2 leading-8 text-gray-900 dark:text-amber-300">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Designer
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
