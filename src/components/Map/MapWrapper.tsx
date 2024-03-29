import { Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './Map';
import styled from 'styled-components';
import { memo } from 'react';
import MyAppBar from '../Navbar/TopNav';
const Map = () => {
  if (process.env.NEXT_PUBLIC_MAP_KEY)
    return (
      <StyledMain>
        <StyledMapWrapper>
          <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
            <MapComponent />
            <MyAppBar />
          </Wrapper>
        </StyledMapWrapper>
      </StyledMain>
    );
  return <div>error</div>;
};

const StyledMapWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5%;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  width: 100%;
`;

export default memo(Map);
