function LocationFavouriteButton({ favourite, handleClick }) {
  return (
    // If location is a favourite, a coloured in heart is displayed, if not an outline heart is displayed.
    // Tooptip and alternative button included for sr accessibility.
    <>
      {favourite ? (
        <>
          <i
            class="fas fa-heart"
            onClick={handleClick}
            aria-hidden="true"
            title="Unlick"
          ></i>
          <button class="sr-only" onClick={handleClick}>
            Like
          </button>
        </>
      ) : (
        <>
          <i
            class="far fa-heart"
            onClick={handleClick}
            aria-hidden="true"
            title="Like"
          ></i>
          <button class="sr-only" onClick={handleClick}>
            Unlick
          </button>
        </>
      )}
    </>
  );
}

export default LocationFavouriteButton;
