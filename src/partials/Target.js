import React from 'react';

function Target() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-6xl sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Section header */}
          <div className="pb-12 mx-auto max-w-3xl text-center md:pb-20">
            <h2 className="h2" data-aos="fade-up">
              Protect your Transactions and Protocol with SecureRPC
            </h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>
            {/* Item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div
                className="mx-auto mb-8 max-w-xl md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:rtl"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-target]"
              >
                <img
                  className="mx-auto md:max-w-none"
                  src={require('../images/developers-eth-blocks.png').default}
                  width="510"
                  height="510"
                  alt="MEV Service"
                />
              </div>

              {/* Content */}
              <div className="mx-auto max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div
                    className="mb-2 text-xl text-purple-600 font-cousine"
                    data-aos="fade-left"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    Automated and Best Routing Execution
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="mb-2 h4">
                      <span className="text-purple-600">.</span> Bundled
                      Transactions
                    </h4>
                    <p className="text-lg text-gray-400">
                      Combine multiple transactions into a block transaction and
                      the bundled transactions will be executed at the same
                      time. Bundled txs maximize your earnings.
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="mb-2 h4">
                      <span className="text-teal-500">.</span>No Charge on
                      Failed Txs
                    </h4>
                    <p className="text-lg text-gray-400">
                      Failed transactions will not be included in the packaged
                      blocks and you will not have to pay for failed
                      transactions.
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="mb-2 h4">
                      <span className="text-pink-500">.</span>Complete Privacy
                    </h4>
                    <p className="text-lg text-gray-400">
                      From the time the transaction is initiated until the
                      transaction is packaged and published on the blockchain,
                      no one will know about your transaction information except
                      yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Target;
/** @export Target */
