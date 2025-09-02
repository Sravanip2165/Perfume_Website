document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");
  const productGrid = document.querySelector(".product-grid");

  let activeFilters = {
    category: null,
    brand: null,
    price: null,
    ingredient: null,
    benefit: null,
    extra: null,
    sort: null,
  };

  // Helper to show/hide based on filters
  function applyFilters() {
    products.forEach(product => {
      let price = parseInt(product.dataset.price);
      let show = true;

      if (activeFilters.category && product.dataset.category !== activeFilters.category) show = false;
      if (activeFilters.brand && product.dataset.brand !== activeFilters.brand) show = false;
      if (activeFilters.ingredient && product.dataset.ingredient !== activeFilters.ingredient) show = false;
      if (activeFilters.benefit && product.dataset.benefit !== activeFilters.benefit) show = false;
      if (activeFilters.extra && product.dataset.extra !== activeFilters.extra) show = false;

      if (activeFilters.price) {
        let [min, max] = activeFilters.price;
        if (!(price >= min && price <= max)) show = false;
      }

      product.style.display = show ? "block" : "none";
    });

    // Sorting
    if (activeFilters.sort) {
      let sorted = [...products].filter(p => p.style.display !== "none");
      if (activeFilters.sort === "low") {
        sorted.sort((a, b) => a.dataset.price - b.dataset.price);
      } else if (activeFilters.sort === "high") {
        sorted.sort((a, b) => b.dataset.price - a.dataset.price);
      }

      productGrid.innerHTML = "";
      sorted.forEach(p => productGrid.appendChild(p));
    }
  }

  // Event listeners for filter menus
  document.querySelectorAll(".dropdown-menu a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      let text = link.textContent.toLowerCase();

      if (["men", "women", "children", "all genders"].includes(text)) {
        activeFilters.category = text;
      } else if (["chanel", "dior", "gucci", "calvin klein", "versace"].includes(text)) {
        activeFilters.brand = text;
      } else if (text.includes("below")) {
        activeFilters.price = [0, 100];
      } else if (text.includes("200")) {
        activeFilters.price = [200, 500];
      } else if (text.includes("500 - 1000")) {
        activeFilters.price = [500, 1000];
      } else if (text.includes("1000 - 2000")) {
        activeFilters.price = [1000, 2000];
      } else if (text.includes("2000 - 5000")) {
        activeFilters.price = [2000, 5000];
      } else if (text.includes("above")) {
        activeFilters.price = [5000, Infinity];
      } else if (["citrus", "floral", "woody", "musk", "spicy", "fresh & aquatic"].includes(text)) {
        activeFilters.ingredient = text;
      } else if (["long lasting", "freshness", "luxury appeal", "everyday wear", "party/evening wear", "travel friendly"].includes(text)) {
        activeFilters.benefit = text;
      } else if (["best sellers", "new arrivals", "on discount", "gift sets", "unisex", "eco-friendly / natural"].includes(text)) {
        activeFilters.extra = text;
      } else if (text.includes("low to high")) {
        activeFilters.sort = "low";
      } else if (text.includes("high to low")) {
        activeFilters.sort = "high";
      } else if (text.includes("newest")) {
        activeFilters.sort = "new";
      } else if (text.includes("popular")) {
        activeFilters.sort = "popular";
      } else if (text.includes("discount")) {
        activeFilters.sort = "discount";
      }

      applyFilters();
    });
  });

  // ✅ CLEAR ALL button logic (PUT IT HERE)
  document.getElementById("clearFilters").addEventListener("click", () => {
    activeFilters = {
      category: null,
      brand: null,
      price: null,
      ingredient: null,
      benefit: null,
      extra: null,
      sort: null,
    };

    products.forEach(product => product.style.display = "block"); // show all
    productGrid.innerHTML = "";
    products.forEach(p => productGrid.appendChild(p)); // reset order
  });
});
