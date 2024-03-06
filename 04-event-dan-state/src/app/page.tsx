"use client";
import Tombol_1, { Tombol_2, Tombol_3 } from "@/components/button";
import Gallery from "@/components/gallery";

export default function Home(){
  return(
    <>
    
      <h2>Kuis Kota</h2>
      <div>
        <Tombol_1/>
        <hr /><hr />
        <Tombol_2 isiPesan="Ini Peanku" namaTombol="Tombol2"/>
        </div>
        <br /><br />
        <div className="bg-red-300 " onClick={() => alert('Parent Element : Div')}>
          <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
        
          <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
          </div>  
          <br />
          <Gallery />
        
      
    
    </>
  );
}
