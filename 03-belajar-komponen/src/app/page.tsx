import Profile from "../components/profile";
import Image from "next/image";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
   <main>
    <center>
    <p >Ilmuwan yang luar biasa</p>
    </center>
    <div className="columns-3">
            <Profile />
            <Profile />
            <Profile />
        </div>
    <Gallery/>
    
   </main>
  );
}
