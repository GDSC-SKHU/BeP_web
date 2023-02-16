import { useRef, useState, useEffect } from 'react';
import swal from 'sweetalert';
import styled from 'styled-components';
import msg from '../../constants/mapConstants';

const MapComponent = () => {
  //미션 성공 여부 전역적으로 관리해야 함

  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const [iscontain, setIsContain] = useState<boolean>(false);
  const [, setZoom] = useState<number>();

  const center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0,
  };

  //맵을 눌렀을 떄
  const onclick = () => {
    // 나라의 위도와 경도가 포함되는지 (임시 나라 위치)
    const temp: google.maps.LatLngLiteral = {
      lng: 127,
      lat: 37,
    };
    if (typeof map === 'undefined') {
      return;
    }
    if (map.getBounds()?.contains(temp) && !iscontain) {
      setIsContain(true);
      setZoom(map.getZoom());
      swal(msg.sucessMain, msg.successBody, 'success');
    }
  };

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom: 5,
          minZoom: 4,
        })
      );
    }
  }, [ref, map]);

  return (
    <MapArea
      ref={ref}
      onClick={() => onclick()}
      onDoubleClick={() => onclick()}
    />
  );
};

const MapArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 560px;
    height: 500px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 80vh;
  }
`;

export default MapComponent;
