import type { UseService } from "./service"
import type {NextPage} from "../../../types/nextjs";

import { useRouter } from "next/router"
import {ChangeEvent, useEffect, useState} from "react";
import styles from '../../../../styles/Home.module.css'
import c from "clsx";
import s from "./style.module.scss";
import logo from "../../../../public/favicon.ico"
import FormBlock from "../../molecules/FormBlock";
import Button from "../../atom/Button";
import ButtonOutline from "../../atom/ButtonOutline";
import Label from "../../atom/Label";
import Table from "../../molecules/Table";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { RequestOrder } from "../../../stores/order/model";
import { toast } from "react-toastify";
import DateUtils from "../../../utils/date";
import FeatherIcon from "feather-icons-react";
type Props = {
  className?: string
}

export const view = (useService: UseService) => {
  const Ecosystem: NextPage = () => {
    
   

    return <main className={c(styles.main)}>
      <main
        className={c(styles.main,"bg-backgr4 bg-no-repeat bg-cover bg-center")}
      >
      <div className="responsive">
        <div className="container">
          <div className="sm:ml-20 mt-20 flex-col xl:flex-row flex justify-between">
            <div className="mx-auto text-center xl:text-left xl:mx-0 mb-20 xl:mb-0">
                <h1 className="font-bold text-gray-700 text-3xl md:text-6xl leading-tight mb-10">Token FIE</h1>

                <p className="font-normal text-gray-500 text-sm md:text-lg mb-10">
                Token FIE (full name: FinEdu) was created to apply and to solve challenges 
                and open up great potential in three key areas of society: communication, 
                finance-economics and education on blockchain platform
                </p>
                <div className="flex items-center justify-center lg:justify-start">
                    <a href="#" className="px-8 py-3 bg-green-500 font-medium text-white text-md md:text-lg rounded-md hover:bg-green-700 transition ease-in-out duration-300 mr-14">Our story</a>

                </div>
            </div>
    
          </div>

{/* FIE's goals */}
          <div className="mt-10 sm:ml-20">
               <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl mb-10">
                 FIE's goals:
               </h1>
              {/* The media: */}
              <div className="mt-0">              
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl mb-5">
                  The media:
                  </span>
              </div>
              <div className="grid gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Build a decentralized media platform where users can freely share information, 
                      ideas and create quality content.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Remove the control of traditional media corporations, empower users and ensure 
                      transparency in information transmission.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Reward users with FIE tokens when they create valuable content that attracts a lot of interest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*		Finance and economics: */}
            <div className="mt-5 sm:ml-20">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl mb-5">
              Finance and economics:
              </span>
              <div>
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Creating a decentralized finance (DeFi) ecosystem based on the Solana blockchain, 
                      helping users easily access financial services without the need for intermediaries.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                    
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Providing innovative financial solutions such as lending, borrowing, 
                      investing and payments with low costs and fast transaction speeds.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Helps users control personal finances more effectively and safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*		Education: */}
            <div className="mt-5 sm:ml-20">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
              Education:
              </span>
              <div>
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Develop a decentralized online education platform where users can take high-quality 
                      courses from leading experts in every field.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Providing diverse learning programs, suitable for everyone's needs and levels.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Using blockchain technology to issue degrees and certificates to learners, 
                       ensuring authenticity and transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*		Benefit: */}
            <div className="mt-5 sm:ml-20">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
              Benefit:
              </span>
              <div>
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Transparency: All activities on the FIE platform are recorded and stored 
                      on the blockchain, ensuring transparency and traceability.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Trust: Eliminates third-party intervention, helping users trust the services and information provided.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Efficiency: Reduce transaction costs, increase processing speed and save users time.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Easy to access: Everyone can participate in the FIE ecosystem, regardless of geographical location or social class.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

{/* Applications of FIE: */}
          <div className="mt-20 sm:ml-20">
            <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl mb-10">
            Applications of FIE:
            </h1>
              {/* The media: */}            
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl mb-5">
              The media:
              </span>
              <div className="grid gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Journalists use FIE to receive payment for their articles.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Content creators earn FIE from views and interactions on their social media channels.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *FIE users can vote for articles or content they believe in, helping to improve information quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*		Finance and economics: */}
            <div className="mt-5 sm:ml-20">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl mb-5">
              Finance and economics:
              </span>
              <div>
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Users can borrow money from each other through smart contracts on the DeFi FIE platform at reasonable interest rates.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                    
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Small businesses can mobilize investment capital from the FIE community to develop their business.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *FIE users can pay for goods and services online quickly and conveniently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*		Education: */}
            <div className="mt-5 sm:ml-20">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
              Education:
              </span>
              <div>
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Teachers and trainers use FIE to receive payments for their online courses.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *Students can study for free or at low cost through FIE scholarship programs.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      *FIE users can participate in online workshops and training courses to improve their knowledge and skills.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      FIE is not just a token, but also a global community. It connects people who share a passion for 
                      innovation and building a better future for everyone.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      FinEdu is in the early stages of development, but its potential is enormous. It can change the 
                      way we interact with information, manage finances, and learn.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      Become a part of the FIE community and contribute to positive change!
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      And let's follow FIE's journey and look forward to new things in the future!
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-500 text-xl md:text-xl">
                      #FinEdu #FIE #Blockchain #Media #FinanceEconomics #Education #Future
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


