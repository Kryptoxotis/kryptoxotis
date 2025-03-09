import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="metallic-bg py-20 relative">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg border-2 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(45,212,191,0.2)] to-[rgba(45,212,191,0.1)] rounded-lg"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Team working on programming"
              width={600}
              height={600}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </div>

          <div className="space-y-6 bg-[rgba(10,10,10,0.8)] p-6 rounded-lg border-2 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.2)]">
            <div className="inline-block rounded-full bg-[#080808] px-3 py-1 text-sm text-[#2dd4bf]">
              About Kryptoxotis
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pioneering Digital Transformation Through Code
            </h2>
            <p className="text-[#f1f5f9] text-lg">
              At Kryptoxotis, we blend technical expertise with creative problem-solving to deliver exceptional digital
              solutions. Our team of skilled developers and automation specialists work collaboratively to transform
              your most complex challenges into elegant, efficient systems.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-[#080808] border-2 border-[#2dd4bf] p-4 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors shadow-[0_0_10px_rgba(45,212,191,0.15)]">
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-[#2dd4bf] group-hover:text-white transition-colors">5+</div>
                  <div className="mt-1 text-[#f1f5f9]">Years of Experience</div>
                </div>
              </div>
              <div className="rounded-lg bg-[#080808] border-2 border-[#2dd4bf] p-4 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors shadow-[0_0_10px_rgba(45,212,191,0.15)]">
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-[#2dd4bf] group-hover:text-white transition-colors">100+</div>
                  <div className="mt-1 text-[#f1f5f9]">Projects Completed</div>
                </div>
              </div>
              <div className="rounded-lg bg-[#080808] border-2 border-[#2dd4bf] p-4 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors shadow-[0_0_10px_rgba(45,212,191,0.15)]">
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-[#2dd4bf] group-hover:text-white transition-colors">50+</div>
                  <div className="mt-1 text-[#f1f5f9]">Happy Clients</div>
                </div>
              </div>
              <div className="rounded-lg bg-[#080808] border-2 border-[#2dd4bf] p-4 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors shadow-[0_0_10px_rgba(45,212,191,0.15)]">
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-[#2dd4bf] group-hover:text-white transition-colors">24/7</div>
                  <div className="mt-1 text-[#f1f5f9]">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

