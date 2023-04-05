import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `1000 Viewers`,
  `4K/HD  View`,
  `15 Seats`,
  `15 Backstage Participants`,
  `4 Hours Prerecorded Stream`,
  `Your Own Ecommerce Store`,
  `1TB storage for Files and Videos`,
  `24/7 Support and Fixes`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-2xl lg:text-4xl font-bold text-gray-800 mb-12`)}>Get Started With SellerSea</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
            Start streaming your business to success. Focus on streaming and let SellerSea handle the rest, your current
            sales growth estimation by letting you focus on the tiny details while we focus on focus on the heavy work
            heavy work of order processing. Never miss a sale.
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-yellow-400`,
                )}
              >
                What is included
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-gray-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          <p className={tw(`text-lg font-medium text-gray-800`)}>If you order now...</p>
          <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
            $129.99/mo
          </div>
          <Button primary modifier="mt-6">
            Contact sales
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
