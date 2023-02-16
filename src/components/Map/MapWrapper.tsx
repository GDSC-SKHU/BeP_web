import { Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './Map';
import styled, { css } from 'styled-components';
import { useState } from 'react';

const Map = ({ children }: { children: JSX.Element }) => {
  const [modal, setModal] = useState<boolean>(false);

  if (process.env.NEXT_PUBLIC_MAP_KEY)
    return (
      <StyledMain>
        <StyledMapWrapper state={modal}>
          <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
            <MapComponent />
          </Wrapper>
        </StyledMapWrapper>

        {modal && children}
      </StyledMain>
    );
  return <div>error</div>;
};

const StyledMapWrapper = styled.div<{ state: boolean }>`
  ${({ state }) => state === true && StyledModalClicked}
  ${({ state }) => state === false && StyledModal}
  width:100%;
  height: 100vh;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  width: 100%;
`;

const StyledModalClicked = css`
  opacity: 0.1;
`;

const StyledModal = css`
  opacity: 1;
`;

export default Map;
