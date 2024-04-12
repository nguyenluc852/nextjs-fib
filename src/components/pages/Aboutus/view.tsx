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

      <div className="responsive">
        <div className="container">
          <div className="sm:ml-20 mt-20 flex-col xl:flex-row flex justify-between">
            <div className="mx-auto text-center xl:text-left xl:mx-0 mb-20 xl:mb-0">
                <h1 className="font-bold text-gray-700 text-3xl md:text-6xl leading-tight mb-10">Token FIB</h1>

                <p className="font-normal text-gray-500 text-sm md:text-lg mb-10">Token FIB (the full name is Financial Broker) is a token created to address the need for connectivity between customers and professional financial organizations globally. Below are some details about the FIB token, including its value and operation:</p>

                <div className="flex items-center justify-center lg:justify-start">
                    <a href="#" className="px-8 py-3 bg-green-500 font-medium text-white text-md md:text-lg rounded-md hover:bg-green-700 transition ease-in-out duration-300 mr-14">Our story</a>

                </div>
            </div>
           
          </div>
        
          <section className="py-8 md:py-16">

            <div className="container max-w-screen-xl mx-auto px-4">

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <div className="text-center mb-10 xl:mb-0">
                    <div className="flex items-center justify-center">
                        <div className="w-20 py-7 flex justify-center bg-purple-50 text-purple-500 rounded-md mb-5 md:mb-10">
                          <FeatherIcon icon="minimize-2"/>
                        </div>
                    </div>

                    <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Connectivity</h2>

                    <p className="font-normal text-gray-400 text-base md:text-lg">The FIB token provides an easy and secure way to connect customers with professional financial organizations globally. It creates an environment for the exchange of information, services, and assets quickly and conveniently.</p>
                </div>

                <div className="text-center mb-10 md:mb-0">
                    <div className="flex items-center justify-center">
                        <div className="w-20 py-7 flex justify-center bg-red-50 text-red-500 rounded-md mb-5 md:mb-10">
                            <FeatherIcon icon="dollar-sign"/>
                        </div>
                    </div>

                    <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Liquidity</h2>

                    <p className="font-normal text-gray-400 text-sm md:text-lg">The FIB token offers high liquidity, enabling fast and easy transactions on the Binance Smart Chain network. Users can buy, sell, or exchange FIB tokens with other tokens or traditional currencies.</p>
                </div>

                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <div className="w-20 py-7 flex justify-center bg-blue-50 text-blue-500 rounded-md mb-5 md:mb-10">
                            <FeatherIcon icon="users"/>
                        </div>
                    </div>

                    <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Ownership rights and benefits</h2>

                    <p className="font-normal text-gray-400 text-sm md:text-lg">Owning FIB tokens can provide users with special rights and benefits from professional financial organizations, including high-interest rates, discounts, or access to exclusive products and services.</p>
                </div>
              </div>

            </div> 

          </section>
        

          <section className="py-8 md:py-16">

            <div className="container max-w-screen-xl mx-auto px-4">

              <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">Operation of the FIB Token</h1>

              <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
                  <div className="mx-auto xl:mx-10 mb-20 xl:mb-10 my-0.5 w-2/3 h-2/3">
                      <img src="/image-1.jpg" alt="Image"/>
                  </div>

                  <div className="mx-auto ml-10 xl:mx-0 text-center xl:text-left">
                      <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">Issuance</h1>

                      <p className="font-normal text-gray-400 text-base md:text-lg mb-5">The FIB token is initially issued on the Binance Smart Chain network through a predetermined issuance and distribution process. Users can purchase FIB tokens from exchanges or from professional financial organizations participating in the network.</p>

                      <a href="#" className="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300">
                          See more
                          <i data-feather="chevron-right"></i>
                      </a>
                  </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
                  <div className="mx-auto xl:mx-0 text-center xl:text-left mb-20 xl:mb-0">
                      <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">Trading</h1>

                      <p className="font-normal text-gray-400 text-base md:text-lg mb-5">Users can trade FIB tokens on exchanges that support the Binance Smart Chain. They can buy, sell, or exchange FIB tokens with other tokens or traditional currencies. These transactions are carried out safely and transparently on the Binance Smart Chain blockchain network.</p>

                      <a href="#" className="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300">
                          See more
                          <i data-feather="chevron-right"></i>
                      </a>
                  </div>

                  <div className="mx-auto xl:mx-0 w-100 h-100">
                      <img src="/image-2.jpg" alt="Image" />
                  </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-between">
                  <div className="mx-auto xl:mx-10 mb-20 xl:mb-0">
                      <img src="/image-3.jpg" alt="Image"/>
                  </div>

                  <div className="mx-auto xl:mx-0 text-center xl:text-left">
                      <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">Application</h1>

                      <p className="font-normal text-gray-400 text-base md:text-lg mb-5">FIB tokens can be used to access services and products of professional financial organizations within the network. This may include access to financial services, trading, borrowing, or participation in smart contracts.</p>

                      <a href="#" className="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300">
                          See more
                          <i data-feather="chevron-right"></i>
                      </a>
                  </div>
              </div>

            </div> 

          </section>

          <section className="py-8 md:py-16">

            <div className="container max-w-screen-xl mx-auto px-4">

              <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">Summary</h1>
              <p className="font-normal text-gray-400 text-md md:text-lg text-center mb-20">The FIB token on the Binance Smart Chain platform provides a solution for connecting customers and professional financial organizations globally. With high liquidity and ownership rights offering benefits, FIB tokens create a safe, convenient, and transparent environment for connection and transactions on the blockchain network.</p>
            </div>
          </section>



          <div className="flex flex-row">
            <div className="container max-w-7xl px-4">
              {/* <!-- Section Header --> */}
              <div className="flex flex-wrap justify-center text-center mb-24">
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

 {/* Overview  */}
             <div className="mt-20">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                Overview of Financial Broker:
              </span>
              <div className="grid gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        Name: Financial Broker
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        Transaction name: FIB
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        Type: Utility token
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        Platform: BEP20
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                      
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        Contract: 0xef4D5D93B3A49F7ea0cdE55BF52ae788476Bc0c5
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                      
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        Total supply: 1,100,000,000 FIB
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        Introductory price: $0.015/FIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*	FIB Token Allocation: */}
            <div className="mt-5">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                FIB Token Allocation:
              </span>
              <p className="font-normal text-gray-700 text-xl md:text-xl mt-2">
                The total supply is 1,100,000,000 FIB and is distributed as
                follows:
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

            {/*		Affiliate marketing rewards: */}
            <div className="mt-5">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                Affiliate marketing rewards:
              </span>

              {/* body */}
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        - Level 1 affiliate marketing: 8%
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        - Level 2 affiliate marketing: 2%
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px] flex text-center items-center">                     
                      <p className="font-normal text-gray-700 text-xl md:text-xl">
                        - Level 3 affiliate marketing: 2%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


  {/* Vision */}
             <div className="mt-20">
              <div className="mt-1 text-justify">
                <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  Vision
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">           
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - The vision of the FIB token is to build a decentralized
                        and global financial ecosystem, aiming to connect
                        customers with professional financial institutions
                        around the world. FIB Token creates a blockchain and
                        smart contract technology platform to provide a safe,
                        reliable and efficient mechanism for financial
                        transactions.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - This vision aims to create an open financial environment
                        in which customers are not limited by geographical
                        boundaries and access restrictions. The FIB token allows
                        customers globally to access professional financial
                        services from leading financial institutions, regardless
                        of where they live.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">                    
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - The ultimate goal of the FIB token is to create a
                        trusted network of connections between customers and
                        professional financial institutions. Thanks to
                        blockchain technology, information and transactions are
                        protected by integrity and confidentiality. This helps
                        create an environment of trust in which customers can
                        place their trust in financial institutions and enjoy
                        financial services safely and conveniently.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">                 
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - The vision of the FIB token also emphasizes progress and
                        innovation in the financial sector. FIB Token hopes to
                        create new financial solutions, such as digital assets,
                        decentralized trading and other innovative financial
                        products, to meet the increasingly diverse needs of
                        customers and promote development of the financial
                        industry.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 ml-[30px]">
                    <p className="font-normal text-sm md:text-lg text-gray-500">
                      The vision of FIB token is to connect customers with
                      professional financial institutions globally through a
                      decentralized, secure and innovative financial ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="mt-5">
              <div className="mt-1">
                <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                Mission
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">                  
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - The mission of FIB token is to create a platform that
                        connects customers with professional financial
                        institutions globally. FIB Token hopes to address
                        challenges and limitations in accessing financial
                        services, while bringing benefits and opportunities to
                        both customers and financial institutions.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - This mission aims to provide customers with a wider
                        range and easy access to high-quality financial services
                        from professional financial institutions globally. The
                        FIB token creates a decentralized environment in which
                        customers are not limited by geographical boundaries,
                        countries or local financial systems.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">                     
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - FIB Token provides a fair and transparent mechanism for
                        customers to access and use financial services. By
                        leveraging blockchain technology and smart contracts,
                        FIB tokens authenticate and protect customer
                        information, creating a safe and trustworthy environment
                        for financial transactions.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">                   
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - The mission of FIB token is also to create a strong
                        connection network between customers and professional
                        financial institutions. FIB Token creates a global
                        financial community in which customers can interact,
                        share information and cooperate with financial
                        institutions to achieve personal and business financial
                        goals.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 ml-[30px]">
                    <p className="font-normal text-sm md:text-lg text-gray-500">
                      The mission of FIB token is to connect customers with
                      professional financial institutions globally through a
                      decentralized, fair and secure platform. FIB Token hopes
                      to create a global financial environment, enhancing voice
                      and financial access for everyone.
                    </p>
                  </div>
                </div>            
              </div>
            </div>

            {/* Goal */}
            <div className="mt-5">
              <div className="mt-1">
                <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  Goal
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - The goal of the FIB token is to serve as an intermediary
                        fee between customers and global professional financial
                        institutions. FIB tokens can be used as a payment method
                        to access and use financial services on the FIB
                        platform.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - When customers use financial services from partner
                        institutions on the FIB platform, they may be required
                        to pay a fee. FIB token is used as a means of payment in
                        this transaction. By using FIB tokens, customers can
                        exchange value with financial institutions and access
                        high-quality financial services.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">                     
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        - Using FIB tokens as an intermediary fee between
                        customers and global professional financial institutions
                        can bring many benefits. For customers, using FIB tokens
                        can reduce transaction costs and increase convenience
                        and speed in accessing financial services. For financial
                        institutions, the FIB token creates a secure and
                        transparent payment system, while expanding its reach to
                        customers globally.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 ml-[30px]">
                    <p className="font-normal text-sm md:text-lg text-gray-500">
                      FIB token is used as an intermediary fee between customers
                      and global professional financial institutions to access
                      and use financial services on the FIB platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>


 {/* Product */}
          <div className="mt-20">
              <div className="mt-1">
                <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                Product
                </span>

                {/* I. Build and combine media platforms, financial information pages and advertising. */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    I. Build and combine media platforms, financial information pages and advertising.
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                     FIB tokens can be integrated into media products and financial information pages as follows:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          1. High-quality content and access: FIB tokens can be used to provide access to high-quality
                          content on financial information sites. Users can use tokens to purchase service packages, 
                          sign up for memberships or access exclusive content, research reports or financial advice.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          2. Content evaluation and review: FIB tokens can be used to participate in the evaluation and
                          review of content on financial information pages. Users can use the token to vote, rate or 
                          post comments on articles, reports or financial news. This can create a trusted community 
                          and increase transparency in content reviews.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          3. Advertising and marketing: FIB tokens can be used to pay for advertising and marketing on 
                          financial information sites. Advertisers can purchase ads using FIB tokens, creating a 
                          direct payment mechanism between advertisers and content providers. This can help increase 
                          efficiency and transparency in online advertising.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                          
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          4. Rewards and promotions: FIB tokens can be used to reward and promote users on financial 
                          information sites. Users can earn tokens through sharing content, participating in community
                          activities or completing tasks. This can motivate users to engage and interact with financial 
                          information site content.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                         
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          5. Financial and transactional support: FIB tokens can be integrated into media products and 
                          financial information pages to provide financial support and transactional facilities. For 
                          example, users can use tokens to access financial analysis tools, market information, price 
                          charts, and other financial trading services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* II. FIB Wallet (Transaction Wallet) */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    II. FIB Wallet (Transaction Wallet)
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                  FIB e-wallet is a mobile application, computer software that allows users to manage and use FIB 
                  tokens and other digital assets.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                          
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          1. Asset management: FIB e-wallet allows users to manage their balance and assets. 
                          Users can check the balance of FIB tokens and other digital assets they own from 
                          a single place. This helps them track and control their assets conveniently.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                          
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          2. Send and receive FIB tokens: FIB e-wallet allows users to send and receive 
                          FIB tokens easily. Users can enter the recipient's wallet address and the 
                          amount of FIB tokens to transfer and confirm the transaction in just a few 
                          simple steps. This facilitates the transfer of funds and carrying out 
                          transactions with FIB tokens.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                         
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          3. Storing and trading other digital assets: In addition to managing FIB 
                          tokens, FIB e-wallet can also support storing and trading other digital 
                          assets such as Bitcoin, Ethereum and other currencies other electronics. 
                          This allows users to manage and conduct transactions with multiple digital 
                          assets from the same wallet.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                          
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          4. Security and privacy: FIB e-wallet provides security and privacy measures 
                          to protect user accounts. This may include data encryption, two-factor 
                          authentication (2FA), fingerprint/face recognition integration, or secure 
                          private locking mechanisms. Ensuring security and privacy is an important 
                          factor for users to feel secure when using FIB e-wallet.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                         
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          5. Integration with other financial services: FIB e-wallet can integrate 
                          with other financial services to provide expanded features. For example, 
                          it is possible to integrate wallets with exchanges to make transactions 
                          directly from the wallet, integrate wallets with other cryptocurrency wallets 
                          to convert assets, or integrate wallets with payment services to make transactions. 
                          Now pay online. This brings convenience and flexibility to users when using FIB e-wallet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* III. Decentralized Exchange (decentralized exchange) */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    III. Decentralized Exchange (decentralized exchange)
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                    FIB is a blockchain and cryptocurrency ecosystem, and we build a decentralized exchange 
                    (DEX) in our ecosystem, which can operate in the same way as decentralized exchanges other.
                  </p>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                  Here is an overview:
                  </p>


                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                          
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          1. Liquidity: FIB's decentralized exchange will provide a platform for users 
                          to exchange digital assets within the FIB ecosystem. To ensure liquidity, 
                          users need to provide their assets to the exchange's trading profile or through 
                          connecting their personal wallets.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                         
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          2. Peer-to-peer trading: FIB's decentralized exchange can allow users to 
                          exchange directly with each other through smart contracts. This means 
                          users can make transactions without going through an intermediary.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                   
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          3. Trading Protocol: FIB's decentralized exchange uses a protocol 
                          to determine value and regulate the trading process. A popular 
                          protocol used in decentralized exchanges is Automated Market Maker 
                          (AMM), which allows users to exchange assets through predefined trading pairs.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                         
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          4. Privacy and security: FIB's decentralized exchange will ensure the confidentiality 
                          and security of user data and assets. This can include using protective measures 
                          such as two-factor authentication, data encryption, and security checks through 
                          audits and source code inspections.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                         
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                          5. System management: FIB's decentralized exchange will have system management 
                          functions such as managing asset lists, determining transaction fees, monitoring 
                          trading activities, and providing interfaces. User friendly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  IV. Build Web3 infrastructure */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  IV. Build Web3 infrastructure
                  </span>
                    <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                    Update......
                    </p>
                </div>
              </div>
            </div>


{/* Title Overview of FIB ecosystem */}
             <div className="mt-10">
             <span className="font-normal text-gray-500 text-sm md:text-lg ml-10">
              Roadmap
              </span>
             <div className="mt-5">
                  <img src="/anhroadmap.png" alt="image" />
              </div> 
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                Overview of FIB ecosystem
              </span>
              <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                The FIB token ecosystem revolves around main groups including
                users, organizations, investors and decentralized exchanges (DEX
                exchange). Below is a description of each group's role and
                interactions in this ecosystem:
              </p>
              {/* Roadmap */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">                   
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        1. Users: Users are individuals or organizations that use
                        FIB tokens in applications and services. They can use
                        FIB tokens to exchange between accounts, make
                        transactions, or participate in other activities within
                        the FIB token network. Users have ownership and control
                        of their FIB tokens, and use them to take advantage of
                        the ecosystem's features and benefits.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">                    
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        2. Organization: Organizations can be businesses, projects,
                        non-profit organizations or any other entity in the FIB
                        token ecosystem. They can use FIB tokens to create and
                        manage services, applications or platforms. FIB tokens
                        can be used to facilitate exchanges between members of
                        an organization or to provide incentives for users to
                        participate in organizational activities.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">                  
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        3. Investors: Investors play an important role in
                        supporting and developing the FIB token ecosystem. They
                        can purchase FIB tokens during public or initial coin
                        offering (ICO) phases to invest in projects related to
                        FIB tokens. Investors can expect profits from holding
                        FIB tokens or from participating in business and
                        development activities in the FIB token ecosystem.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">                 
                      <p className="font-normal text-gray-500 text-sm md:text-lg">
                        4. Decentralized exchange (DEX exchange): Decentralized
                        exchange is where users can exchange FIB tokens with
                        each other. This is where liquidity is provided and the
                        ability to exchange FIB tokens between users. On the
                        exchange, users can buy, sell or trade FIB tokens with
                        other partners. Decentralized exchanges play an
                        important role in facilitating trading activities and
                        providing flexibility to users in managing and using FIB
                        tokens.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 ml-[30px]">
                    <p className="font-normal text-sm md:text-lg text-gray-500">
                      FIB token ecosystem includes users, organizations,
                      investors and decentralized exchanges. Each group plays an
                      important role and interacts with each other to build and
                      develop the FIB token ecosystem.
                    </p>
                  </div>
                </div>
                <div className=" mt-20">
                  <img src="/anhsodo01.png" alt="image" />
                </div>               
              </div>
            </div>

            {/* Role and operational */}
            <div className="mt-5">
              <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                Role and operational objectives of FIB
              </span>
              <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                FIB tokens in blockchain-based financial brokerage can be
                designed to play a role in creating and managing financial
                transactions and services between parties in a blockchain
                ecosystem. Here is an overview of how the FIB token works:
              </p>

              {/* FIB */}
              <div className="grid gap-10 grid-cols-2 mt-5">
                <div className="row-start-2 row-span-2">
                  <span className="font-normal text-gray-600 text-lg md:text-lg mt-5">
                    01
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Payment features: FIB token can be used as a means of
                    payment in financial transactions on the blockchain
                    platform. Users can use FIB to exchange, transfer money or
                    pay for services and products in a financial environment.
                  </p>
                </div>

                <div className="row-end-5 row-span-2 ">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    02
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Smart contracts: FIB tokens can be integrated with smart
                    contracts on the blockchain. This allows automatic financing
                    terms and conditions to be set without the need for
                    third-party intervention. For example, FIB can be used to
                    execute credit terms transactions, asset swaps or implement
                    other financial regulations.
                  </p>
                </div>

                <div className="row-start-4 row-span-2 ">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    03
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Ownership and voting rights: FIB tokens can bring ownership
                    and voting rights to users. This can allow investors or
                    users to participate in decisions about changes, upgrades
                    and developments in financial brokerage on the blockchain.
                  </p>
                </div>

                <div className="row-end-7 row-span-2 ">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    04
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Support trading and liquidity: FIB token can be used to
                    support trading and liquidity in financial brokerage. This
                    can include providing liquidity to trading pairs, supporting
                    the buying and selling of financial assets, and creating an
                    efficient and transparent trading environment on the
                    blockchain platform.
                  </p>
                </div>

                <div className="row-end-8 row-span-2">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    05
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Links and integrations: FIB tokens can create opportunities
                    for links and integrations with other financial services and
                    platforms. This could open up opportunities for
                    collaboration and increase the usability and availability of
                    the FIB token in the financial environment.
                  </p>
                </div>

                <div className="row-start-7 row-span-2 ">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    06
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Security: With the support of blockchain technology, FIB
                    tokens can provide a safe and secure environment for
                    financial transactions. Transactions are encrypted and
                    recorded on the blockchain, ensuring data integrity and
                    avoiding problems with fraud and information fraud.
                  </p>
                </div>

                <div className="row-end-10 row-span-2 ">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    07
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Transparency: Blockchain provides a transparent environment
                    in which transactions and activities related to FIB tokens
                    can be publicly tracked and audited. This helps increase
                    trust and transparency in the financial brokerage
                    environment, helping users and investors to check and verify
                    financial activity.
                  </p>
                </div>

                <div className="row-start-9 row-span-2 ">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    08
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Save time and costs: Using FIB tokens in financial brokerage
                    on the blockchain can minimize dependence on intermediaries
                    and reduce complicated paperwork. This can help save time
                    and costs on financial transactions and processes.
                  </p>
                </div>

                <div className="row-end-12 row-span-2 ">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    09
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Growth potential: A financial brokerage platform on
                    blockchain using FIB tokens can bring growth and development
                    potential in the financial sector. The use of blockchain
                    technology and smart features of the FIB token can attract
                    the interest of investors, users and partners in the
                    financial industry.
                  </p>
                </div>

                <div className="row-start-11 row-span-2 ">
                  <span className="font-normal text-gray-600 text-lg md:text-lg">
                    10
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg">
                    Easy integration: FIB token can be easily integrated with
                    other financial services and applications on the blockchain.
                    This opens up opportunities for building complex financial
                    systems and collaborating with other partners in the
                    blockchain environment.
                  </p>
                </div>
              </div>
            </div>


{/* white book */}
            <div className="mt-20">
              <div className="mt-1">
                <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  White book
                </span>

                {/* I. Introduction */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    I. Introduction
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                    This WhiteBook describes in detail the FIB Token on the
                    Binance Smart Chain (BSC) platform. FIB token is a type of
                    cryptocurrency token created on BSC, with the goal of acting
                    as an intermediary between customers and professional
                    financial institutions globally. This WhiteBook provides
                    information about the goals, structure, features,
                    development potential and applications of FIB Token on the
                    BSC platform.
                  </p>
                </div>

                {/* II. Target */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    II. Target
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                    FIB token on BSC is designed with the following main goals:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            1. Becoming a global financial intermediary: Token FIB
                            aims to build a decentralized financial platform on
                            BSC, providing diverse and convenient financial
                            services to customers globally. FIB token will
                            create a bridge between customers and professional
                            financial institutions, facilitating transactions,
                            investments and access to global financial products.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            2. Increased flexibility and utility: FIB tokens on BSC
                            will provide flexibility and utility for users in
                            trading, borrowing, investing and managing assets.
                            Users can use FIB Token to access financial products
                            and services from professional institutions globally
                            easily and securely.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                        
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            3. Enhance security and reliability: FIB token on BSC
                            will apply advanced security measures and BSC's
                            blockchain technology to ensure the security and
                            reliability of transactions and financial data.
                            main. FIB token will create a safe and trustworthy
                            environment for users to transact and manage their
                            assets.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                      
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            4. Building a decentralized financial ecosystem: FIB
                            Token aims to develop a decentralized financial
                            ecosystem, allowing users to access financial
                            services conveniently and safely.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                     
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            5. Provides flexibility and utility: FIB Token allows
                            users to conduct financial transactions, access
                            financial services and use other features on the FIB
                            platform with flexibility and convenience profit.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                     
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            6. Enhanced security: FIB token uses blockchain
                            technology and smart contract protocols to ensure
                            the security and safety of transactions and
                            financial data.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* III. Structure */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    III. Structure
                  </span>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                      
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            1. Binance Smart Chain: FIB token is built on the
                            Binance Smart Chain platform, a public and
                            decentralized blockchain. BSC offers fast
                            transaction speeds and low transaction fees,
                            facilitating the use of FIB Tokens on the BSC
                            network.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                         
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            2. Open standards: FIB tokens comply with open
                            standards such as the ERC-20 standard on BSC, which
                            increases compatibility and usability in various
                            examples and applications on BSC.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                  
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            3. Smart contract protocol: FIB token on BSC uses BSC's
                            smart contract protocol to manage transactions and
                            interactions on the platform. This protocol provides
                            automation and ensures that transactions are
                            performed securely and reliably.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IV. Feature */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    IV. Feature
                  </span>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                       
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            1. Transactions: FIB token allows users to perform
                            financial transactions such as money transfers,
                            payments and exchanges with fast speed and low
                            transaction fees on the BSC platform.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                      
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            2. Borrowing: FIB Token users can take advantage of the
                            borrowing feature to create liquidity and enhance
                            their investment capabilities. Professional
                            financial institutions can provide borrowing
                            services based on FIB Tokens to meet users' capital
                            needs.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                    
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            3. Asset Management: FIB Token provides tools and
                            interfaces for users to conveniently manage their
                            assets. Users can track, evaluate and manage their
                            digital assets on the BSC platform.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                     
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            4. Multi-supply trading: FIB token will facilitate
                            users to conduct multi-supply trading, allowing them
                            to access different financial markets and exchanges
                            globally.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                     
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            5. Financial services: FIB token allows access and use
                            of financial services on the FIB platform, including
                            e-wallets, loans, savings, insurance and other
                            services. Users can use FIB Token to access and use
                            these services conveniently and securely.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">                  
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            6. Application development platform: FIB Token provides
                            a platform for developers to build and deploy
                            financial applications on the FIB platform.
                            Developers can leverage the features and technology
                            of FIB Token to build diverse financial
                            applications, from simple payment applications to
                            complex smart contracts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* V. Development potential */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    V. Development potential
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="mt-5">
                        <div className="ml-[30px]">                       
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            1. Development team: A talented and experienced
                            development team will ensure the continuous
                            development and improvement of FIB Token and its
                            surrounding ecosystem.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            2. Strategic partners: Strategic partners in the fields
                            of finance and technology will create opportunities
                            for cooperation, expanding the scale and scope of
                            FIB Token.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            3. User adoption: Wide acceptance and use of FIB Token
                            by users will contribute significantly to the
                            development and increase in value of the token.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            4. Ecosystem expansion: FIB Token will continuously
                            expand its ecosystem by collaborating with other
                            professional financial institutions, exchanges and
                            blockchain projects globally. This will create more
                            opportunities and development potential for FIB
                            Token on the BSC platform.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            5. Enhance security: Token FIB will continue to
                            research and deploy advanced security technologies
                            to ensure the security and reliability of the
                            system. This will help users feel secure when using
                            FIB Token on the BSC platform.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-gray-500 text-sm md:text-lg">
                            6. Application expansion: FIB token will facilitate the
                            development of new applications and services on the
                            BSC platform, to meet the diverse financial needs of
                            users globally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  VI. Conclude */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                    VI. Conclude
                  </span>
                  <p className="font-normal text-gray-500 text-sm md:text-lg mt-5">
                    The FIB token on the Binance Smart Chain platform is a
                    global financial intermediary, providing flexibility,
                    utility and security to users. With the goal of serving as a
                    bridge between customers and professional financial
                    institutions, Token FIB wishes to create a safe, reliable
                    and convenient financial environment on the BSC platform.
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </main>
  }
  return Ecosystem
}
