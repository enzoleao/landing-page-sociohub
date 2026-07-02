import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/ui/header";
import { SignupStatusSection } from "@/components/SignupStatusSection";

type SignupStatusPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SignupStatusPage({ params }: SignupStatusPageProps) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Header />
      <main className="flex-1">
        <SignupStatusSection signupRequestId={id} />
      </main>
      <FooterSection />
    </div>
  );
}
