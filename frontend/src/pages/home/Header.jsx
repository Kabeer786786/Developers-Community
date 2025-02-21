'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  UsersIcon,
  CalendarDaysIcon,
  BellIcon,
} from '@heroicons/react/24/outline'
import {  MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const navItems = [
  { name: 'Projects', href: '/projects', icon: CodeBracketIcon },
  { name: 'Community', href: '/community', icon: UsersIcon },
  { name: 'Discussions', href: '/discussions', icon: ChatBubbleLeftEllipsisIcon },
  { name: 'Events', href: '/events', icon: CalendarDaysIcon },
]

const profileOptions = [
  { name: 'Login', href: '/login', icon: FaSignOutAlt },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="pl-2 pr-4 max-w-[1600px] m-auto">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between p-6 px-0">
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center text-xl font-semibold">
            <img src="/gpreclogo.png" alt="DevCommunity" className="h-8 w-auto" />
            <span className="ml-3">Colab</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className={`py-1 px-4 border rounded-full transition-all ${searchOpen ? 'block' : 'hidden'}`}
            />
            <MagnifyingGlassIcon 
              onClick={() => setSearchOpen(!searchOpen)}
              className="h-6 w-6 text-gray-600 cursor-pointer" 
            />
          </div>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-semibold text-gray-900 flex items-center gap-1">
              <item.icon className="h-5 w-5" />
              {item.name}
            </a>
          ))}
          <a href="/notifications" className="relative">
            <BellIcon className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </a>
          <Popover className="relative">
            <PopoverButton className="w-10 h-10 border-2 rounded-full flex items-center justify-center">
              <FaUser className="w-5 h-5 text-gray-600" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full right-0 mt-3 w-44 bg-white shadow-lg rounded-md">
              <div className="p-2">
                {profileOptions.map((item) => (
                  <a key={item.name} href={item.href} className="flex items-center gap-2 p-2 hover:bg-gray-100">
                    <item.icon className={`h-5 w-5 ${item.name === 'Logout' ? 'text-red-500' : 'text-gray-600'}`} />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-lg">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-md text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="mt-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block py-2 text-lg font-semibold">
                {item.name}
              </a>
            ))}
            <div className="border-t mt-4 pt-4">
              {profileOptions.map((item) => (
                <a key={item.name} href={item.href} className="block py-2 text-lg font-semibold">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
