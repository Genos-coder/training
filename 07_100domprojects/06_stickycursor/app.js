document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const cursor = document.querySelector(".cursor");

  // Get the bounding box of the container
  const containerRect = container.getBoundingClientRect();

  container.addEventListener("mousemove", (e) => {
    // Calculate cursor position relative to the container
    // console.log(containerRect.left, containerRect.top);
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    // Ensure the cursor stays within the container
    if (
      x >= 0 &&
      x <= containerRect.width &&
      y >= 0 &&
      y <= containerRect.height
    ) {
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      //   cursor.style.opacity = "1"; // Show the cursor when inside the container
    } else {
      //   cursor.style.opacity = "0"; // Hide the cursor when outside
    }
  });

  container.addEventListener("mouseleave", () => {
    // cursor.style.opacity = "0"; // Hide cursor when mouse leaves container
  });

  container.addEventListener("mouseenter", () => {
    // cursor.style.opacity = "1"; // Show cursor when mouse enters container
  });
});
