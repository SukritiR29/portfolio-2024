"use client"

import React from "react";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";


const Code = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const totalLines = 100;
    const linesArray = Array.from(Array(totalLines).keys()).map(lineNumber => lineNumber + 1);
    setLines(linesArray);
  }, []);

  return (
    
    <div className="flex w-3/4 border-2 border-slate-900 m-2 bg-gray-900 rounded-xl overflow-hidden">
      <div className="navbar bg-slate-950" style={{height: '1px'}}>
  <div className="flex-1 p-0" style={{height: '1px'}}>
    <a className="btn btn-ghost text-sm">Sukriti.dev</a>
  </div>
  <div className="flex-none p-0" style={{height: '1px'}}>
    <ul className="menu menu-horizontal bg-lime-600 rounded-lg p-0">
      <li className="text-xs"><a>PROJECTS <FaPlay /></a></li>
    </ul>
  </div>
</div>
      <div className="flex-1">
        <textarea className="w-full h-96 bg-transparent outline-none resize-none p-2" placeholder="Enter your code here..." style={{height: '96%'}}></textarea>
      </div>
    </div>
  );
};

export default Code;
