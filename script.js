document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll(".rating");
  
    ratings.forEach((ratingContainer) => {
      const stars = ratingContainer.querySelectorAll(".star");
      const avgRatingDisplay = ratingContainer.nextElementSibling.querySelector(".average-rating");
      let currentRating = parseFloat(avgRatingDisplay.textContent);
  
      const updateRating = (movieId, newRating) => {
        console.log(`Movie ID: ${movieId}, New Rating: ${newRating}`);
        currentRating = (currentRating + newRating) / 2;
        avgRatingDisplay.textContent = currentRating.toFixed(1);
      };
  
      stars.forEach((star) => {
        star.addEventListener("mouseover", () => {
          const value = parseInt(star.dataset.value);
          stars.forEach((s, index) => s.classList.toggle("active", index < value));
        });
  
        star.addEventListener("mouseout", () => {
          stars.forEach((s, index) => s.classList.toggle("active", index < currentRating));
        });
  
        star.addEventListener("click", () => {
          const value = parseInt(star.dataset.value);
          updateRating(ratingContainer.dataset.movieId, value);
          stars.forEach((s, index) => s.classList.toggle("active", index < value));
        });
      });
    });
  });