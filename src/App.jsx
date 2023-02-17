import { useState } from 'react'

//images
import logo from "../src/assets/images/logo.svg"
import roundDownArrowIcon from "../src/assets/images/round-down-arrow.svg"
import rightArrowIcon from "../src/assets/images/right-arrow.svg"
import inboxIcon from "../src/assets/images/inbox.svg"
import personOne from "../src/assets/images/person-1.png"
import personTwo from "../src/assets/images/person-2.png"
import personThree from "../src/assets/images/person-3.png"
import personFour from "../src/assets/images/person-4.png"
import rating from "../src/assets/images/rating.png"
import tools from "../src/assets/images/tools.png"
import contact from "../src/assets/images/contact.png"
import collabration from "../src/assets/images/collabration.png"
import collabrationItem from "../src/assets/images/collabration-item.png"
import nurse from "../src/assets/images/nurse.png"
import logoWhite from "../src/assets/images/logo-white.svg"
import facebook from "../src/assets/images/facebook.svg"
import twitter from "../src/assets/images/twitter.svg"
import receiver from "../src/assets/images/call-receiver.svg"
import instagram from "../src/assets/images/instagram.svg"
import whatsapp from "../src/assets/images/whatsapp.svg"
import mail from "../src/assets/images/mail.svg"
import rightArrowInput from "../src/assets/images/right-arrow-input.svg"


// components
import SortButton from './assets/app/components/SortButton'
import PersonUi from './assets/app/components/PersonUi'


