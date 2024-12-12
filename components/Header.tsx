'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#team", label: "Team" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 relative">
        {/* Logo */}
        <div className="flex items-center">
          {/* <Image
            src="/placeholder.svg?height=32&width=150"
            alt="Annologic"
            width={150}
            height={32}
            className="mr-4 md:mr-6"
          /> */}
          <Link href="/">
          <h3 className='text-3xl text-purple-900' style={{fontFamily:"Montserrat-Bold"}}>Annologic</h3>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
          {NavLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <Button className='bg-purple-900 text-white'>Get In Touch</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative">
          <button
            className="p-2 rounded text-foreground/60 hover:text-foreground/80 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div 
              className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border"
            >
              <nav className="flex flex-col p-4 space-y-4">
                {NavLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Mobile Action Button */}
                <div className="pt-4 border-t">
                  <Button className='bg-purple-900 text-white w-full'>Get In Touch</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}