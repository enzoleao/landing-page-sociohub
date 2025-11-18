import { Button } from "./ui/button";

export function HeroSection() {
    return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100">
                <section id="home" className="container max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 scroll-mt-16">
            <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 justify-between">
            <div className="max-w-xl md:pr-8">
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 md:text-left text-center">
                Gerencie sua
                <br />
                <span className="text-primary">Associação</span>
                <br />
                de forma
                <br />
                inteligente
                </h2>
                <p className="mt-6 text-base md:text-lg text-muted-foreground text-center md:text-left">
                Plataforma completa para gestão de associados, pagamentos, eventos e relatórios. Simplifique sua administração com tecnologia moderna e intuitiva.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a className="hover:text-primary transition" href="#contact">
                    <Button size="lg" className="rounded-xl px-6 py-4 w-full sm:w-auto" variant="blue">
                        Começar Gratuitamente
                    </Button>
                </a>
                <Button variant="outline" size="lg" className="rounded-xl px-6 py-4 w-full sm:w-auto">Ver Demonstração</Button>
                </div>
            </div>

            <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                <div className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl transition-transform duration-500 ">
                    <div className="overflow-hidden rounded-lg ">
                    <img src="/system_preview.webp" alt="dashboard" className="block w-full max-w-[460px] h-auto" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
      </div>
    )
}