function App() {

  return (
    <div className='overflow-hidden'>

      <nav className='flex justify-around items-center p-4 bg-[rgba(217,217,217,0.5)] '>
        <div className="logoContainer">
          <img className='w-3/4' src={logo} alt="patientgrid logo" />

        </div>
        <ul className='hidden md:flex items-center'>
          <button className=' px-1 md:px-4'>Products</button>
          <button className=' px-1 md:px-4'>Plans</button>
          <button className=' px-1 md:px-4'>More</button>
          <button className='grid place-items-center'><img src={roundDownArrowIcon} alt="round down arrow" /></button>
        </ul>
        <div className="buttons flex">
          <button className='px-4'>Login</button>
          <button className='py-2 px-4 text-white bg-[rgba(42,8,150,1)] rounded-3xl '> <span className='hidden md:inline'>Request a</span>  demo</button>
        </div>

      </nav>

      <header>

        <h1 className="text-4xl md:text-6xl w-11/12 md:w-9/12 text-center m-auto pt-24 pb-4 ">Medical Software To Attract And <span className="font-bold"> Retain Patients</span>  </h1>

        <h2 className=" w-10/12 md:w-6/12 m-auto text-center text-lg md:text-xl px-2 py-4 text-[rgba(40,40,40,0.7)]">Patientgrid’s communication platform helps improve patient experience while staff hours.</h2>
      </header>

      <div className='flex m-auto justify-center items-center my-6'>
        <p className=' text-xl  font-medium'>Start For Free</p>
        <button>
          <img className='mx-2 mt-2' src={rightArrowIcon} alt="Start For Free icon" />
        </button>
      </div>
      <div className="relative ">
        <div className="inbox-ui flex rounded-3xl shadow-[0_0px_30px_rgba(0,0,0,0.1)]  bg-white  p-8 w-10/12 m-auto overflow-auto ">

          <div className="linearBackground  h-[500px] rotate-[7.43deg] origin-top-left w-[120%] p-10 absolute left-0 right-0 -top-10 -z-10">

          </div>


          <div className="letSidebar 10/12  md:w-3/12 border-r-2 border-brand-gray p-4">

            <div className="logoContainer">
              <img className='w-8/12' src={logo} alt="patientgrid logo" />

            </div>
            <div className="mb-12 mt-8  ">

              <p className="my-4">Amanda Charles</p>

              <div className="bg-brand-light-gray h-4 rounded-lg"></div>
            </div>

            <div className="pr-8  ">
              <div className="flex my-8">
                <img src={inboxIcon} alt="inbox icon" className='block' />
                <p className="pl-4 text-brand-skyblue">Inbox</p>
              </div>

              <div className="bg-brand-light-gray h-4 rounded-lg my-8"></div>
              <div className="bg-brand-light-gray h-4 rounded-lg my-8"></div>
              <div className="bg-brand-light-gray h-4 rounded-lg my-8"></div>
              <div className="bg-brand-light-gray h-4 rounded-lg my-8"></div>   <div className="bg-brand-light-gray h-4 rounded-lg my-8"></div>
            </div>


          </div>
          <div className="main w-9/12 px-8 py-4" >
            <div className="flex w-full pb-6  border-b-2 border-brand-gray">
              <img src={inboxIcon} alt="inbox icon" className='block w-6' />
              <p className="pl-4 text-brand-skyblue text-xl">Inbox</p>
            </div>

            <div className="sorting flex my-2 items-center text-sm">
              <p className="min-w-[60px]">Order : </p>

              <SortButton text="Newest" />
              <SortButton text="Oldest" variant="blue" />
              <p className="min-w-[80px] pl-6">Filter : </p>

              <SortButton text="All" />
              <SortButton text="Calls" variant="blue" />

              <SortButton text="SMS" variant="blue" />
              <SortButton text="Voicemails" variant="blue" />
            </div>


            <div className="tab flex   font-medium my-8 min-w-[600px]  shadow-xl rounded-lg p-2">
              <p className='w-8/12 pl-16'>Name</p>
              <p className='w-4/12'>Last Contact</p>
            </div>


            <PersonUi imgSrc={personOne} contractNumber="(305) 440-0858" callCount={1} lastCalled={"20 Hours ago"} />



            <PersonUi imgSrc={personTwo} contractNumber="(304) 450-0258" callCount={7} lastCalled={"10 Hours ago"} />



            <PersonUi imgSrc={personThree} contractNumber="(325) 240-0998" callCount={2} lastCalled={"01 Hours ago"} />


            <PersonUi imgSrc={personFour} contractNumber="(225) 440-0458" callCount={3} lastCalled={"10 Hours ago"} />

          </div>
        </div>
      </div>


      <section className='cards'>

        <div className="card flex flex-col md:flex-row   md:mx-40 my-32 items-center">
          <div className="md:w-6/12">
            <img src={rating} alt="5 star rating" className='shadow-[0px_0px_20px_rgba(157,134,209,0.5)] rounded-3xl  w-10/12' />
          </div>
          <div className="cardText md:w-6/12 p-6 m-6">
            <h2 className='font-medium	text-3xl'>Bring new business in by getting more online reviews.</h2>
            <p className="text-brand-black-70p text-xl my-3">94% Use review to choose new doctor.</p>
          </div>
        </div>

        <div className="card flex flex-col md:flex-row md:mx-40 my-32 items-center">

          <div className="cardText md:w-6/12 p-6 m-6">
            <h2 className='font-medium	text-3xl'>Save time with collaborative tools and automations.</h2>
            <p className="text-brand-black-70p text-xl  my-3">15+ Staff hours saved per week.</p>
          </div>

          <div className="md:w-6/12">
            <img src={tools} alt="5 star rating" className='shadow-[0px_0px_20px_rgba(157,134,209,0.5)] rounded-3xl w-10/12' />
          </div>
        </div>

        <div className="card flex flex-col md:flex-row md:mx-40 my-32 items-center">
          <div className="md:w-6/12">
            <img src={contact} alt="5 star rating" className='shadow-[0px_0px_20px_rgba(157,134,209,0.5)] rounded-3xl  w-10/12' />
          </div>
          <div className="cardText md:w-6/12 p-6 m-6">
            <h2 className='font-medium	text-3xl'>Improve patient experience engaging the way they want.</h2>
            <p className="text-brand-black-70p text-xl my-3">90% People prefer texts to phone calls.</p>
          </div>
        </div>



      </section>






      <section className="collabration bg-brand-light-blue my-4 p-8 w-10/12 m-auto flex flex-col md:flex-row items-center rounded-3xl">

        <div className="textContainer md:w-5/12">
          <h2 className="text-3xl font-medium">Seamless collaboration for healthcare teams</h2>
          <p className="text-brand-black-70p py-4 pr-8">With shared inboxes, any team member can resolve the team’s pending tasks. Individual staff member don’t get overwhelmed and patients are always take care of.</p>
        </div>
        <div className="imgContainer relative">
          <div className="m-4">
            <img src={collabration} alt="collabration" />
            <img src={collabrationItem} alt="collabration item" className='absolute  top-[50%] left-0 translate-y-[-50%] scale-[1.1]' />

          </div>
        </div>

      </section>




      <section className="trail bg-[rgba(217,222,239,1)] my-16 px-8 w-10/12 m-auto rounded-3xl flex flex-col md:flex-row items-center relative overflow-hidden">


        <img src={nurse} alt="nurse" className='md:w-4/12' />
        <div className="md:w-7/12 text-center">
          <h2 className="text-3xl font-medium">We work on a month-to-month basis, try for free with no commitments</h2>
          <p className="text-brand-black-70p  px-12 py-6">Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt  et dolore magna aliqua.</p>
          <SortButton text="14 Free Trial" variant="blue" className="m-auto rounded-3xl px-6 py-2 text-white mb-8 md:mb-2" />
        </div>



        <div className="circle bg-brand-linear-color-2 h-56 w-56 p-0 rounded-full absolute -left-32 -top-20"></div>
        <div className="circle bg-brand-linear-color-2 h-56 w-56 p-0 rounded-full absolute -right-32 -bottom-20"></div>

      </section>


      <footer className="bg-brand-linear-color-2 flex flex-col md:flex-row items-center justify-between  mt-16 px-24 pt-12 pb-6">

        <div className="column-1 w-3/12 p-1">
          <img src={logoWhite} alt="logo white" className='w-10/12' />
          <p className="text-white my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <div className="social-icons flex">
            <img src={facebook} alt="facebook" className="mr-2" />
            <img src={twitter} alt="twitter" className=" m-2" />
            <img src={instagram} alt="instagram" className=" m-2" />
          </div>
        </div>

        <div className="column-2 w-3/12">

          <div className="flex m-2">
            <img src={receiver} alt="receiver" />
            <p className="text-white px-3">+91-8853923455</p>
          </div>
          <div className="flex m-2">
            <img src={whatsapp} alt="whatsapp" />
            <p className="text-white px-3">
              +91-4567895478
            </p>
          </div>
          <div className="flex m-2">
            <img src={mail} alt="mail" />
            <p className="text-white px-3">patientgrid@gmail.com</p>
          </div>
        </div>

        <div className="column-3 w-3/12"><p className="font-medium text-[20px] text-white">Subscribe Newsletter</p>
          <div className="inputContainer  relative left-0">


            <input type="text" placeholder='Email' className='absolute px-4 py-1  rounded-3xl   left-0 top-0 ' />
            <button className='absolute -right-0 -top-[5px] p-1'>
              <img className='w-8/12' src={rightArrowInput} alt="Start For Free icon" />
            </button>
          </div>

        </div>




      </footer>

      <div className="bg-brand-linear-color-2 flex justify-center border-y-2 border-y-white">
        <p className="text-white m-4">Products</p>
        <p className="text-white m-4">Plans</p>
        <p className="text-white  m-4">More</p>
      </div>
      <p className="bg-brand-linear-color-2 text-center text-white  p-4">

        Copyright 2023.All Rights Reserved.

      </p>

    </div>
  )
}






export default App
