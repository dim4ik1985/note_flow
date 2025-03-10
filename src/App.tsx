import { Header, Hero, Navigation, Page, Reviews } from './components/sections';

export const App = () => {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
        <Reviews />
      </Header>
    </Page>
  );
};
