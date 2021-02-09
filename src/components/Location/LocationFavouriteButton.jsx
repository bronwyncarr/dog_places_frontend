import styled from "styled-components/macro";

const Icon = styled.div`
  font-size: 2rem;
  color: #ff8b8b;
  cursor: pointer;
`;

function LocationFavouriteButton({ favourite, handleClick }) {
  return (
    // If location is a favourite, a coloured in heart is displayed, if not an outline heart is displayed.
    // Tooptip and alternative button included for sr accessibility.
    <>
      {favourite ? (
        <>
          <Icon
            className="fas fa-heart"
            onClick={handleClick}
            aria-hidden="true"
            title="Unlike"
          ></Icon>
          <button className="sr-only" onClick={handleClick}>
            Like
          </button>
        </>
      ) : (
        <>
          <Icon
            className="far fa-heart"
            onClick={handleClick}
            aria-hidden="true"
            title="Like"
          ></Icon>
          <button className="sr-only" onClick={handleClick}>
            Unlick
          </button>
        </>
      )}
    </>
  );
}

export default LocationFavouriteButton;
