import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Home from '../pages/index';

const Bookmarks = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/', undefined, { shallow: true });
  }, [router]);

  return <Home />;
};

export default Bookmarks;
