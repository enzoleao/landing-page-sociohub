export function FooterSection() {
    return (
              <footer className="bg-slate-900 text-slate-200 py-16">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary">SUA LOGO</h3>
              <p className="mt-4 text-sm text-slate-300 max-w-xs">
                Plataforma completa para gestão de associações modernas e eficientes.
              </p>

              <div className="flex items-center gap-3 mt-4">
                <button className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10">
                  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.5v-2.9H10.5V9.2c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg>
                </button>
                <button className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10">
                  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.5 2.3.8.5.4.9.9 1.2 1.4.3.5.6 1.2.8 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.5 1.9-.8 2.3-.4.5-.9.9-1.4 1.2-.5.3-1.2.6-2.3.8-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.5-2.3-.8-.5-.4-.9-.9-1.2-1.4-.3-.5-.6-1.2-.8-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.5-1.9.8-2.3.4-.5.9-.9 1.4-1.2.5-.3 1.2-.6 2.3-.8C8.4 2.2 8.8 2.2 12 2.2zM12 5.8A6.2 6.2 0 105.8 12 6.2 6.2 0 0012 5.8zm0 1.9a4.3 4.3 0 11-4.3 4.3A4.3 4.3 0 0112 7.7zm6.4-2.6a1.4 1.4 0 11-1.4-1.4 1.4 1.4 0 011.4 1.4z"/></svg>
                </button>
                <button className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10">
                  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.5 18.5H6v-8h2.5v8zM7.2 8.9a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8zM18.5 18.5h-2.5v-4c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1v4.7H10.4v-8h2.4v1.1c.3-.5.9-1.1 2.1-1.1 1.5 0 2.7 1 2.7 3.1v4.9z"/></svg>
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Funcionalidades</li>
                <li>Integrações</li>
                <li>Dashboard</li>
                <li>Preços</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Contato</li>
                <li>Documentação</li>
                <li>Tutoriais</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Entrar</li>
                <li>Começar Agora</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
            <div>© {new Date().getFullYear()} Sócio Hub. Todos os direitos reservados.</div>
         
          </div>
        </div>
      </footer>
    )

}