{/* white book */}
            <div className="mt-20 sm:ml-20">
              <div className="mt-1">
                <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  White book
                </span>

                {/* 1. Introduction*/}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  1. Introduction
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                  FinEdu (FIE) is a blockchain project built on the Solana platform, with the goal of 
                  creating a comprehensive ecosystem applied to the fields of communication, finance-economics 
                  and education. FIE promotes user participation and interests in this ecosystem.
                  </p>
                </div>

                {/* 2. Problem and Solution */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  2. Problem and Solution
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Media: Control by large media corporations, lack of transparency and restrictions 
                          on freedom of expression.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Finance: Complicated process, high costs, lack of access to modern financial services.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Education: Education costs are high, qualifications lack authenticity and transparency.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                      
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            FinEdu solves the above problems by:
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Media: Build a decentralized media platform, encourage high-quality content creation, and eliminate censorship.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Finance: Create a DeFi ecosystem with transparent, safe, cost-effective and easily accessible financial services.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Education: Developing an online education platform, expanding learning opportunities at reasonable costs, issuing transparent certificates on the blockchain platform.
                          </p>
                        </div>
                      </div>                     
                    </div>
                  </div>
                </div>

                {/* 3. System Architecture */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  3. System Architecture
                  </span>
                  <div className="mt-5">
                    <p className="font-normal text-gray-500 text-sm md:text-lg">
                       The FinEdu ecosystem is built on the Solana blockchain platform, taking advantage of the 
                      advantages of fast transaction speed, high scalability and security. The system includes main components:
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                      
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          FIE Token: Main utility token, used for payment, service access, and participation in governance.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                         
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Decentralized Media: Platform that allows users to create, share and monetize high-quality content.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                  
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          DeFi FinEdu: Provides financial services such as lending, borrowing, investing at low cost and efficiency.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                  
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Online education: Online learning platform with diverse courses, transparent certification on blockchain.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Development roadmap */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  4. Development roadmap
                  </span>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                       
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Phase 1: Building core platform, developing smart contracts, launching FIE token.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                      
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Phase 2: Developing a decentralized media platform, integrating monetization features for content creators.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                    
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Phase 3: Deploy DeFi FinEdu services, lending, borrowing, and investing on the platform.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                     
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Phase 4: Developing an online education platform, cooperating with reputable educational organizations.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                     
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          Phase 5: Expanding the ecosystem, integrating other applications and services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  5. Development team */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  5. Development team
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                  The FinEdu development team includes experienced experts in the fields of blockchain, finance, education and technology.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  {/* <!-- Header --> */}
                  <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                      Our Team
                  </h1>

                  {/* <!-- Description --> */}
                  <p className="text-gray-300 text-lg font-light">
                      
                  </p>

                  {/* <!-- Team Members --> */}
                  <div className="flex flex-row">
                    {/* <!-- Member #1 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="/takahashi01.png">
                                </img>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                  Takahashi
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                  CEO & CO-founder
                                </div>

                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Member #2 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="/Yuki01.png"></img>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Tani Yuki
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                CEO & CO-founder
                                </div>

                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Member #3 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="/taro01.png"></img>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Taro
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    COO & CO-founder
                                </div>

                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>
                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Member #2 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="/Ito01.png"></img>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Ito
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                Marketing & Community
                                </div>

                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Member #2 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="/namakoto01.png"></img>
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Nakamoto
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">

                                IT Solution

                                </div>

                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>

 {/* 6. Token Distribution  */}
            <div className="mt-1 sm:ml-24">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
              6. Token Distribution
              </span>
              <p className="font-normal text-gray-700 text-xl md:text-xl mt-5">
                The total FIE supply will be allocated for the following purposes:
              </p>
              {/* body */}
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        Staking and Mining Rewards: 30%
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                    
                      <p className="font-normal text-gray-700 text-xl md:text-xl">Group: 20%</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-700 text-xl md:text-xl">Fund: 20%</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                
                      <p className="font-normal text-gray-700 text-xl md:text-xl">Ecosystem Funding: 15%</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">
                      <p className="font-normal text-gray-700 text-xl md:text-xl">Private community sale: 15%</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <img
                    src="/Anhsodo.png"
                    alt="Anh"
                    className="bg-no-repeat bg-cover"
                  />
                </div>
              </div>
            </div>

  {/* 7. Conclusion */}
             <div className="mt-20 sm:ml-28">
              <div className="mt-1 text-justify">
                <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                 7. Conclusion
                </span>
              </div>
              <div className="font-normal text-gray-700 text-xl md:text-xl mt-5">
              FinEdu (FIE) offers a comprehensive solution, applying blockchain technology to create a more transparent, 
              efficient and accessible media, financial and education ecosystem. FIE token plays an important role 
              in promoting user participation and rights, towards a better future.
              </div>  
            </div>



        </div>
      </div>
      </main>
    </main>
  }
  return Ecosystem
}
