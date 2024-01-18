/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import c from "clsx";
import s from "./style.module.scss";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router';

const solutions: any[] = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/home',
    icon: ChartBarIcon,
  },
  {
    name: 'Order',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/order',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'AboutUs',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/aboutus',
    icon: XMarkIcon,
  },
]

type Props = {
  className?: string;
};

const Header = (props: Props) => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter()
  return (
    <header className={c("header overflow-hidden")} id="header">
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="#" key="home">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              {
                navbar ? <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 
                text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-indigo-500"
                onClick={() => setNavbar(!navbar)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button> : <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 
                text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setNavbar(!navbar)}>
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>

              }
              
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {solutions.map((item) => (
              <Link href={item.href} key={item.name}
                // onClick= {() => setNavbar(false)}
                className={c("text-base font-medium text-gray-500 hover:text-gray-900",
                  router.asPath === item.href ? "text-blue-500 hover:text-blue-900" : "text-gray-500 hover:text-gray-900"
                )}>
                  {item.name}
              </Link>
            ))
            }
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              
              {/* <Link
                href="/signup"
                key={"signup"}
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Connect Wallet
              </Link> */}
              {/* <MetaMaskButton theme={"light"} color="white"></MetaMaskButton> */}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className={`relative inset-x-0 top-0 origin-top-right transform p-2 transition ${
                navbar ? 'block' : 'hidden' }`}>
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="mt-2">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick= {() => console.log("click")}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span
                          
                          className={c("ml-3 text-base font-medium ", 
                          router.asPath === item.href ? "text-blue-900" : "text-gray-900") }
                          >{item.name}</span>
          
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                
                <div>
                  
                  {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <Link href="#" key={"signInMobile"} className="text-indigo-600 hover:text-indigo-500">
                      Connect Wallet
                    </Link>
                  </p> */}
                  {/* <MetaMaskButton theme={"light"} color="white"></MetaMaskButton> */}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Header;