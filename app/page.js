'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';


function HomePage() {

  const [timeToNewYear, setTimeToNewYear] = useState(null);

  useEffect(() => {
    const calculateTimeToNewYear = () => {
      const now = new Date();
      const newYear = new Date(now.getFullYear() + 1, 0, 1);
      const millisecondsToNewYear = newYear.getTime() - now.getTime();
      setTimeToNewYear(millisecondsToNewYear);
    };

    calculateTimeToNewYear();

    const intervalId = setInterval(calculateTimeToNewYear, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const displayCountdown = () => {
    if (timeToNewYear) {
      const days = Math.floor(timeToNewYear / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeToNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeToNewYear % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeToNewYear % (1000 * 60)) / 1000);
      
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return (
          <main className="flex min-h-screen items-center justify-center">
          <title>Happy New Years!</title>
          <div className="text-center max-w-md">
            <Image
              src="https://cdn.discordapp.com/attachments/982006538568859698/1191030711583514644/a431ba00724eaa727c263237e4f44254.jpg?ex=65a3f4c9&is=65917fc9&hm=5906bf15611ac891f6a9a621482236d1a5113f9b0d9dde44d4cef853e9fe9220&"
              alt="Happy New Year!"
              width={500}
              height={240}
              style={{ display: 'block', margin: '0 auto' }} // Center the image
            />
          </div>
        </main>
        );
      } else {
        return (
        <main className="flex min-h-screen items-center justify-center">
        <title>New Year is coming!</title>
        <div className="text-center max-w-md">
          <p>
            New Year in&nbsp;
            <code className="font-mono font-bold">{days}d {hours}h {minutes}m {seconds}s</code>
          </p>
          <Link href="https://github.com/Mikasuru"><p>Made by Mikasuru</p></Link>
        </div>
      </main>
        );
      }
    } else {
      return (
        <main>
        <title>Loading the time!</title>
        <p>Loading countdown...</p>
      </main>
      );
    }
  
  };

  return (
    <div>
      {displayCountdown()}
    </div>
  );
}

export default HomePage;
