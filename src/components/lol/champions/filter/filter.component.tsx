import React, { useState } from 'react';
import clsx from 'clsx';
import { useChampions } from '@hooks';
import { ChampionsSearch } from './search';

import { Props } from './filter.props';

export const ChampionFilter = ({
  setRenderChampions,
  className,
  ...props
}: Props): JSX.Element => {
  const champions = useChampions();
  const [searchVavue, setSearchValue] = useState<string>('');

  const searchChampions = (value: string) => {
    setSearchValue(value);

    const filteredChampions = champions.filter((champ) => {
      const champRu = champ.name
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase());

      const champEng = champ.id
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase());

      return champRu || champEng;
    });

    setRenderChampions(filteredChampions);
  };

  return (
    <div className={clsx(className, 'flex flex-col')} {...props}>
      <ChampionsSearch
        searchValue={searchVavue}
        handleChange={searchChampions}
      />
    </div>
  );
};
