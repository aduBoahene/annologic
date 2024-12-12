'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMember {
  name: string
  role: string
  bio: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
    
  {
    name: "George Boateng",
    role: "CEO & Founder",
    bio: "George has over 15 years of experience in tech and is passionate about creating innovative solutions.",
    imageUrl: "/GB.webp"
  },
  {
    name: "Emmanuel Koduah",
    role: "CTO",
    bio: "Emmanuel is a full-stack developer with a keen interest in AI and machine learning.",
    imageUrl: "/fred.jpeg"
  },
  {
    name: "Berlinda Anaman",
    role: "Head of Design",
    bio: "Berlinda brings her creative vision to life, ensuring our products are both beautiful and functional.",
    imageUrl: "/ba.jpg"
  },
  {
    name: "Fred Ayison",
    role: "Lead Developer",
    bio: "Fred is a coding wizard with a passion for clean, efficient code and scalable architectures.",
    imageUrl: "/mk.jpg"
  },
]

export default function MeetTheTeam() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50 p-4 md:w-[80%] md:mx-auto md:mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: 100 }} // Start from the right
              animate={isVisible ? { opacity: 1, x: 0 } : {}} // Slide into view
              transition={{ type: "spring", stiffness: 50, delay: index * 0.2 }} // Add delay for staggered animation
            >
              <Card className="overflow-hidden h-full">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center h-full">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                    <p className="text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
