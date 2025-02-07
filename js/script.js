const jsConfetti = new JSConfetti();
jsConfetti.addConfetti();
// gsap.from("#text", {
//   duration: 2,           // Duration of the animation (in seconds)
//   text: {                // The TextPlugin will animate the text
//     value: "",           // Start with an empty string
//     delimiter: "",       // The delimiter (no space, no break)
//   },
//   delay: 0.5,            // Optional delay before the animation starts
// });

let textElement = document.getElementById('text');
let text = textElement.innerText;

 textElement.innerHTML = text
    .split("")
    .map(letter => `<span class="char">${letter}</span>`)
    .join("");

let chars = document.querySelectorAll(".char");

  // Now animate each letter with GSAP (opacity from 0 to 1)
  gsap.from(chars, {
    opacity: 0,
    duration: 1, // Duration for each letter's animation
    delay: () => Math.random() * 2, // Random delay for each letter (max delay of 2 seconds)
    stagger: 0.1, // Slight stagger to ensure they appear one by one
    ease: "power1.out", // Optional easing for smoother transitions
  });
