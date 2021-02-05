function LocationFavouriteButton({ favourite, handleClick }) {
  return (
    // If location is a favourite, a coloured in heart is displayed, if not an outline heart is displayed.
    <>
      {favourite ? (
        <i class="fas fa-heart" onClick={handleClick}></i>
      ) : (
        <i class="far fa-heart" onClick={handleClick}></i>
      )}
    </>
  );
}

export default LocationFavouriteButton;
