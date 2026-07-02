"use client";

import { AlertCircleIcon, ClockIcon, MailIcon, MessageSquareIcon, PhoneIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";

type SpecialistPayload = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};

export function ContactSection() {
  const [formData, setFormData] = useState<SpecialistPayload>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const updateField = (field: keyof SpecialistPayload, value: string) => {
    setErrorMessage("");
    setSuccessMessage("");
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const contactChannels = [
    {
      icon: <PhoneIcon className="text-[#0b2c77]" />,
      title: "Telefone",
      description: "(91) 98836-0176",
    },
    {
      icon: <MailIcon className="text-[#0b2c77]" />,
      title: "E-mail",
      description: "contato@associamais.com.br",
    },
    {
      icon: <ClockIcon className="text-[#0b2c77]" />,
      title: "Horário",
      description: "Segunda a sexta-feira: 9h às 18h",
    },
    {
      icon: <MessageSquareIcon className="text-[#0b2c77]" />,
      title: "Atendimento consultivo",
      description: "Tire dúvidas sobre o sistema, implementação e os melhores planos para sua associação.",
    },
  ];

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (formData.fullName.trim().length < 3 || !/\S+@\S+\.\S+/.test(formData.email) || formData.phone.replace(/\D/g, "").length < 10 || formData.message.trim().length < 10) {
      setErrorMessage("Preencha nome, e-mail, telefone e sua dúvida com mais detalhes.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMessage("Recebemos sua mensagem. Um especialista retornará em breve.");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch {
      setErrorMessage("Não foi possível enviar sua dúvida no momento. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-specialist" className="py-16 scroll-mt-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7e2ef] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b2c77] shadow-sm">
              Atendimento consultivo
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Fale com um especialista</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Tire dúvidas sobre implantação, demonstração e adequação do plano ideal para sua associação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-6">Canais de atendimento</h3>

              <ul className="space-y-6">
                {contactChannels.map((channel, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef4fd]">
                      {channel.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{channel.title}</div>
                      <div className="text-sm text-muted-foreground">{channel.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-[0_20px_70px_rgba(11,44,119,0.08)] md:p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1">Nome completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Telefone</label>
                  <input
                    type="text"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(event) => updateField("phone", formatPhone(event.target.value))}
                    className="w-full rounded-md border px-3 py-2"
                    inputMode="numeric"
                    maxLength={15}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Sua dúvida</label>
                  <textarea
                    placeholder="Conte brevemente o que você precisa"
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    className="h-28 w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-md px-3 py-2">
                    <AlertCircleIcon className="size-4 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {successMessage && (
                  <div className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-md px-3 py-2">{successMessage}</div>
                )}

                <Button size="md" className="w-full" variant="blue" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar dúvida"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  Você também pode escrever direto para contato@associamais.com.br.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}
