import { Button } from "./ui/button";

export function HeroSection() {
    return (
      <div className="bg-linear-to-br from-blue-50 to-indigo-100">
                <section id="home" className="container max-w-7xl mx-auto py-24 px-6 scroll-mt-16">
            <div className="grid md:grid-cols-2 items-center gap-12 justify-between">
            <div className="max-w-lg md:pr-8">
                <h2 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-left">
                Gerencie sua
                <br />
                <span className="text-primary">Associação</span>
                <br />
                de forma
                <br />
                inteligente
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                Plataforma completa para gestão de associados, pagamentos, eventos e relatórios. Simplifique sua administração com tecnologia moderna e intuitiva.
                </p>

                <div className="mt-8 flex items-center gap-4">
                <a className="hover:text-primary transition" href="#contact">
                    <Button size="lg" className="rounded-xl px-6 py-4" variant="blue">
                        Começar Gratuitamente
                    </Button>
                </a>
                <Button variant="outline" size="lg" className="rounded-xl px-6 py-4">Ver Demonstração</Button>
                </div>
            </div>

            <div className="flex justify-center md:justify-end">
                <div className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-6 shadow-2xl transition-transform duration-500 ">
                    <div className="overflow-hidden rounded-lg ">
                    <img src="/system_preview.webp" alt="dashboard" className="block w-[460px] max-w-full h-auto" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
      </div>
    )
}