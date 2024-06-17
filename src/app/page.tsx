import BlogPost from "@/components/home/BlogPost";
import Cta from "@/components/home/Cta";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import MainFeatures from "@/components/home/MainFeatures";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className=''>
      <div className="hero-bg-gl ">
        <Hero />
      </div>
      <Partners />
      <MainFeatures />
      <Features />
      <Faq />
      <Testimonials />
      <BlogPost />
      <Cta />
    </main>
  )
}
