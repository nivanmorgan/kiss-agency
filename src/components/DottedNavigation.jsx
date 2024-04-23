import React from 'react';

import { navigation } from '../utils/constants';
import { slideInRight, slideInBottom } from '../utils/variants';
import { useNavStore } from '../utils/config';

const DottedNavigation = () => {
  // !NAVIGATION
  const navId = useNavStore((state) => state.navId);
  const updateNavId = useNavStore((state) => state.updateNavId);

  const navigateToFunction = async (link) => {
    window.scrollTo({ top: 0 });
    updateNavId(link);
  };

  return (
    <div className="w-full flex justify-center items-center absolute bottom-0 pb-[35px] gap-3">
      {navigation.map(({ link }, i) => (
        <button
          key={i}
          className={`w-[8px] h-[8px] rounded-full hover:bg-[--gray] ${
            navId === link ? 'bg-[--black]' : 'bg-[--neutral]'
          }`}
          onClick={() => navigateToFunction(link)}
        />
      ))}
    </div>
  );
};

export default DottedNavigation;
