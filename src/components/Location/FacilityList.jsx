import styled from "styled-components/macro";

const IconContainer = styled.span`
  font-size: 1.5rem;
`;

const Icon = styled.span`
  color: #00717a;
  display: inline;
  padding-right: 0.5rem;
`;

function FaciltiyList({ facilities }) {
  return (
    // Maps over facility list and displays icon with title and alt text for each facility
    <IconContainer>
      {facilities.map((element) => {
        switch (element) {
          case "Parking":
            return (
              <>
                <Icon
                  key={element}
                  className="fas fa-car"
                  title="Parking"
                  aria-hidden="true"
                ></Icon>
                <span className="sr-only">Parking</span>
              </>
            );
          case "Water":
            return (
              <>
                <Icon
                  key={element}
                  className="fas fa-faucet"
                  title="Water"
                  aria-hidden="true"
                ></Icon>
                <span className="sr-only">Water</span>
              </>
            );
          case "Food":
            return (
              <>
                <Icon
                  key={element}
                  className="fas fa-utensils"
                  title="Food"
                  aria-hidden="true"
                ></Icon>
                <span className="sr-only">Food</span>
              </>
            );
          case "Toilets":
            return (
              <>
                <span>
                  <Icon
                    key={element}
                    className="fas fa-restroom"
                    title="Toilets"
                    aria-hidden="true"
                  ></Icon>
                  <span className="sr-only">Toilets</span>
                </span>
              </>
            );
          case "Off Lead":
            return (
              <>
                <Icon
                  key={element}
                  className="fas fa-dog"
                  title="Off Lead"
                  aria-hidden="true"
                ></Icon>
                <span className="sr-only">Off-lead</span>
              </>
            );
          default:
            return null;
        }
      })}
    </IconContainer>
  );
}
export default FaciltiyList;
