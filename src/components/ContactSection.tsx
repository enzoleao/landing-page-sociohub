import { ClockIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">Entre em Contato</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Tem dúvidas? Nossa equipe está pronta para ajudar você a escolher o melhor plano</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-6">Fale Conosco</h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <PhoneIcon className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-sm text-muted-foreground">(11) 9999-9999</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <MailIcon className="text-blue-600"/>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">contato@sualogo.com</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <ClockIcon className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Horário de Atendimento</div>
                    <div className="text-sm text-muted-foreground">Segunda a Sexta: 9h às 18h</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-2xl">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome</label>
                  <input type="text" placeholder="Seu nome completo" className="w-full border rounded-md px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" placeholder="seu@email.com" className="w-full border rounded-md px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Telefone</label>
                  <input type="text" placeholder="(11) 99999-9999" className="w-full border rounded-md px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea placeholder="Como podemos ajudar você?" className="w-full border rounded-md px-3 py-2 h-28"></textarea>
                </div>

                <div>
                  <Button size="md" className="w-full" variant="blue">Enviar Mensagem</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}