// Fetch data from JSON file
fetch('http://localhost:3000/output.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Iterate over each inner array (representing data from each sheet)
    data.forEach(sheetData => {
      // Iterate over each item in the inner array (representing a row of data)
      sheetData.forEach(i => {
        // Create Card
        let card = document.createElement("div");
        // Card should have category and should stay hidden initially
        card.classList.add("card", i.Category, "hide");

        // Image div
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        // Image tag
        let image = document.createElement("img");
        image.setAttribute("src", "../images/md-contact.png");
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);

        // Container
        let container = document.createElement("div");
        container.classList.add("container");
        // Student name
        let NAME = document.createElement("h5");
        NAME.classList.add("product-name");
        NAME.innerText = i.NAME;
        container.appendChild(NAME);

        // DOB
        let DOB = document.createElement("h6");
        DOB.innerText = i.DOB;
        container.appendChild(DOB);

        // LinkedIn profile
        let linkedin = document.createElement("a");
        linkedin.innerText = "LinkedIn Profile";
        linkedin.href = i["LinkedIn profile"];
        linkedin.target = "_blank";
        container.appendChild(linkedin);

        // Placement
        let Placement = document.createElement("h6");
        Placement.classList.add("product-name");
        Placement.innerText = i["Placement"];
        container.appendChild(Placement);

        // Job position
        let Job_position = document.createElement("h6");
        Job_position.classList.add("product-name");
        Job_position.innerText = i["Job Position"];
        container.appendChild(Job_position);

        // Domain name
        let domain = document.createElement("h6");
        domain.classList.add("domain-name");
        domain.innerText = i.Domains;
        container.appendChild(domain);

        card.appendChild(container);
        document.getElementById("products").appendChild(card);
      });
    });

    // Display all products when page loads
    filterProduct("all");
  })
  .catch(error => console.error('Error:', error));

// Search button click event
document.getElementById("search").addEventListener("click", performSearch);

// Search bar input keydown event
document.getElementById("search-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (card.textContent.toUpperCase().includes(searchInput)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

// Filter products by category
function filterProduct(value) {
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (value === "all" || card.classList.contains(value)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

// Initially display all products
window.onload = () => {
  // Display all products when page loads
  filterProduct("all");
};