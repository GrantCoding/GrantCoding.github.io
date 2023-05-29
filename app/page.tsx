import AboutSection from "@/components/AboutSection"
import HomeSection from "@/components/HomeSection"
import PortfolioSection from "@/components/PortfolioSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
    </main>

  )
}
