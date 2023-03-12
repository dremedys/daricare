import 'swiper/css';
import 'swiper/css/pagination';

import { Typography, styled, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { theme } from '@/theme';

export const HeroSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const height = isMobile ? '100vh' : '500px'

  return (
    <Root>
      <Swiper pagination={{ clickable: true }} autoplay loop centeredSlides modules={[Pagination]} spaceBetween={50}>
        <SwiperSlide
          style={{ height: height }}
        >
          <FirstBannerWrapper>
            <Container className="container">
              <Content>
                <Title variant="h3">Заказывайте лекарства онлайн и экономьте время</Title>
                <Description>
                  Персонализированный подбор витаминов - забота о вашем здоровье на новом уровне!
                </Description>
              </Content>
              <ImageWrapper>
                <Image src="/images/deliver-guy.png" width={400} height={420} layout="responsive" objectFit="contain" />
              </ImageWrapper>
            </Container>
          </FirstBannerWrapper>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: height }}
        >
          <SecondBannerWrapper>
            <Container className="container">
              <Content>
                <Title variant="h3" color="black">
                  Стань поставщиком и получай до 95% дохода
                </Title>
                <Description>
                  Сотрудничайте с нами и предоставляйте только высококачественные лекарства и витамины для заботы о
                  здоровье наших клиентов.
                </Description>
              </Content>
              <ImageWrapper>
                <Image src="/images/seller-girl.png" width={500} height={560} layout="responsive" objectFit="contain" />
              </ImageWrapper>
            </Container>
          </SecondBannerWrapper>
        </SwiperSlide>
      </Swiper>
    </Root>
  );
};

const Root = styled('div')`
  margin-bottom: 80px;
`;

const BannerWrapper = styled('div')`
  width: 100%;
  position: relative;
  height: 100%;

  //height: 435px;
  padding: 50px;
`;

const FirstBannerWrapper = styled(BannerWrapper)`
  background: #4cb5ab;
`;

const SecondBannerWrapper = styled(BannerWrapper)`
  background: #ff5733;
`;

export const Container = styled('div')`
  display: flex;
  height: 100%;
  padding: 0;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  ${props => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const Content = styled('div')`
  width: 50%;
  ${props => props.theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const ImageWrapper = styled('div')`
  width: 40%;
  height: 100%;
  ${props => props.theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const Title = styled(Typography)`
  color: white;
  margin-bottom: 24px;
`;

const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  color: 'white',
}));
