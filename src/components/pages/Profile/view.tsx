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
  const Vision: NextPage = () => {
    

    return <main className={c(styles.main)}>
      <main
        className={c(styles.main)}
      >
        <div className="responsive">
          <div className="container">
          <div className="mt-5">
              <div className="mt-1 ml-[70px]">
                <span className="font-normal text-gray-900 text-xl md:text-2xl ">
                  Name:
                </span>
              </div>

              <div className="mt-5 ml-[70px]">
                <span className="font-normal text-gray-900 text-xl md:text-2xl ">
                  Wallet:
                </span>
                <p className="mt-2 ml-[50px] font-normal text-gray-700 text-lg md:text-xl">
                        ( Please send your FIB receiving wallet address )
                </p>
              </div>

              <div className="mt-3 ml-[70px]">
                <span className="font-normal text-gray-900 text-xl md:text-2xl">
                  Referral link:
                </span>
              </div>

              <div className="mt-5  ml-[70px]">
                <span className="font-normal text-gray-900 text-xl md:text-2xl">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>   
    </main>
  }
  return Vision
}
