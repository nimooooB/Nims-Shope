
    // JavaScript for looping typewriter effect
    const texts = [
      "Check out our new clothes for Men & Women!",
      "Affordable, Trendy, & Ready to wear!"
    ];

    let textIndex = 0;
    let charIndex = 0;
    const speed = 100; // Adjust the speed of typing

    function type() {
      const currentText = texts[textIndex];
      if (charIndex < currentText.length) {
        if (textIndex % 2 === 0) {
          document.getElementById('typewriter-heading').innerHTML += currentText.charAt(charIndex);
        } else {
          document.getElementById('typewriter-paragraph').innerHTML += currentText.charAt(charIndex);
        }
        charIndex++;
        setTimeout(type, speed);
      } else {
        setTimeout(erase, 1000);
      }
    }

    function erase() {
      const currentText = texts[textIndex];
      if (charIndex > 0) {
        if (textIndex % 2 === 0) {
          document.getElementById('typewriter-heading').innerHTML = currentText.slice(0, charIndex - 1);
        } else {
          document.getElementById('typewriter-paragraph').innerHTML = currentText.slice(0, charIndex - 1);
        }
        charIndex--;
        setTimeout(erase, speed / 2);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      }
    }

    // Trigger the typing effect when the page is loaded
    window.onload = type;
  