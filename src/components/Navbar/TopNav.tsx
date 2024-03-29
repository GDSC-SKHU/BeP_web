import React, { useState, useEffect } from 'react';
import { Typography, Avatar } from '@mui/material';
import { user } from '../../constants/mapConstants';
import { ThemeProvider } from '@mui/material/styles';
import Mission from '../Mission/Mission';
import DrawerButtonTheme from '../../styles/DrawerButton';
import { useDispatch } from 'react-redux';
import { active } from '../Store/module/globalmodal';
import { useRouter } from 'next/router';
import DonateList from '../Mission/Donate/DonateList';
import styled from 'styled-components';
import Image from 'next/image';

export type propsFunction = () => void;
function MyAppBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userpoint, setUserPoint] = useState<string>('');
  const [img, setImg] = useState<string | undefined>('');
  const [missonDrawer, setMissonOpen] = useState<boolean>(false);
  const [donatelistDrawer, setDonateListOpen] = useState<boolean>(false);

  useEffect(() => {
    const newimg = sessionStorage.getItem(user.userimgURL);
    if (typeof newimg === 'string') {
      setImg(newimg);
    }
  }, [
    typeof window !== 'undefined' && sessionStorage.getItem(user.userimgURL),
  ]);

  useEffect(() => {
    const point = sessionStorage.getItem('userPoint');
    if (point !== null) {
      setUserPoint(() => point);
    }
  }, [sessionStorage.getItem('userPoint')]);

  const HandleClickAvatar = () => {
    if (sessionStorage.getItem(user.userimgURL) && true) {
      return;
    }
    dispatch(active());
    router.reload();
  };

  return (
    <>
      <div
        style={{
          marginRight: '20px',
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          gap: '6px',
        }}
      >
        <StyledUserPoint
          onClick={() => {
            router.push('/articles');
          }}
        >
          <Image
            style={{ marginLeft: '5px' }}
            src="/img/point.png"
            alt="유저의 포인트"
            width={30}
            height={30}
          />
          <span
            style={{ color: 'black', fontWeight: '700', marginRight: '10px' }}
          >
            {userpoint}
          </span>
        </StyledUserPoint>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => setDonateListOpen(!donatelistDrawer)}
        >
          <Image
            src="/img/Menu.png"
            alt="Top Menu Image"
            width={35}
            height={35}
          />
        </div>

        <Typography></Typography>
        <Avatar
          src={img}
          alt="User Profile Img provided by Google"
          onClick={HandleClickAvatar}
          sx={{ width: 35, height: 35 }}
        />
        <ThemeProvider theme={DrawerButtonTheme}>
          <Avatar
            onClick={() => {
              setMissonOpen(!missonDrawer);
            }}
            src="/img/startBtn.jpg"
            sx={{
              width: 35,
              height: 35,
              position: 'fixed',
              bottom: '0',
              right: '0',
              marginRight: '20px',
              marginBottom: '20px',
            }}
            alt="toggle button that open misson"
          />
        </ThemeProvider>
        <DonateList state={donatelistDrawer} setState={setDonateListOpen} />
      </div>
      <Mission state={missonDrawer} setState={setMissonOpen} />
    </>
  );
}

const StyledUserPoint = styled.div`
  background: #ffffff;
  width: 140px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  height: 40px;
  font-weight: 500;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;
export default MyAppBar;
