'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax'
import { Button } from "@/components/ui/button"
import { Award, Bot, BarChart3, Crown, SquareActivity, WalletMinimal, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-blue-500 rounded-full opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  )
}

const TypographyAnimation = ({ children }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } })
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      style={{ opacity, scale }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const controls = useAnimation()
  const { ref } = useParallax<HTMLDivElement>({ speed: -10 })

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    }))
  }, [controls])

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
        <BackgroundAnimation />

        <nav className="fixed w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <span className="text-xl font-bold">NFT Reward Bot</span>
              <Button variant="outline" className="text-gray-100 bg-gray-700 hover:bg-black/90 hover:text-white/90 transition-colors duration-200 border-gray-500 hover:border-white/80"
              >Get Started</Button>
            </div>
          </div>
        </nav>

        <header className="relative h-screen flex items-center justify-center">
          <Parallax translateY={[-20, 20]} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-50"></div>
          </Parallax>
          <div className="text-center z-10">
            <motion.h1 initial={{ opacity: 0, y: 20 }}  animate={controls}
              className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              {
                "NFT Reward Distribution Bot".split("").map((word, index) => {
                  word = word === " " ? "\u00A0" : word // Non-breaking space
                  word.match
                })
              }
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={controls}
              custom={1}
              className="text-xl mb-8"
            >
              Gamify your Discord community with automated NFT rewards
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              custom={2}
            >
            <Link href="https://discord.com/oauth2/authorize?client_id=1288094717824860181" target='_blank' >
              <Button size="lg" className="hover:scale-125 transform transition-transform duration-200"
              >Add to Discord</Button>
            </Link>
            </motion.div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-32">
            <TypographyAnimation>
              <h2 className="text-4xl font-bold mb-16 text-center">Key Features</h2>
            </TypographyAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: "Customizable Rewards", description: "Set your own criteria for NFT distributions" },
                { icon: Bot, title: "Automated Distribution", description: "Let the bot handle reward allocation" },
                { icon: BarChart3, title: "Transparent Reporting", description: "Get clear insights into reward processes" },
                { icon: ImageIcon, title: "Image Recognition", description: "Use images as reward criteria" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  custom={index + 3}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <feature.icon className="h-12 w-12 mb-4 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <div ref={ref} className="mb-32">
            <Parallax speed={-10}>
              <div className="bg-gradient-to-r from-purple-800 to-blue-800 rounded-lg p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Powered by Gaianet</h2>
                <p className="text-lg mb-6">
                  Leverage the power of decentralized data storage and secure transactions 
                  with Gaianet integration.
                </p>
                <Button variant="secondary">Learn More</Button>
              </div>
            </Parallax>
          </div>

          <section className="mb-32">
            <TypographyAnimation>
              <h2 className="text-4xl font-bold mb-8 text-center">How It Works</h2>
            </TypographyAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Set Criteria", description: "Define your reward rules", image: Crown },
                { step: 2, title: "Bot Monitors", description: "AI tracks community engagement", image: SquareActivity },
                { step: 3, title: "NFTs Distributed", description: "Rewards sent automatically", image: WalletMinimal }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  custom={index + 7}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                >
                  {/* <img src={step.image} alt={step.title} className="w-full h-40 object-cover mb-4 rounded" /> */}
                  <step.image className="h-12 w-12 mb-4 text-blue-500" />
                  <div className="text-5xl font-bold text-blue-500 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-32">
            <TypographyAnimation>
              <h2 className="text-4xl font-bold mb-8 text-center">Showcase</h2>
            </TypographyAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Parallax speed={5}>
                <img src="/placeholder.svg?height=400&width=600" alt="NFT Reward Bot in action" className="w-full h-auto rounded-lg shadow-lg" />
              </Parallax>
              <Parallax speed={-5}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Engage Your Community</h3>
                  <p className="text-gray-400 mb-4">
                    See how the NFT Reward Bot transforms your Discord server into a thriving, 
                    gamified community. Boost engagement, reward participation, and create 
                    a sense of achievement among your members.
                  </p>
                  <Button>Learn More</Button>
                </div>
              </Parallax>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2023 NFT Reward Bot. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}