import type { UseService } from "./service"
import type {NextPage} from "../../../types/nextjs";

import { useRouter } from "next/router"
import {ChangeEvent, useEffect, useState} from "react";
import styles from '../../../../styles/Home.module.css'
import c from "clsx";
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const Home: NextPage = () => {
    const [gender, setGender] = useState(0)
    const router = useRouter()
    
    const [isLoading, setIsLoading] = useState(false)
    let idx = 0 
   

    return <main className={c(styles.main)}>
      <div className="responsive">
        <div className="container">
          
          <div className="mb-3 mt-8 flex justify-center text-2xl">
            <div className="col-sm-12">
              <h3 className="d-flex flex-row sm:flex-col center"><i className="bi bi-filetype-csv me-1"></i>
                Thông tin hợp đồng</h3>
            </div>
          </div>

          <div className="mb-3 sm:ml-20 mt-10 ">
          </div>
        </div>
      </div>
    </main>
  }
  return Home
}
