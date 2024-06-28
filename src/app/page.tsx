import Header from "@/components/header";
import Content from "@/components/main";

export default function Home() {
  return (
    <div id="container" className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <main className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Content />
      </main>
    </div>
  );
}
