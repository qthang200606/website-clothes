let qty = 1;
  function changeMain(img) {
    document.getElementById("mainProductImage").src = img.src;
  }
  function increaseQty() {
    if (qty < 5) {
      qty++;
      document.getElementById("qty").innerText = qty;
    }
  }
  function decreaseQty() {
    if (qty > 1) {
      qty--;
      document.getElementById("qty").innerText = qty;
    }
  }
  function openCart() {
    alert("Giỏ hàng đang phát triển");
  }
  function closeModal() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
  }
  window.onclick = function (e) {
    document.querySelectorAll('.modal').forEach(m => {
      if (e.target === m) m.style.display = 'none';
    });
  }
  document.getElementById("toggle-category").onclick = function (e) {
    e.preventDefault();
    document.getElementById("category-menu").classList.toggle("active");
  };
 
  // Màu/Kích cỡ
  const labels = document.querySelectorAll(".options label");
  labels.forEach(label => {
    let current = label.nextElementSibling;
    const group = [];
    while (current && current.classList.contains("option-btn")) {
      group.push(current);
      current = current.nextElementSibling;
    }
    group.forEach(btn => {
      btn.addEventListener("click", () => {
        group.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  });
  // Gắn sự kiện click cho icon 💬 trên header
document.getElementById('chat-icon').onclick = function () {
  toggleChat();
};

function toggleChat() {
  const popup = document.getElementById('chat-popup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
  const msg = document.getElementById('chat-message').value.trim();
  if (msg) {
    alert("Tin nhắn của bạn đã gửi:\n" + msg);
    document.getElementById('chat-message').value = '';
    toggleChat();
  } else {
    alert("Vui lòng nhập nội dung.");
  }
}
// Gắn sự kiện mở/đóng thông báo
document.getElementById('notify-icon').onclick = function () {
  toggleNotify();
};

function toggleNotify() {
  const box = document.getElementById('notify-popup');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}
// Sự kiện click vào biểu tượng giỏ hàng
document.getElementById('cart-icon').onclick = function () {
  toggleCart();
};

function toggleCart() {
  const popup = document.getElementById('cart-popup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}
function toggleContact() {
  const contact = document.getElementById('contact-popup');
  contact.style.display = contact.style.display === 'block' ? 'none' : 'block';
}
function toggleAddToCart() {
  const qty = document.getElementById("qty").innerText;
  const popup = document.getElementById("addcart-popup");
  document.getElementById("added-qty").innerText = qty;
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}
function closeAddToCart() {
  document.getElementById("addcart-popup").style.display = "none";
}
function toggleBuyNow() {
  const qty = document.getElementById("qty").innerText;
  const popup = document.getElementById("buynow-popup");
  document.getElementById("buy-qty").innerText = qty;
  popup.style.display = "block";

  // Tự ẩn sau 3 giây
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

function closeBuyNow() {
  document.getElementById("buynow-popup").style.display = "none";
}