import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import Image from 'next/image';
import { Block, Headline } from '@components';
import { fetchChampions, fetchChampion } from '@services';
import { TResLolChampionFull } from '@types';

type TProps = {
  champion: TResLolChampionFull;
};

const ChampionPage: NextPage<TProps> = ({ champion }) => {
  const imgurl = `${process.env.API_URL}cdn/${process.env.API_VERSION}/img`;
  console.log(champion);

  return (
    <Block className="flex flex-col">
      <div className="flex gap-4">
        <Image
          src={`${imgurl}/champion/${champion.image.full}`}
          width={120}
          height={120}
        />
        <div className="flex flex-col justify-between">
          <Headline>{`${champion.id} (${champion.name})`}</Headline>
          <div className="flex gap-1">
            <Image
              src={`${imgurl}/passive/${champion.passive.image.full}`}
              width={50}
              height={50}
            />
            {champion.spells.map((spell) => (
              <Image
                key={spell.id}
                src={`${imgurl}/spell/${spell.image.full}`}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const champions = await fetchChampions();

  const paths = champions.map((champ) => ({
    params: { pid: champ.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) return { notFound: true };

  const champion = await fetchChampion(params.pid as string);

  if (!champion) return { notFound: true };

  return {
    props: { champion },
  };
};

export default ChampionPage;
