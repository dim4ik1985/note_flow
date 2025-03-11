// page
import { Page } from "./components/sections/Page.tsx";

// header
import { Header } from "./components/sections/Header.tsx";
import { Navigation } from "./components/sections/Navigation.tsx";
import { Hero } from "./components/sections/Hero.tsx";
import { Reviews } from "./components/sections/Reviews.tsx";

// main
import { Main } from "./components/sections/Main.tsx";
import { Logos } from "./components/sections/Logos.tsx";
import { Features } from "./components/sections/Features.tsx";
import { FaQs } from "./components/sections/FAQs/FAQs.tsx";
import { Testimonials } from "./components/sections/Testimonials/Testimonials.tsx";

// footer
import { Footer } from "./components/sections/Footer.tsx";

export const App = () => {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
        <Reviews />
      </Header>
      <Main>
        <Logos />
        <Features />
        <FaQs />
        <Testimonials />
      </Main>
      <Footer />
    </Page>
  );
};
