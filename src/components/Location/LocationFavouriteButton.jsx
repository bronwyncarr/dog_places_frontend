function LocationFavouriteButton({ favourite, handleClick }) {
  return (
    // If location is a favourite, a coloured in heart is displayed, if not an outline heart is displayed.
    // Tooptip and alternative button included for sr accessibility.
    <>
      {favourite ? (
        <>
          <i
            className="fas fa-heart"
            onClick={handleClick}
            aria-hidden="true"
            title="Unlick"
          ></i>
          <button className="sr-only" onClick={handleClick}>
            Like
          </button>
        </>
      ) : (
        <>
          <i
            className="far fa-heart"
            onClick={handleClick}
            aria-hidden="true"
            title="Like"
          ></i>
          <button className="sr-only" onClick={handleClick}>
            Unlick
          </button>
        </>
      )}
    </>
  );
}

export default LocationFavouriteButton;
