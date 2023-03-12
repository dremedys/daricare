import { styled } from '@mui/material';
import Image from 'next/image';
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
  justifyContent: 'space-between',
}));

const Navigation = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '20px',
}));

const LogoWrapper = styled('div')(({ theme }) => ({
  marginRight: '20px',
  width: '125px',
}));
