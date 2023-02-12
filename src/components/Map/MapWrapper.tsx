import { Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './Map';
import styled from 'styled-components';
const Map = () => {
  if (process.env.NEXT_PUBLIC_MAP_KEY)
    return (
      <StyledWrapper>
        <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
          <MapComponent />
        </Wrapper>
      </StyledWrapper>
    );

  return <div>error</div>;
};

const StyledWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Map;
