import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/ui/header";
import { ActivateAccountSection } from "@/components/ActivateAccountSection";

type ActivateAccountPageProps = {
  params: Promise<{ token: string }>;
};

export default async function ActivateAccountPage({ params }: ActivateAccountPageProps) {
  const { token } = await params;

  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Header />
      <main className="flex-1">
        <ActivateAccountSection token={token} />
      </main>
      <FooterSection />
    </div>
  );
}
