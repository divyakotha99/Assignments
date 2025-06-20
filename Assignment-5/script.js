const products = [
  {
    title: "Bluetooth Speaker", description: "Compact and powerful speaker with crystal-clear sound.",
    category: "Audio", brand: "BoomBox", price: 1999, stock: 35,
    thumbnail: "https://via.placeholder.com/300x200?text=Speaker"
  },
  {
    title: "Laptop Stand", description: "Ergonomic stand to improve posture and cooling.",
    category: "Accessories", brand: "ProStand", price: 799, stock: 50,
    thumbnail: "https://via.placeholder.com/300x200?text=Laptop+Stand"
  },
  {
    title: "Wireless Mouse", description: "Smooth and responsive wireless mouse for everyday use.",
    category: "Peripherals", brand: "ClickPro", price: 499, stock: 75,
    thumbnail: "https://via.placeholder.com/300x200?text=Mouse"
  },
  {
    title: "Action Camera", description: "Capture adventures in 4K with this waterproof action cam.",
    category: "Camera", brand: "XCam", price: 4999, stock: 15,
    thumbnail: "https://via.placeholder.com/300x200?text=Action+Camera"
  },
  {
    title: "Smart Watch", description: "Stylish smart watch with heart rate monitor and GPS.",
    category: "Wearables", brand: "WristTech", price: 2999, stock: 60,
    thumbnail: "https://via.placeholder.com/300x200?text=Smart+Watch"
  },
  {
    title: "USB-C Hub", description: "Expand your laptop's connectivity with multiple ports.",
    category: "Accessories", brand: "Portify", price: 1299, stock: 40,
    thumbnail: "https://via.placeholder.com/300x200?text=USB-C+Hub"
  },
  {
    title: "Fitness Band", description: "Track your daily steps, calories, and sleep.",
    category: "Fitness", brand: "FitTrack", price: 999, stock: 85,
    thumbnail: "https://via.placeholder.com/300x200?text=Fitness+Band"
  },
  {
    title: "External Hard Drive", description: "1TB USB 3.0 external hard drive for backups.",
    category: "Storage", brand: "DataVault", price: 3499, stock: 22,
    thumbnail: "https://via.placeholder.com/300x200?text=Hard+Drive"
  },
  {
    title: "LED Monitor", description: "24-inch Full HD monitor with vivid display quality.",
    category: "Display", brand: "ViewMax", price: 7999, stock: 18,
    thumbnail: "https://via.placeholder.com/300x200?text=Monitor"
  },
  {
    title: "Mechanical Keyboard", description: "RGB backlit keys, great for typing and gaming.",
    category: "Peripherals", brand: "KeyMaster", price: 2299, stock: 30,
    thumbnail: "https://via.placeholder.com/300x200?text=Keyboard"
  },
  {
    title: "Portable Charger", description: "10,000mAh power bank with fast charging support.",
    category: "Power", brand: "ChargeIt", price: 899, stock: 70,
    thumbnail: "https://via.placeholder.com/300x200?text=Power+Bank"
  },
  {
    title: "Smartphone Tripod", description: "Lightweight tripod with phone holder and remote.",
    category: "Accessories", brand: "SteadyShot", price: 599, stock: 48,
    thumbnail: "https://via.placeholder.com/300x200?text=Tripod"
  },
  {
    title: "Noise Cancelling Headphones", description: "Enjoy immersive music and block outside noise.",
    category: "Audio", brand: "SilentBeats", price: 3299, stock: 20,
    thumbnail: "https://via.placeholder.com/300x200?text=Headphones"
  },
  {
    title: "Smart Light Bulb", description: "Control brightness and color from your phone.",
    category: "Smart Home", brand: "BrightLife", price: 499, stock: 65,
    thumbnail: "https://via.placeholder.com/300x200?text=Smart+Bulb"
  },
  {
    title: "Mini Projector", description: "Portable projector for home entertainment.",
    category: "Entertainment", brand: "PixCast", price: 5599, stock: 12,
    thumbnail: "https://via.placeholder.com/300x200?text=Projector"
  },
  {
    title: "VR Headset", description: "Step into the virtual world with immersive VR gear.",
    category: "Gaming", brand: "VirtuPlay", price: 8999, stock: 10,
    thumbnail: "https://via.placeholder.com/300x200?text=VR+Headset"
  },
  {
    title: "WiFi Router", description: "Dual-band router with extended coverage.",
    category: "Networking", brand: "NetZone", price: 2199, stock: 33,
    thumbnail: "https://via.placeholder.com/300x200?text=Router"
  },
  {
    title: "Smartphone Gimbal", description: "Stabilize your phone for smooth video recording.",
    category: "Videography", brand: "SteadyCam", price: 3499, stock: 14,
    thumbnail: "https://via.placeholder.com/300x200?text=Gimbal"
  },
  {
    title: "Laptop Backpack", description: "Waterproof and padded, suitable for 15.6” laptops.",
    category: "Travel", brand: "UrbanGear", price: 1299, stock: 44,
    thumbnail: "https://via.placeholder.com/300x200?text=Backpack"
  },
  {
    title: "Electric Kettle", description: "Fast-boiling, automatic shut-off kettle for quick tea.",
    category: "Appliances", brand: "BoilEase", price: 999, stock: 28,
    thumbnail: "https://via.placeholder.com/300x200?text=Kettle"
  }
];

const box = document.getElementById("box");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "col";
  card.innerHTML = `
    <div class="card h-100 shadow-sm" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#productModal">
      <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description.substring(0, 60)}...</p>
        <p class="mb-1"><strong>Category:</strong> ${product.category}</p>
        <p class="mb-1"><strong>Brand:</strong> ${product.brand}</p>
        <p class="mb-1"><strong>Price:</strong> ₹${product.price}</p>
        <p><strong>Stock:</strong> ${product.stock}</p>
      </div>
    </div>
  `;

  card.querySelector(".card").addEventListener("click", () => {
    document.getElementById("modalTitle").innerText = product.title;
    document.getElementById("modalImage").src = product.thumbnail;
    document.getElementById("modalImage").alt = product.title;
    document.getElementById("modalDescription").innerText = product.description;
    document.getElementById("modalCategory").innerText = product.category;
    document.getElementById("modalBrand").innerText = product.brand;
    document.getElementById("modalPrice").innerText = product.price;
    document.getElementById("modalStock").innerText = product.stock;
  });

  box.appendChild(card);
});
