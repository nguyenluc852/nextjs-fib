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
  const Ecosystem: NextPage = () => {
    
   

    return <main className={c(styles.main)}>
       <main
        className={c(styles.main, "bg-backgr3 bg-no-repeat bg-cover bg-center")}
       >
        <div className="responsive">
          <div className="container">
             <div className="mt-3">
                <span className="text-[50px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                Digital era Web3
                </span>
                <div className="grid grid-cols-10 gap-3">
                    <div className="col-span-6">
                      <div className="mt-5">
                        <div className="ml-[30px]">
                          <p className="font-normal text-[25px] text-neutral-50">
                          Web3 is having a profound impact on the financial sector, opening up 
                          new opportunities and changing the way we approach and interact with 
                          finance. These potentials have not yet been fully exploited and there 
                          are many aspects left to explore and develop in the future.
                          </p>
                          <p className="mt-2 font-normal text-[25px] text-neutral-50">
                          The FIB token was created to leverage the potential of Web3 in the 
                          financial sector by providing a decentralized, fair and transparent 
                          financial ecosystem. The FIB token allows users to access financial 
                          services easily and securely, while creating investment and financial 
                          opportunities for those with limited access to products and services.
                          </p>
                          <p className="font-normal text-[25px] text-neutral-50 mt-5">
                          Discover now 
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
  return Ecosystem
}
