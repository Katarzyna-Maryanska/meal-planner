import { Banner } from "components/pages/shared";
import { Layout, SEO } from "components/app";
import { MenuGenerator, Reviews } from "components/pages/homepage";
import bannerImage from "assets/images/tarta.jpg";

const HomePage = () => (
  <>
    <SEO
      title="DietPlanner | Home page"
      metatitle="DietPlanner | Home page"
      description="Lets generate menu"
    />
    <Layout>
      <Banner src={bannerImage}>Cooking a delicious food easily</Banner>
      <MenuGenerator />
      <Reviews />
    </Layout>
  </>
);

export default HomePage;
