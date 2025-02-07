const jsConfetti = new JSConfetti();
jsConfetti.addConfetti();
gsap.from("#text", {
  duration: 2,           // Duration of the animation (in seconds)
  text: {                // The TextPlugin will animate the text
    value: "",           // Start with an empty string
    delimiter: "",       // The delimiter (no space, no break)
  },
  delay: 0.5,            // Optional delay before the animation starts
});
