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
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const Overview: NextPage = () => {
    
   

    return <main className={c(styles.main)}>
      <main
        className={c(styles.main)}
      >
        <div className="responsive">
          <div className="container">
          <div className="mt-5">
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

          </div>
        </div>
      </main>
          
    </main>
  }
  return Overview
}
