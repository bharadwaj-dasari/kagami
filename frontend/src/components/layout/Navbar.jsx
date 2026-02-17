'use client'

import { useState, useEffect } from 'react'
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
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline' // Keeping Heroicons as per your snippet
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from "../../assets/KA.png";

// Updated "Kagami-themed" dropdown items
const philosophyItems = [
  { name: 'The Method', description: 'Deconstruct the psychology of discipline.', href: '#philosophy', icon: CpuChipIcon },
  { name: 'The Ecosystem', description: 'How the mobile and desktop apps sync.', href: '#systems', icon: GlobeAltIcon },
  { name: 'Data Privacy', description: 'Your reflections are encrypted locally.', href: '#privacy', icon: ShieldCheckIcon },
  { name: 'Roadmap', description: 'Future modules and features.', href: '#roadmap', icon: RocketLaunchIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // 1. SCROLL DETECTION: Detects if user scrolled down to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#09090B]/80 backdrop-blur-md border-white/5 py-3 shadow-2xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* LOGO SECTION */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <img
              alt="Kagami Logo"
              src={logo}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            {/* Optional Text Logo if image fails or for aesthetics */}
            
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* DESKTOP LINKS */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-10">
          
          {/* 2. ENHANCED POPOVER (Philosophy) */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-heading font-bold outline-none transition-colors duration-200 ${open ? 'text-kagami-accent' : 'text-white hover:text-kagami-accent'}`}>
                  Philosophy
                  <ChevronDownIcon 
                    aria-hidden="true" 
                    className={`size-5 flex-none text-gray-400 transition-transform duration-200 ${open ? 'rotate-180 text-kagami-accent' : ''}`} 
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="w-full overflow-hidden rounded-3xl bg-[#16161D] shadow-2xl ring-1 ring-white/10 backdrop-blur-3xl">
                    <div className="p-4">
                      {philosophyItems.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-xl p-4 text-sm/6 hover:bg-white/5 transition-colors"
                        >
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-kagami-accent/20 transition-colors">
                            <item.icon
                              aria-hidden="true"
                              className="size-6 text-kagami-muted group-hover:text-kagami-accent transition-colors"
                            />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-white">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-kagami-muted group-hover:text-gray-300 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Bottom Action Bar inside Popover */}
                    <div className="grid grid-cols-1 divide-x divide-white/5 bg-white/[0.02]">
                      <a
                        href="#"
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Read the Manifesto <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <NavLink href="#systems">Systems</NavLink>
          <NavLink href="#preview">Preview</NavLink>
          <NavLink href="#about">About</NavLink>
        </PopoverGroup>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="relative px-6 py-2.5 bg-kagami-accent text-white-900 rounded-xl text-sm font-heading font-bold overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,108,255,0.4)]">
             <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Started</span>
             {/* Hover Fill Effect */}
             <div className="absolute inset-0 bg-white/0 group-hover:bg-black/20 transition-colors duration-300" />
          </a>
        </div>
      </nav>

      {/* 3. MOBILE MENU (Full Screen Dark Overlay) */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0E0E12] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                alt=""
                src={logo}
                className="h-8 w-auto"
              />
              <span className="font-space font-bold text-white tracking-widest">KAGAMI</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {philosophyItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                ))}
                <a
                  href="#systems"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Systems
                </a>
                <a
                  href="#preview"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Preview
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

// Helper for cleaner links
const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm/6 font-heading font-bold text-white hover:text-kagami-accent transition-colors relative group">
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-kagami-accent transition-all duration-300 group-hover:w-full" />
  </a>
);