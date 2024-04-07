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
        className={c(styles.main, "bg-backgr2 bg-no-repeat bg-cover bg-center")}
      >
        <div className="responsive">
          <div className="container">
             {/* Vision */}
             <div className="mt-5">
              <div className="mt-1">
                <span className="text-[40px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                  Vision
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="mt-5">
                  <img src="/vision1.jpg" alt="vision1" />
                </div>
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        01
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        The vision of the FIB token is to build a decentralized
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
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        02
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        This vision aims to create an open financial environment
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
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        03
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        The ultimate goal of the FIB token is to create a
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
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        04
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        The vision of the FIB token also emphasizes progress and
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
                    <p className="text-[26px] text-[#FBD786]">
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
                <span className="text-[40px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                  Mission
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        01
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        The mission of FIB token is to create a platform that
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
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        02
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        This mission aims to provide customers with a wider
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
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        03
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        FIB Token provides a fair and transparent mechanism for
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
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        04
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        The mission of FIB token is also to create a strong
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
                    <p className="font-normal text-[26px] text-[#FBD786]">
                      The mission of FIB token is to connect customers with
                      professional financial institutions globally through a
                      decentralized, fair and secure platform. FIB Token hopes
                      to create a global financial environment, enhancing voice
                      and financial access for everyone.
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <img src="/vision2.jpg" alt="vision2" />
                </div>
              </div>
            </div>

            {/* Goal */}
            <div className="mt-5">
              <div className="mt-1">
                <span className="text-[40px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                  Goal
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="mt-5">
                  <img src="/vision3.jpg" alt="vision3" />
                </div>
                <div className="col-span-2">
                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        01
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        The goal of the FIB token is to serve as an intermediary
                        fee between customers and global professional financial
                        institutions. FIB tokens can be used as a payment method
                        to access and use financial services on the FIB
                        platform.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="ml-[30px]">
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        02
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        When customers use financial services from partner
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
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]">
                        03
                      </span>
                      <p className="font-normal text-[26px] text-neutral-50">
                        Using FIB tokens as an intermediary fee between
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
                    <p className="font-normal text-[26px] text-[#FBD786]">
                      FIB token is used as an intermediary fee between customers
                      and global professional financial institutions to access
                      and use financial services on the FIB platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>   
    </main>
  }
  return Vision
}
