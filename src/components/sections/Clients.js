import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class Clients extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className,
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider',
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <ul className="list-reset">
              <li className="reveal-from-top">
                <Image
                  src={require('./../../assets/images/gbv.svg')}
                  alt="GBV Capital"
                  width={124}
                  height={24}
                />
              </li>
              <li className="reveal-from-bottom" data-reveal-delay="150">
                <Image
                  src={require('./../../assets/images/p2p.svg')}
                  alt="p2p.org"
                  width={83}
                  height={30}
                />
              </li>
              <li className="reveal-from-top" data-reveal-delay="300">
                <Image
                  src={require('./../../assets/images/skynet.svg')}
                  alt="Skynet Trading"
                  width={125}
                  height={39}
                />
              </li>
              <li className="reveal-from-bottom" data-reveal-delay="450">
                <Image
                  src={require('./../../assets/images/marshland.svg')}
                  alt="Marshland"
                  width={150}
                  height={31}
                />
              </li>
              <li className="reveal-from-top" data-reveal-delay="600">
                <Image
                  src={require('./../../assets/images/moonrock.svg')}
                  alt="moonrock capital"
                  width={113}
                  height={30}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;
