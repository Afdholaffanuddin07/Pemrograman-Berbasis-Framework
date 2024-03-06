"use client";
import Tombol_1, { Tombol_2 } from "@/components/button";

export default function Home(){
  return(
    <>
    
      <h2>Kuis Kota</h2>
      
        <Tombol_1/>
        <hr /><hr />
        <Tombol_2 isiPesan="Ini Peanku" namaTombol="Tombol2"/>
        
      
    
    </>
  );
}