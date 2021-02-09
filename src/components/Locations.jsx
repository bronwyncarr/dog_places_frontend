import { useEffect, useState } from "react";
import axios from "axios";
import Map from "./Map";
import LocationsContainer from "./Location/LocationsContainer";
import useAuthHeaders from "../hooks/useAuthHeaders";
import styled from "styled-components/macro";
import useResize from "../hooks/useResize";
import SearchOptions from "./Search/SearchOptions";
import { Title } from "../styles/Layout";

const LocationsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  // This stops stops the content from making this flexbox outgrow the parent
  min-height: 0;
  align-items: stretch;
`;

const LocationsLayoutContainer = styled.div`
  width: 50%;
  overflow-y: auto;
  @media (max-width: 1400px) {
    overflow: visible;
    width: 100%;
  }
`;

const MapLayoutContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    width: 100;
  }
`;

const TitleLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 1.5rem 0;
`;

const Quote = styled.blockquote`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-style: italic;
`;

const Cite = styled.cite`
  font-weight: bolder;
  color: slategrey;
  font-style: none;
  font-size: 1.5rem;
`;

function Locations() {
  const [locations, setLocations] = useState([]);
  const config = useAuthHeaders();
  const { el, width, height } = useResize();
  const [radius, setRadius] = useState(5);

  const mapSize = {
    width: `${width * 0.9}px`,
    height: `${height * 0.9}px`,
  };

  // Use effect runs on to get all locations information to display
  useEffect(() => {
    async function getLocations() {
      try {
        const response = await axios(
          `${process.env.REACT_APP_BACKEND_URL}/locations`,
          config
        );
        setLocations(response.data);
      } catch (error) {
        console.error("Get Error");
      }
    }
    getLocations();
  }, [config]);

  return (
    <LocationsWrapper>
      <TitleLayoutContainer>
        <Title>Locations</Title>
        <Quote>
          “Everyone thinks they have the best dog. And none of them are wrong.”
        </Quote>
        <Cite>– W.R. Purche</Cite>
      </TitleLayoutContainer>
      <LayoutContainer>
        <MapLayoutContainer ref={el}>
          <SearchOptions
            setLocations={setLocations}
            setRadius={setRadius}
            radius={radius}
          ></SearchOptions>
          <Map size={mapSize} locations={locations} radius={radius} />
        </MapLayoutContainer>
        <LocationsLayoutContainer>
          <LocationsContainer locations={locations} />
        </LocationsLayoutContainer>
      </LayoutContainer>
    </LocationsWrapper>
  );
}

export default Locations;
