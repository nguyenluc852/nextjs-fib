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

                <p className="font-normal text-gray-500 text-sm md:text-lg mb-10">Token FIB (tên đầy đủ là Financial Broker) là một token được tạo ra trên nền tảng Binance Smart Chain (BSC) nhằm giải quyết nhu cầu kết nối giữa khách hàng và các tổ chức tài chính chuyên nghiệp toàn cầu.</p>

                <div className="flex items-center justify-center lg:justify-start">
                    <a href="#" className="px-8 py-3 bg-green-500 font-medium text-white text-md md:text-lg rounded-md hover:bg-green-700 transition ease-in-out duration-300 mr-14">Our story</a>

                </div>
            </div>
            <div className="mx-auto xl:mx-0">
              <img src="/home-img.svg" alt="Image"></img>
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

                    <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Kết nối</h2>

                    <p className="font-normal text-gray-400 text-sm md:text-lg">Token FIB cung cấp một cách kết nối dễ dàng và an toàn giữa khách hàng và các tổ chức tài chính chuyên nghiệp trên toàn cầu. Nó tạo ra một môi trường trao đổi thông tin, dịch vụ và tài sản một cách nhanh chóng và tiện lợi.</p>
                </div>

                <div className="text-center mb-10 md:mb-0">
                    <div className="flex items-center justify-center">
                        <div className="w-20 py-7 flex justify-center bg-red-50 text-red-500 rounded-md mb-5 md:mb-10">
                            <FeatherIcon icon="dollar-sign"/>
                        </div>
                    </div>

                    <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Tính thanh khoản</h2>

                    <p className="font-normal text-gray-400 text-sm md:text-lg">FIB token cung cấp tính thanh khoản cao, cho phép các giao dịch nhanh chóng và dễ dàng trên mạng lưới Binance Smart Chain. Người dùng có thể mua, bán hoặc trao đổi FIB token với các token khác hoặc tiền tệ truyền thống.</p>
                </div>

                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <div className="w-20 py-7 flex justify-center bg-blue-50 text-blue-500 rounded-md mb-5 md:mb-10">
                            <FeatherIcon icon="users"/>
                        </div>
                    </div>

                    <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Quyền sở hữu và ưu đãi</h2>

                    <p className="font-normal text-gray-400 text-sm md:text-lg">Việc sở hữu Token FIB có thể mang lại cho người dùng quyền lợi và ưu đãi đặc biệt từ các tổ chức tài chính chuyên nghiệp, bao gồm lợi suất cao, chiết khấu hoặc quyền truy cập vào các sản phẩm và dịch vụ độc quyền.</p>
                </div>
              </div>

            </div> 

          </section>
        

          <section className="py-8 md:py-16">

            <div className="container max-w-screen-xl mx-auto px-4">

              <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">Cách thức hoạt động của Token FIB</h1>

              <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
                  <div className="mx-auto xl:mx-0 mb-20 xl:mb-0">
                      <img src="/image-1.svg" alt="Image"/>
                  </div>

                  <div className="mx-auto xl:mx-0 text-center xl:text-left">
                      <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">Phát hành</h1>

                      <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">Token FIB được phát hành ban đầu trên mạng lưới Binance Smart Chain thông qua quá trình phát hành và phân phối được quy định trước. Người dùng có thể mua FIB token từ các sàn giao dịch hoặc từ các tổ chức tài chính chuyên nghiệp tham gia trong mạng lưới.</p>

                      <a href="#" className="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300">
                          See more
                          <i data-feather="chevron-right"></i>
                      </a>
                  </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
                  <div className="mx-auto xl:mx-0 text-center xl:text-left mb-20 xl:mb-0">
                      <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">Giao dịch</h1>

                      <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">Người dùng có thể giao dịch FIB token trên các sàn giao dịch hỗ trợ Binance Smart Chain. Họ có thể mua, bán hoặc trao đổi FIB token với các token khác hoặc tiền tệ truyền thống. Các giao dịch này được thực hiện một cách an toàn và minh bạch trên mạng lưới blockchain của Binance Smart Chain.</p>

                      <a href="#" className="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300">
                          See more
                          <i data-feather="chevron-right"></i>
                      </a>
                  </div>

                  <div className="mx-auto xl:mx-0">
                      <img src="/image-2.svg" alt="Image"/>
                  </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-between">
                  <div className="mx-auto xl:mx-0 mb-20 xl:mb-0">
                      <img src="/image-3.svg" alt="Image"/>
                  </div>

                  <div className="mx-auto xl:mx-0 text-center xl:text-left">
                      <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">Ứng dụng</h1>

                      <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">FIB token có thể được sử dụng để truy cập vào các dịch vụ và sản phẩm của các tổ chức tài chính chuyên nghiệp trong mạng lưới. Điều này có thể bao gồm việc truy cập vào các dịch vụ tài chính, giao dịch, vay mượn, hoặc tham gia vào các hợp đồng thông minh.</p>

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

              <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20">Token FIB trên nền tảng Binance Smart Chain cung cấp một giải pháp để kết nối khách hàng và các tổ chức tài chính chuyên nghiệp toàn cầu. Với tính thanh khoản cao và quyền sở hữu mang lại ưu đãi, FIB token tạo ra một môi trường kết nối và giao dịch an toàn, tiện lợi và minh bạch trên mạng lưới blockchain.</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  }
  return Home
}
