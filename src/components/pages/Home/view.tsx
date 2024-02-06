import type { UseService } from "./service"
import type {NextPage} from "../../../types/nextjs";

import { useRouter } from "next/router"
import {ChangeEvent, useEffect, useState} from "react";
import styles from '../../../../styles/Home.module.css'
import c from "clsx";
import FeatherIcon from "feather-icons-react";
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const Home: NextPage = () => {
    const [gender, setGender] = useState(0)
    const router = useRouter()
    
    const [isLoading, setIsLoading] = useState(false)

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
            <div className="mx-auto xl:mx-0">
              <img src="/home-img.jpg" alt="Image"></img>
            {/* <Image path="/home-img.svg" alt="Image" width={au} height={100}/> */}
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

                    <p className="font-normal text-gray-400 text-sm md:text-lg">The FIB token provides an easy and secure way to connect customers with professional financial organizations globally. It creates an environment for the exchange of information, services, and assets quickly and conveniently.</p>
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

                      <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">The FIB token is initially issued on the Binance Smart Chain network through a predetermined issuance and distribution process. Users can purchase FIB tokens from exchanges or from professional financial organizations participating in the network.</p>

                      <a href="#" className="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300">
                          See more
                          <i data-feather="chevron-right"></i>
                      </a>
                  </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
                  <div className="mx-auto xl:mx-0 text-center xl:text-left mb-20 xl:mb-0">
                      <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">Trading</h1>

                      <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">Users can trade FIB tokens on exchanges that support the Binance Smart Chain. They can buy, sell, or exchange FIB tokens with other tokens or traditional currencies. These transactions are carried out safely and transparently on the Binance Smart Chain blockchain network.</p>

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

                      <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">FIB tokens can be used to access services and products of professional financial organizations within the network. This may include access to financial services, trading, borrowing, or participation in smart contracts.</p>

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

              <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20">the FIB token on the Binance Smart Chain platform provides a solution for connecting customers and professional financial organizations globally. With high liquidity and ownership rights offering benefits, FIB tokens create a safe, convenient, and transparent environment for connection and transactions on the blockchain network.</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  }
  return Home
}
