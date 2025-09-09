import React from "react";
import { useState } from "react";

const Ebook = () => {
const [open, setOpen] = useState('translate-x-full')

  return (
    <>
    <div className="flex items-center justify-between gap-2 mb-4">
      <h4 className="font-semibold text-lg">Products</h4>
      <button 
      type="button" 
      className="bg-indigo-800 px-4 py-2 text-white rounded cursor-pointer" 
      onClick={() => setOpen('translate-x-0')}
      >
        Add Product
      </button>
    </div>
    <div className="grid grid-cols-4 gap-4">
      {Array(16)
        .fill(0)
        .map((item) => (
          <div className="p-3 border border-slate-200 rounded">
            <img
              src="https://random-image-pepebigotes.vercel.app/api/random-image"
              alt="image"
              className="w-full"
            />
            <div className="flex items-center gap-2 p-2">
              <span>499</span><del>699</del> <span>(20% off)</span>
            </div>
          </div>
        ))}
      </div>  
      <div className={`h-screen fixed top-0 right-0 bg-white shadow z-50 transition-all ${open}`} style={{width: '300px'}}>
          <div className="flex items-center gap-4 justify-between p-4 bg-slate-100">
            <h4>test</h4>
            <div className="inline-block">
            <button onClick={()=> setOpen('translate-x-full')} className="bg-red-500 px-4 py-2 text-white cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">X</button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Ebook;
