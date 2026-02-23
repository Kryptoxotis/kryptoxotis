import { SectionTitle } from "@/components/ui/section-title"
import Image from "next/image"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQsSection } from "@/components/faqs-section"
import { getSection, getValues } from "@/lib/cms"

export default async function AboutPage() {
  const [hero, mission, vision, valuesOverview, valueHonor, valueDiscipline, valueInnovation, valueTelos, values] = await Promise.all([
    getSection("about", "hero").catch(() => null),
    getSection("about", "mission").catch(() => null),
    getSection("about", "vision").catch(() => null),
    getSection("about", "values").catch(() => null),
    getSection("about", "value-honor").catch(() => null),
    getSection("about", "value-discipline").catch(() => null),
    getSection("about", "value-innovation").catch(() => null),
    getSection("about", "value-telos").catch(() => null),
    getValues().catch(() => []),
  ])

  const heroHeading = hero?.heading ?? "Who We Are: The Kryptoxotis Story"
  const missionTitle = mission?.heading ?? "Our Mission"
  const missionBody = mission?.body ?? "To free people from what traps them — the repetitive tasks, the broken workflows, the manual processes that drain time and energy — so they can invest in what truly matters. We build custom dashboards, intelligent automation, and purpose-built web applications that give business owners their time back. Every system we create is designed to replace chaos with clarity, turning hours of manual work into minutes of automated precision. We believe technology should serve people, not the other way around. When your operations run themselves, you are free to focus on growth, your team, your family, and the vision that made you start in the first place."

  const visionTitle = vision?.heading ?? "Our Vision"
  const visionBody = vision?.body ?? "A world where business owners are no longer slaves to broken systems, endless busywork, or purposeless repetition — but free to live with intention, invest in their families, and build legacies rooted in faith and integrity. We envision a future where every small business has access to the same powerful technology that drives the largest companies, leveling the playing field through smart engineering and genuine partnership. Our north star is a generation of entrepreneurs who spend less time firefighting and more time building something that lasts."

  const valuesOverviewTitle = valuesOverview?.heading ?? "The TEK Framework"
  const valuesOverviewBody = valuesOverview?.body ?? "Our name comes from the Greek word Τεχνίτης (Technitís) — meaning craftsman or artisan. The letters T, E, and K don't just spell our identity — they define how we operate."

  const honorTitle = valueHonor?.heading ?? "T — Timí (Τιμή) — Honor"
  const honorBody = valueHonor?.body ?? "We hold ourselves to the highest standard — in our work, our word, and our relationships. Honor means delivering what we promise, treating every client's business as if it were our own, and never cutting corners."

  const disciplineTitle = valueDiscipline?.heading ?? "E — Epanorthosis (Επανόρθωση) — Discipline"
  const disciplineBody = valueDiscipline?.body ?? "Great results don't come from shortcuts. Discipline means structured execution, consistent effort, and a relentless focus on getting things right — from the first line of code to the final deployment."

  const innovationTitle = valueInnovation?.heading ?? "K — Kainotomía (Καινοτομία) — Innovation"
  const innovationBody = valueInnovation?.body ?? "Technology moves fast — and so do we. Innovation means constantly exploring better tools, smarter approaches, and creative solutions that keep our clients ahead of the curve."

  const telosTitle = valueTelos?.heading ?? "The Telos"
  const telosBody = valueTelos?.body ?? "Together, these values form our telos (τέλος) — our ultimate purpose: to build technology that is honorable in its intent, disciplined in its execution, and innovative in its impact."

  const defaultValues = [
    { letter: "T", english_name: "Honor", greek_name: "Timē", greek_script: "τιμή", pronunciation: "tee-MAY", short_description: "We hold ourselves to the highest standard — in our work, our word, and our relationships." },
    { letter: "E", english_name: "Discipline", greek_name: "Enkrateia", greek_script: "ἐγκράτεια", pronunciation: "en-KRAH-tay-ah", short_description: "Consistent effort, structured execution, and relentless focus on getting things right." },
    { letter: "K", english_name: "Innovation", greek_name: "Kainotomia", greek_script: "καινοτομία", pronunciation: "kai-no-toe-MEE-ah", short_description: "We push boundaries, turning the impossible into reality through creative tech solutions." },
  ]
  const valList = values.length > 0 ? values : defaultValues

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="metallic-text text-4xl md:text-5xl font-bold mb-6">{heroHeading}</h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title={missionTitle} />
              <p className="text-white mb-6">{missionBody}</p>
            </div>
            <div className="relative">
              <div className="cyber-border rounded-sm p-1 bg-black overflow-hidden">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-12%2014.30.06%20-%20A%20futuristic%20business-themed%20image%20representing%20empowerment%2C%20innovation%2C%20and%20technology-driven%20growth.%20The%20scene%20features%20a%20high-tech%20office%20with%20digi-Sp1fzhyrWlBRZPLoVSgeldlkaAqWvO.webp"
                    alt="Futuristic Business Solutions"
                    width={600}
                    height={600}
                    className="rounded-sm w-full aspect-square object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-lg font-medium">
                      Transforming ideas into revolutionary solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle title={visionTitle} centered />
            <p className="text-white text-lg">{visionBody}</p>
          </div>
        </div>
      </section>

      {/* TEK Values Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={valuesOverviewTitle} centered />
          <p className="text-white text-center max-w-2xl mx-auto mb-12">{valuesOverviewBody}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valList.map((val: any) => (
              <div key={val.english_name} className="text-center p-6 bg-zinc-900 rounded-sm cyber-border group hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-black mb-4 cyber-border group-hover:shadow-[0_0_15px_rgba(27,77,62,0.5)] transition-all duration-300">
                  <span className="text-2xl text-emerald-500 font-bold group-hover:animate-pulse">{val.letter}</span>
                </div>
                <h3 className="metallic-text text-xl font-bold mb-1">{val.english_name}</h3>
                {val.greek_name && (
                  <p className="text-emerald-400/70 text-sm mb-1">
                    {val.greek_name} ({val.greek_script})
                  </p>
                )}
                {val.pronunciation && (
                  <p className="text-zinc-500 text-xs italic mb-3">{val.pronunciation}</p>
                )}
                <p className="text-white">{val.short_description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Breakdown Sections */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {[
            { letter: "T", title: honorTitle, body: honorBody, greek: "τιμή" },
            { letter: "E", title: disciplineTitle, body: disciplineBody, greek: "ἐγκράτεια" },
            { letter: "K", title: innovationTitle, body: innovationBody, greek: "καινοτομία" },
          ].map((val) => (
            <div key={val.letter} className="max-w-3xl mx-auto cyber-border rounded-sm bg-black/50 overflow-hidden">
              <div className="flex">
                {/* Left accent bar + letter */}
                <div className="w-20 shrink-0 bg-gradient-to-b from-emerald-600 to-emerald-900 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold text-white">{val.letter}</span>
                  <span className="text-[10px] text-emerald-200/70 mt-1">{val.greek}</span>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="metallic-text text-xl font-bold mb-2">{val.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{val.body}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Telos — callout block */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <div className="cyber-border rounded-sm bg-black/60 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
              <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">τέλος</p>
              <h3 className="metallic-text text-2xl font-bold mb-4">{telosTitle}</h3>
              <p className="text-zinc-300 text-lg leading-relaxed">{telosBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQsSection />
    </div>
  )
}
