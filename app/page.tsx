import Image from "next/image";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ChevronRight, Code, Database, LineChart, Users, Building, Briefcase, Cog } from 'lucide-react'
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { OurServices } from "@/components/OurServices";
import { Quote } from "@/components/Quote";
import IndustriesCardList from "@/components/IndustriesCardList";
import { Footer } from "@/components/Footer";
import MeetTheTeam from "@/components/MeetTheTeam";


export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <SectionTitle title="AI/ML Services"/>
    <OurServices />
    <Quote/>
    <SectionTitle title="Industries We Serve"/>
    <IndustriesCardList/>
    <SectionTitle title="Meet The Team"/>
    <MeetTheTeam />
    <Footer/>
   </div>
  );
}
