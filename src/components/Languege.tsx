"use client"

import { ChevronDown, LucideBluetoothConnected } from 'lucide-react';
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Language = () => {
  const [language, setLanguage] = useState("English");
  const [showOptions, setShowOptions] = useState(true);
  console.log("fuck you")
  const handleChangeLanguage = (newLanguage: React.SetStateAction<string>) => {
    setLanguage(newLanguage);
    setShowOptions(false); // Hide the language options after selecting
  };

  return (
    <div className="full-width relative flex items-center gap-2">
      <p>{language}</p>
      <ChevronDown onClick={() => console.log("hello world")} />
      {showOptions && (
        <Card className="absolute top-6 right-56 p-5 flex flex-col gap-5" >
          <button className="flex items-center text-center" onClick={() => console.log("hello world")}>
            <p onClick={() => console.log("hello world")}>English</p>
          </button>
          <button className="flex items-center text-center" onClick={() => handleChangeLanguage("Sesotho")}>
            Sesotho
          </button>
        </Card>
      )}
    </div>
  );
};

export default Language;
