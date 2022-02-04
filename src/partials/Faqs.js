import React from 'react';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-0">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2">Frequently asked questions</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:col-gap-16 lg:row-gap-12">
            <li>
              <h4 className="text-xl font-medium mb-2">
                Near zero-cost trading fees for users
              </h4>
              <p className="text-lg text-gray-400">
                By leveraging batching, miner transaction flow, and providing
                additional performant utilities (e.g. faster calculations for
                finalizing), OpenMEV enables gasless trading on Layer 1 Ethereum
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">
                Efficiency by Aggregation
              </h4>
              <p className="text-lg text-gray-400">
                OpenMEV is a strategy in which we maximize profits from user
                actions. This normally gets distributed for free to miners and
                bots via MEV (miner extracted value). We then extract this value
                and provide these profits as <b>cashback/rebates</b> back to
                users.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Gas Pricing</h4>
              <p className="text-lg text-gray-400">
                Our gas pricing service utilizes noise-reduction (i.e. removing
                outlier transactions) to provide accurate gas pricing
                predictions.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">
                How is this different than flashbots?
              </h4>
              <p className="text-lg text-gray-400">
                Flashbots provides an open platform for arbitrage and MEV
                transactions. We contribute to flashbots, we see our stack as
                building ontop of flashbots.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">
                Do mining pools have to run your client?
              </h4>
              <p className="text-lg text-gray-400">
                No! In fact we work with mining pools to enhance their block
                propagation, sort of like how a CDN network helps distribute
                content for web applications.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">
                Who are you working with?
              </h4>
              <p className="text-lg text-gray-400">
                Our current partners include Sushiswap and Eden Network.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
