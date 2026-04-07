import Nav       from '@/components/Nav'
import Hero      from '@/components/Hero'
import About     from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact   from '@/components/Contact'
import Footer    from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-ink-black">
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
