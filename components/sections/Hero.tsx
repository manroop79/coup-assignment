'use client';

import React from 'react';
import Image from 'next/image';
import { Button, Badge } from '../ui';
import { AppleIcon } from '../icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-linear-to-b from-[#f5faff] via-[#e8f4ff] to-[#d4e9ff]">

       {/* Decorative small birds - Responsive */}
       <div className="absolute opacity-30 z-15 w-5 h-5 md:w-6 md:h-6 top-[28%] left-[12%] md:top-[30%] md:left-[14%] lg:w-7 lg:h-7" style={{ top: '32%', left: '16%', width: '28px', height: '28px' }}>
        <Image
          src="/birds.png"
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>
 
      <div className="absolute opacity-25 z-15 w-5 h-5 md:w-6 md:h-6 top-[32%] left-[25%] md:top-[34%] md:left-[26%] lg:w-7 lg:h-7" style={{ top: '36%', left: '28%', width: '28px', height: '28px' }}>
        <Image
          src="/birds.png"
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>
 
      <div className="absolute opacity-28 z-15 w-5 h-5 md:w-6 md:h-6 top-[42%] right-[24%] md:top-[44%] md:right-[26%] lg:w-7 lg:h-7" style={{ top: '47%', right: '27%', width: '28px', height: '28px' }}>
        <Image
          src="/birds.png"
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>
 
      <div className="absolute opacity-26 z-15 w-5 h-5 md:w-6 md:h-6 top-[30%] right-[26%] md:top-[32%] md:right-[28%] lg:w-7 lg:h-7" style={{ top: '34%', right: '29%', width: '28px', height: '28px' }}>
        <Image
          src="/birds.png"
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content - Centered and Compact - Responsive */}
      <div className="relative z-30 flex items-center justify-center pt-28 md:pt-32 lg:pt-0" style={{ paddingTop: '130px' }}>
        <div className="w-full max-w-3xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            
            {/* Badge - Compact */}
            <div className="opacity-0 animate-fade-in-up mb-5 md:mb-6 lg:mb-0" style={{ marginBottom: '10px' }}>
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

            {/* Main Heading - Responsive */}
            <h1 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[28px] font-bold tracking-tight opacity-0 animate-fade-in-up delay-100 mb-5 md:mb-6 lg:mb-0" style={{ marginBottom: '5px', lineHeight: '1.2' }}>
              <span className="text-[#007AFF]">iMessage</span>{' '}
              <span className="text-[#1A1A1A]">Automation</span>
              <br />
              <span className="text-[#1A1A1A]">for Teams and AI<br></br> Workflows.</span>
            </h1>

            {/* Subheading - Responsive */}
            <p className="text-[14px] md:text-[15px] lg:text-[14px] text-[#6b7280] max-w-lg leading-relaxed md:leading-normal lg:leading-snug opacity-0 animate-fade-in-up delay-200 px-3 md:px-4 lg:px-0 mb-7 md:mb-8 lg:mb-0" style={{ marginBottom: '16px' }}>
              Coup lets you, your team, or AI workflows send iMessages directly from<br className="hidden sm:block" />
              your phone number, running securely on your Mac or Mac Mini.
            </p>

            {/* CTA Buttons - Responsive spacing */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 lg:gap-3 opacity-0 animate-fade-in-up delay-300 mt-1">
              <Button variant="primary" href="#get-started">
                Get Started
              </Button>
              <Button
                variant="secondary"
                href="#download"
                icon={<AppleIcon size={14} className="md:w-4 md:h-4 lg:w-4 lg:h-4" />}
              >
                Download the Mac app
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Background Layer - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 h-[35vh] md:h-[37vh] lg:h-[29vh]">
        <Image
          src="/Frame 28.png"
          alt=""
          fill
          className="opacity-55"
          style={{ objectPosition: 'center bottom' }}
        />
      </div>

      {/* Main Bird Images - Responsive */}
      {/* Left bird */}
      <div className="absolute z-25 animate-float w-9 h-9 md:w-11 md:h-11 bottom-[14%] left-[5%] md:bottom-[10%] md:left-[15%] lg:w-12 lg:h-12" style={{ bottom: '5%', left: '22%', width: '48px', height: '48px' }}>
        <Image
          src="/Group 3.png"
          alt=""
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Middle-left bird */}
      <div className="absolute z-25 animate-fly w-9 h-9 md:w-11 md:h-11 bottom-[18%] left-[32%] md:bottom-[14%] md:left-[35%] lg:w-12 lg:h-12" style={{ bottom: '10%', left: '33%', width: '48px', height: '48px' }}>
        <Image
          src="/Group 7.png"
          alt=""
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Middle-right bird */}
      <div className="absolute z-25 animate-fly-reverse w-9 h-9 md:w-12 md:h-12 bottom-[12%] right-[28%] md:bottom-[9%] md:right-[30%] lg:w-[60px] lg:h-[60px]" style={{ bottom: '4%', right: '28%', width: '60px', height: '60px' }}>
        <Image
          src="/Group 11.png"
          alt=""
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right bird */}
      <div className="absolute z-25 animate-float-slow w-10 h-10 md:w-14 md:h-14 bottom-[13%] right-[5%] md:bottom-[9%] md:right-[12%] lg:w-[68px] lg:h-[68px]" style={{ bottom: '4%', right: '13%', width: '68px', height: '68px' }}>
        <Image
          src="/Group 6.png"
          alt=""
          width={68}
          height={68}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Scroll Indicator - Bottom - Responsive */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 bottom-10 md:bottom-12 lg:bottom-7" style={{ bottom: '28px' }}>
        <span className="text-[11px] md:text-xs text-[#1A1A1A] font-medium">Scroll to learn more</span>
        <div className="animate-bounce-soft">
          <Image
            src="/arrow-down-04.svg"
            alt="Scroll down"
            width={14}
            height={14}
            className="object-contain md:w-4 md:h-4 lg:w-4 lg:h-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
