import { FORM_LINK } from '@/constants/constants';
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
          <Link href={FORM_LINK} passHref>
            <NavItem>Форма</NavItem>
          </Link>
        </Navigation>
      </Header>
      {children}
      <FooterWrapper>
        <Footer className="container">
          <LogoWrapper>
            <Image src="/logo.png" alt="logo" width={1019} height={245} />
          </LogoWrapper>
          <Contact>
            <div>
              По вопросам продажи и покупки: <a href="tel:+77005006838">+7 700 500 68 38</a>{' '}
              <a href="tel:+77082791399">+7 708 279 13 99</a>
            </div>
            <span>Адрес: Толе би 59</span>
            <span>Все права защищены</span>
          </Contact>
        </Footer>
      </FooterWrapper>
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

const FooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#f0f0f7',
}));

const Footer = styled('footer')(({ theme }) => ({
  padding: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#8b8c9e',
}));

const Socials = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '16px',
}));

const Contact = styled('div')(({ theme }) => ({
  color: 'darkgrey',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  rowGap: '20px'
}));
