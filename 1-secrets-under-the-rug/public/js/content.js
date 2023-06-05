fetch("/api/content", {
  method: "GET",
  credentials: "include",
})
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("message").innerText = data.message;
  })
  .catch((error) => {
    console.error("Error:", error);
    window.location.href = "/index.html";
  });
