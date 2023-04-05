import { NextSeo } from 'next-seo';
import Notice from '@notice-org/react-notice';
import Page from '@/components/page';
import Header from '@/components/header2';
import Footer from '@/components/footer';

const NoticeApp = () => <Notice projectid="dedcf7a3-51f4-4061-bfe8-229ba066e22c" />;
export default function Home() {
  return (
    <Page>
      <NextSeo title="Sellersea.com" description="The Complete Livestreaming Ecommerce Solution!" />
      <Header />
      <main>
        <NoticeApp />
      </main>
      <Footer />
    </Page>
  );
}
