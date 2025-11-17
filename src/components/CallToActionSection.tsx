import { Button } from "./ui/button";

export function CallToActionSection() {
    return (
    <section className=" bg-blue-600 text-white py-20">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Pronto para modernizar sua associação?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">Junte-se a centenas de associações que já transformaram sua gestão. Comece gratuitamente hoje mesmo!</p>

          <div className="flex justify-center items-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 text-lg font-semibold cursor-pointer whitespace-nowrap">Começar Gratuitamente</Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 text-lg font-semibold cursor-pointer whitespace-nowrap">Falar com Especialista</Button>
          </div>
        </div>
      </section>
    )
}