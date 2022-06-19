import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { lolDataService } from "../../../services";
import { TResLolChampionFull } from "../../../types";

type TProps = {
  champion: TResLolChampionFull;
};

const ChampionPage: NextPage<TProps> = ({ champion }) => {
  return (
    <div className="flex space-x-8">
      <h1>{champion.name}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const champions = await lolDataService.fetctChampions();

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

  const champion = await lolDataService.fetchChampion(params.pid as string);

  if (!champion) return { notFound: true };

  return {
    props: { champion },
  };
};

export default ChampionPage;
