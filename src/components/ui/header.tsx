import { Button } from "./button";

export function Header() {

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "features", label: "Funcionalidades" },
    { id: "integrations", label: "Integrações" },
    { id: "reviews", label: "Avaliações" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full border-b bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto grid grid-cols-3 items-center  px-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Sócio Hub Logo" className="h-22" />
        </div>

        <nav className="hidden md:flex justify-center">
          <ul className="flex gap-8 text-sm text-muted-foreground items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-primary transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}