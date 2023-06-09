import { Accessibility, HowToReg, ThumbUp } from '@mui/icons-material';
import { Card, Typography, styled } from '@mui/material';

export const Reasons = () => {
  return (
    <Root className="container">
      {/*<Typography fontWeight={600} variant="h4" mb="30px" textAlign="center">*/}
      {/*  Почему стоит выбрать нас?*/}
      {/*</Typography>*/}
      <Grid>
        <Item>
          <IconWrapper>
            <ThumbUp />
          </IconWrapper>
          <ItemTitle>Уникальность</ItemTitle>
          <ItemText>
            Наша платформа является универсальной и подходит для всех возрастных категорий и полов. Мы уверены, что
            каждый человек должен следить за своим здоровьем и делать все возможное для его укрепления. Поэтому мы
            создали платформу, которая поможет вам достичь этой цели.
          </ItemText>
        </Item>
        <Item>
          <IconWrapper>
            <Accessibility />
          </IconWrapper>
          <ItemTitle>Удобство</ItemTitle>
          <ItemText>
            Кроме того, мы предлагаем простой и удобный интерфейс, который позволяет быстро найти необходимую информацию
            и выбрать подходящие витамины. Наша команда профессионалов постоянно работает над улучшением функционала и
            обновлением базы данных, чтобы вы могли получать только самую актуальную информацию.
          </ItemText>
        </Item>
        <Item>
          <IconWrapper>
            <HowToReg />
          </IconWrapper>
          <ItemTitle>Надежность</ItemTitle>
          <ItemText>
            Выбрав нашу платформу, вы получите надежного партнера в борьбе за свое здоровье и благополучие. Мы
            гарантируем высокое качество сервиса и индивидуальный подход к каждому клиенту. Присоединяйтесь к нам и
            начните заботиться о своем здоровье уже сегодня!
          </ItemText>
        </Item>
      </Grid>
    </Root>
  );
};

const Root = styled('div')(({ theme }) => ({
  marginBottom: '64px',
}));

const Grid = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const Item = styled(Card)(({ theme }) => ({
  width: '30%',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: '24px',
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  marginBottom: '32px',
  '& svg': {
    width: '50px',
    height: '50px',
    '& path': {
      fill: '#4cb5ab',
    },
  },
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: '16px',
  color: '#383942',
}));

const ItemText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: '#383942',
}));
