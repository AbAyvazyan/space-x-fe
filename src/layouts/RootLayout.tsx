import Header from '@components/Header';
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full">
      <Header />
      {children}
    </section>
  );
};

export default RootLayout;
