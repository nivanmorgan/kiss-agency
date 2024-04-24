import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { useNavStore } from '../../utils/config';

import {
  useAboutWidthStore,
  useContainerWidthStore,
  useValuesWidthStore,
} from '../../utils/config';
import { navigation } from '../../utils/constants';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const NavLink = ({ text, link, contact, scrollPoint }) => {
  // const updateNavId = useNavStore((state) => state.updateNavId);
  // const navigate = (link) => {
  //   window.scrollTo({ top: 0 });
  //   updateNavId(link);
  // };

  return (
    <div className={`vertical-text`}>
      {scrollPoint ? (
        <a
          onClick={() => window.scrollTo(scrollPoint)}
          className={`capitalize text-[13px] font-bold cursor-pointer ${
            contact &&
            'bg-[--black] text-[--white] py-4 px-2 block text-nowrap '
          }`}
        >
          {text}
        </a>
      ) : (
        <a
          href={'#' + link}
          // onClick={() => (contact ? navigate('contact') : navigate(link))}
          className={`capitalize text-[13px] font-bold cursor-pointer ${
            contact &&
            'bg-[--black] text-[--white] py-4 px-2 block text-nowrap '
          }`}
        >
          {text}
        </a>
      )}
    </div>
  );
};

const SideNav = ({ y, animate }) => {
  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  const [screenSize, setScreenSize] = useState(getWindowsDimension());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerWidth = useContainerWidthStore((state) => state.width);
  const aboutWidth = useAboutWidthStore((state) => state.width);
  const valuesWidth = useValuesWidthStore((state) => state.width);

  // NAVIGATION SCROLL
  const heroScrollSize = screenSize.height * 4;
  const wrapperScrollSize = screenSize.height * 6;

  const contactPoint = heroScrollSize + wrapperScrollSize - 0;
  const aboutPoint = heroScrollSize;
  const valuesPoint =
    15 +
    heroScrollSize +
    (screenSize.width / containerWidth) * wrapperScrollSize;
  const servicesPoint =
    20 + valuesPoint + (valuesWidth / containerWidth) * wrapperScrollSize;
  const solutionsPoint =
    15 +
    servicesPoint +
    (screenSize.width / containerWidth) * wrapperScrollSize;

  const scrollPoints = [
    { top: 0, behavior: 'smooth' },
    { top: aboutPoint, behavior: 'smooth' },
    { top: valuesPoint, behavior: 'smooth' },
    { top: servicesPoint, behavior: 'smooth' },
    { top: solutionsPoint, behavior: 'smooth' },
    { top: contactPoint, behavior: 'smooth' },
    { top: aboutPoint, behavior: 'smooth' },
    { top: aboutPoint, behavior: 'smooth' },
    {
      top: heroScrollSize + wrapperScrollSize - screenSize.height,
      behavior: 'smooth',
    },
  ];

  return (
    <motion.div
      style={{ translateY: y && y }}
      transition={{ type: animate ? 'spring' : 'tween' }}
      className="absolute w-full h-full min-h-screen bg-[--neutral] overflow-y-scroll no-scrollbar pointer-events-auto"
    >
      <div className="flex flex-col-reverse items-center justify-center gap-4 py-[2rem] min-h-screen">
        {navigation.map((nav, i) =>
          screenSize.width >= 1280 ? (
            <NavLink key={i} text={nav.text} scrollPoint={scrollPoints[i]} />
          ) : (
            <NavLink key={i} text={nav.text} link={nav.link} />
          )
        )}
        {screenSize.width >= 1280 ? (
          <NavLink
            contact
            text="contact us"
            scrollPoint={scrollPoints[scrollPoints.length - 1]}
          />
        ) : (
          <NavLink contact text="contact us" link="contact" />
        )}
      </div>
    </motion.div>
  );
};

export default SideNav;
