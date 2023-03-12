import { styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }: Props) => {
  return (
    <Root>
      <Header className="container">
        <LogoWrapper>
          <Image src="/logo.png" alt="logo" width={1019} height={245} />
        </LogoWrapper>
        <Navigation>
          <Link href="/" passHref>
            <NavItem>Главная</NavItem>
          </Link>
          <Link href="/about" passHref>
            <NavItem>О нас</NavItem>
          </Link>
        </Navigation>
      </Header>
      {children}
    </Root>
  );
};

const Root = styled('div')(({ theme }) => ({}));

const Header = styled('header')(({ theme }) => ({
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'space-between',
}));

const Navigation = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '25px',
}));

const NavItem = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 500,
  color: 'rgb(38, 40, 66)',
}));

const LogoWrapper = styled('div')(({ theme }) => ({
  marginRight: '36px',
  width: '125px',
}));
