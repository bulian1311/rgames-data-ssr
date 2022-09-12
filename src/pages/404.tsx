import type { NextPage } from 'next';
import Link from 'next/link';
import { Block, Headline } from '@components';

const NotFound: NextPage = () => {
  return (
    <>
      <Block>
        <Headline tag="h2">Такай страницы нет!</Headline>
        <Link href="/">
          <a>Перейти на главную.</a>
        </Link>
      </Block>
    </>
  );
};
export default NotFound;
