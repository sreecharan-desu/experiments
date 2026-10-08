import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HomePage from "@/pages/HomePage";

export default function App() {
  return (
    <div
      id="top"
      className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container"
    >
      <Header />
      <main className="w-full bg-surface pt-20">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
