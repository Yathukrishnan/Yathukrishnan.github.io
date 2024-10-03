
import React from 'react'
import './App.css'
import { FlipWordsDemo } from './Components/Acternity/flipping/flip-words'
import { BackgroundBeamsWithCollisionDemo } from './Components/Acternity/Beams With Collision/background-beams-with-collision'
import { NavbarDemo } from './Components/Acternity/Navbar/navbar-menu'
import BlurInDemo from './Components/MagicUI/Blur In/BlurIn'
import HandWave from './Components/MagicUI/Handwave/HandWave'
import ParticlesDemo from './Components/MagicUI/Particles/Particles'
import { CoverDemo } from './Components/Acternity/Cover/CoverMain'
import { ExpandableCardDemo } from './Components/Acternity/Expandable Cards/Expandable Cards'
import BlurInDemo1 from './Components/MagicUI/Flip Text/FlipText'
import { TracingBeamDemo } from './Components/Acternity/tracing-beam/TracingBeam'
import BlurInDemo2 from './Components/MagicUI/Blurin2/Blur in'
import { AnimatedCircularProgressBarDemo } from './Components/MagicUI/Circular Progress Bar/Circular Progress Bar'
import { ShootingStarsAndStarsBackgroundDemo } from './Components/Acternity/shooting star/Shooting StarsMain'
import { ShinyButtonDemo } from './Components/MagicUI/Shiny Button/Shiny Button'
import { GlobeDemo } from './Components/MagicUI/Globe/Globe'
import { FloatingDockDemo } from './Components/Acternity/Floating Dock/Floating DockMain'
import ShinyButtonDemo1 from './Components/Acternity/shinebutton2/shinebutton'
import { TextGenerateEffectDemo } from './Components/Acternity/text-generate-effect/text-generate-effect'
import { BackgroundLinesDemo } from './Components/Acternity/background-lines/background-lines'







function App() {


  return (
    <>
      <div className='relative overflow-x-hidden bg-black '>
        <div><NavbarDemo></NavbarDemo></div>

        <div><section id="home"><BackgroundBeamsWithCollisionDemo></BackgroundBeamsWithCollisionDemo></section> </div>
        <div className='relative top-[6rem] '><FlipWordsDemo></FlipWordsDemo></div>
        <div className='relative -top-[35rem] lg:-top-[25rem] md:-top-[40rem]'>
          <div className='relative top-[15rem]  lg:-top-[10rem] '><ParticlesDemo></ParticlesDemo></div>
          <div className='relative -top-[15rem]   lg:-top-[40rem] lg:-left-[6rem] md:-top-[25rem]'><BlurInDemo></BlurInDemo></div>
          <div className='relative -top-[34rem] -right-[10rem] lg:-top-[44rem] lg:left-[15rem] md:-top-[35rem]'>
            <HandWave />
          </div>
          <div className='relative -top-[20rem] md:-top-[30rem] lg:-top-[40rem]'><TextGenerateEffectDemo></TextGenerateEffectDemo></div>
        </div>
        <div className='relative -top-[45rem] lg:-top-[58rem] md:-top-[65rem] '><section id="project"><CoverDemo></CoverDemo></section></div>

        <div className='relative -top-[30rem] lg:-top-[45rem] md:-top-[48rem]'> <ExpandableCardDemo></ExpandableCardDemo></div>
        <div className='relative left-auto -top-[12rem] lg:-top-[31rem]  md:-top-[35rem] md:-left-[15rem]'><section id="service"><BlurInDemo1></BlurInDemo1></section></div>
        <div className='relative lg:-top-[24rem] md:-top-[25rem]'><TracingBeamDemo></TracingBeamDemo></div>
        <div className='relative lg:-top-[17rem]  md:-top-[15rem]'><ShootingStarsAndStarsBackgroundDemo></ShootingStarsAndStarsBackgroundDemo></div>
        <div className='relative -top-[60rem] lg:-top-[57rem] md:top-[0rem]'><div className='relative lg:-top-[25rem] lg:-left-[28rem] md:-top-[85rem] md:-left-[15rem]'> <section id="skill"><BlurInDemo2></BlurInDemo2></section></div>
          <div className='relative top-[10rem] lg:left-[3rem] lg:-top-[18rem] md:-top-[75rem]'><AnimatedCircularProgressBarDemo></AnimatedCircularProgressBarDemo></div>
          <div className='relative top-[25rem] lg:-top-[20rem] md:-top-[75rem] md:-mb-[35rem] '><section id="contact"><BackgroundLinesDemo></BackgroundLinesDemo></section></div></div>
        <div className='relative -top-[20rem] left-[5rem] lg:-top-[58rem] lg:left-[60rem] md:-top-[49.5rem] md:-right-[0rem]'><ShinyButtonDemo></ShinyButtonDemo></div>
        <div className='relative -top-[22.5rem] left-[18rem] lg:-top-[60.3rem] lg:left-[73rem] md:-top-[51.9rem] md:-right-[30rem]'><ShinyButtonDemo1></ShinyButtonDemo1></div>
        <div className='relative -top-[8rem] lg:-top-[45rem] lg:left-[43rem] lg:-bottom-[50rem] md:-top-[40rem] md:-right-[12rem]'><GlobeDemo></GlobeDemo></div>
        <div className=' relative top-10 lg:-top-[15rem] md:-top-[45rem]  lg:-mb-[65rem] lg:-mt-[35rem] md:-mb-[50rem]'><FloatingDockDemo></FloatingDockDemo></div>


      </div>
    </>
  )
}


export default App
