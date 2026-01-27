
import Navbar from "./component/Navbar";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Gallery from "./component/Gallery";
import Places from "./component/Places";
export const dynamic = 'force-dynamic'

const getLinkData = async () => {
  try {
    const base = process.env.NEXT_PUBLIC_API_URL ?? `http://localhost:${process.env.PORT ?? 3000}`;
    const url = new URL("/api/nav_data", base).toString();
    const response = await fetch(url, { next: { revalidate: 36 } });
    if (!response.ok) throw new Error(`Failed to fetch nav_data: ${response.status}`);
    return await response.json();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error fetching nav_data:", err);
    return [];
  }
};

export default async function Home() {
  const links = await getLinkData();
  const navLinks = Array.isArray(links) && links.length > 0 ? links[0] : [];
  return (
    <main className="min-h-screen bg-blue-100">
      <Navbar linksProp={navLinks} />
      <Hero />
      <div className="p-3" id="about"/>
      <About />
      <div className="p-3" id="gallery"/>
      <Gallery />
      <div className="p-3" id="places"/>
      <Places />
      <div className="p-4" id="contacts"/>
      <Contact />
    </main>
  );
}
