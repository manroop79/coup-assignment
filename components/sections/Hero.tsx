'use client';

import React from 'react';
import Image from 'next/image';
import { Button, Badge } from '../ui';
import { AppleIcon } from '../icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-linear-to-b from-[#f5faff] via-[#e8f4ff] to-[#d4e9ff]">

       <div className="absolute top-[32%] left-[16%] opacity-30 z-15 w-7 h-7">
        <Image
          src="/birds.png"
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>
 
      <div className="absolute top-[36%] left-[28%] opacity-25 z-15 w-7 h-7">
        <Image
          src="/birds.png"
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>
 
      <div className="absolute top-[47%] right-[27%] opacity-28 z-15 w-7 h-7">
        <Image
          src="/birds.png"
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>
 
      <div className="absolute top-[34%] right-[29%] opacity-26 z-15 w-7 h-7">
        <Image
          src="/birds.png"
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content - Centered and Compact */}
      <div className="relative z-30 flex items-center justify-center" style={{ paddingTop: '130px' }}>
        <div className="w-full max-w-3xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            
            {/* Badge - Compact */}
            <div className="opacity-0 animate-fade-in-up" style={{ marginBottom: '10px' }}>
              <Badge icon={
                <Image
                  src="/Frame 23.png"
                  alt=""
                  width={32}
                  height={17}
                  className="object-contain"
                />
              }>
                #1 iMessage Automation Tool
              </Badge>
            </div>

            {/* Main Heading - Smaller */}
            <h1 className="text-[28px] md:text-[35px] font-bold tracking-tight opacity-0 animate-fade-in-up delay-100" style={{ marginBottom: '5px', lineHeight: '1.2' }}>
              <span className="text-[#007AFF]">iMessage</span>{' '}
              <span className="text-[#1A1A1A]">Automation</span>
              <br />
              <span className="text-[#1A1A1A]">for Teams and AI<br></br> Workflows.</span>
            </h1>

            {/* Subheading - Compact */}
            <p className="text-[14px] text-[#6b7280] max-w-lg leading-snug opacity-0 animate-fade-in-up delay-200" style={{ marginBottom: '16px' }}>
              Coup lets you, your team, or AI workflows send iMessages directly from<br className="hidden sm:block" />
              your phone number, running securely on your Mac or Mac Mini.
            </p>

            {/* CTA Buttons - Compact */}
            <div className="flex flex-col sm:flex-row items-center gap-3 opacity-0 animate-fade-in-up delay-300">
              <Button variant="primary" href="#get-started">
                Get Started
              </Button>
              <Button
                variant="secondary"
                href="#download"
                icon={<AppleIcon size={16} />}
              >
                Download the Mac app
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Background Layer - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[29vh] pointer-events-none z-20">
        <Image
          src="/Frame 28.png"
          alt=""
          fill
          className="opacity-55"
          style={{ objectPosition: 'center bottom' }}
        />
      </div>

      {/* Main Bird Images - Smaller, on clouds */}
      <div className="absolute bottom-[5%] left-[22%] w-12 h-12 z-25 animate-float">
        <Image
          src="/Group 3.png"
          alt=""
          width={36}
          height={36}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-[10%] left-[33%] w-12 h-12 z-25 animate-fly">
        <Image
          src="/Group 7.png"
          alt=""
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-[4%] right-[28%] w-15 h-15 z-25 animate-fly-reverse">
        <Image
          src="/Group 11.png"
          alt=""
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-[4%] right-[13%] w-17 h-17 z-25 animate-float-slow">
        <Image
          src="/Group 6.png"
          alt=""
          width={44}
          height={44}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Scroll Indicator - Bottom */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1">
        <span className="text-xs text-[#1A1A1A] font-medium">Scroll to learn more</span>
        <div className="animate-bounce-soft">
          <Image
            src="/arrow-down-04.svg"
            alt="Scroll down"
            width={16}
            height={16}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
