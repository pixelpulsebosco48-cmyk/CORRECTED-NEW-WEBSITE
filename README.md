<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PortalPro - Customer Website</title>
  <style>
    :root {
      --bg: #0f172a;
      --panel: rgba(255,255,255,0.08);
      --panel-strong: #111827;
      --text: #e5e7eb;
      --muted: #94a3b8;
      --primary: #60a5fa;
      --secondary: #a78bfa;
      --accent: #34d399;
      --card: rgba(255,255,255,0.06);
      --shadow: 0 20px 60px rgba(0,0,0,0.25);
      --border: rgba(255,255,255,0.12);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
      font-family: Inter, Arial, sans-serif;
    }

    body {
      background:
        radial-gradient(circle at top left, rgba(96,165,250,0.18), transparent 30%),
        radial-gradient(circle at top right, rgba(167,139,250,0.18), transparent 30%),
        linear-gradient(180deg, #020617 0%, #0f172a 100%);
      color: var(--text);
      overflow-x: hidden;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(18px);
      background: rgba(2, 6, 23, 0.72);
      border-bottom: 1px solid var(--border);
    }

    .nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      position: relative;
    }

    .logo {
      font-size: 1.2rem;
      font-weight: 800;
      letter-spacing: 0.5px;
    }

    .nav-links {
      display: flex;
      gap: 1.2rem;
      flex-wrap: wrap;
    }

    .nav-links a {
      color: var(--muted);
      transition: 0.3s ease;
    }

    .nav-links a:hover {
      color: #fff;
    }

    .menu-btn {
      display: none;
      background: rgba(255,255,255,0.08);
      color: #fff;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 0.7rem 1rem;
      cursor: pointer;
    }

    .hero {
      min-height: 90vh;
      display: grid;
      place-items: center;
      padding: 4rem 1.5rem;
      position: relative;
      overflow: hidden;
    }

    .hero::before,
    .hero::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      filter: blur(40px);
      animation: float 10s ease-in-out infinite;
    }

    .hero::before {
      width: 420px;
      height: 420px;
      background: rgba(96,165,250,0.12);
      top: 10%;
      left: -10%;
    }

    .hero::after {
      width: 360px;
      height: 360px;
      background: rgba(167,139,250,0.12);
      bottom: 0;
      right: -10%;
      animation-direction: reverse;
    }

    .hero-inner {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      width: 100%;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 2rem;
      align-items: center;
    }

    .hero-copy {
      animation: fadeUp 0.9s ease both;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.9rem;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.06);
      border-radius: 999px;
      color: #cbd5e1;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 5vw, 5rem);
      line-height: 1.05;
      margin-bottom: 1rem;
    }

    .hero p {
      color: var(--muted);
      font-size: 1.05rem;
      max-width: 620px;
      margin-bottom: 1.5rem;
    }

    .actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      border: none;
      border-radius: 14px;
      padding: 0.95rem 1.3rem;
      font-weight: 700;
      cursor: pointer;
      transition: 0.3s ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: #fff;
      box-shadow: 0 12px 30px rgba(96,165,250,0.3);
    }

    .btn-secondary {
      background: rgba(255,255,255,0.08);
      color: #fff;
      border: 1px solid var(--border);
    }

    .btn:hover {
      transform: translateY(-2px) scale(1.01);
    }

    .hero-card,
    .card,
    .payment-box {
      background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 1.3rem;
      box-shadow: var(--shadow);
    }

    .hero-card {
      animation: fadeUp 1s ease both;
      animation-delay: 0.2s;
    }

    .floating {
      animation: float 8s ease-in-out infinite;
    }

    .mini-panel {
      background: rgba(15,23,42,0.65);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 1rem;
      margin-bottom: 1rem;
      transition: 0.3s ease;
    }

    .mini-panel:hover {
      transform: translateY(-3px);
      border-color: rgba(255,255,255,0.2);
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .stat {
      text-align: center;
      padding: 0.9rem;
      border-radius: 16px;
      background: rgba(255,255,255,0.06);
      border: 1px solid var(--border);
    }

    .stat strong {
      display: block;
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
    }

    section {
      padding: 5rem 1.5rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .section-sub {
      color: var(--muted);
      max-width: 750px;
      margin-bottom: 2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.2rem;
    }

    .card {
      transition: 0.3s ease;
      opacity: 0;
      transform: translateY(20px);
    }

    .card.visible {
      opacity: 1;
      transform: translateY(0);
      transition: 0.7s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      border-color: rgba(255,255,255,0.22);
    }

    .card h3 {
      margin-bottom: 0.7rem;
    }

    .card p,
    .mini-panel p,
    .payment-item small,
    .status {
      color: var(--muted);
    }

    .portal {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
      align-items: start;
    }

    .payment-box {
      background: linear-gradient(180deg, rgba(96,165,250,0.12), rgba(167,139,250,0.08));
    }

    .payment-list {
      display: grid;
      gap: 0.9rem;
      margin-top: 1rem;
    }

    .payment-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 16px;
      background: rgba(255,255,255,0.07);
      border: 1px solid var(--border);
    }

    .link-input {
      width: 100%;
      margin-top: 1rem;
      padding: 0.95rem 1rem;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: rgba(2, 6, 23, 0.8);
      color: #fff;
      outline: none;
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    .footer {
      padding: 2rem 1.5rem;
      text-align: center;
      color: var(--muted);
      border-top: 1px solid var(--border);
      background: rgba(2, 6, 23, 0.8);
    }

    .pulse {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--accent);
      display: inline-block;
      box-shadow: 0 0 0 rgba(52, 211, 153, 0.7);
      animation: pulse 2s infinite;
    }

    .customize-actions {
      margin-top: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .list {
      color: var(--muted);
      padding-left: 1.2rem;
      line-height: 1.9;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-18px) scale(1.05); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
      70% { box-shadow: 0 0 0 12px rgba(52, 211, 153, 0); }
      100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
    }

    @media (max-width: 900px) {
      .hero-inner,
      .portal {
        grid-template-columns: 1fr;
      }
      .hero {
        min-height: auto;
        padding-top: 3rem;
      }
    }

    @media (max-width: 640px) {
      .nav {
        flex-direction: column;
        align-items: flex-start;
      }
      .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        padding-top: 1rem;
      }
      .nav-links.open {
        display: flex;
      }
      .menu-btn {
        display: inline-block;
        position: absolute;
        right: 1.5rem;
        top: 1rem;
      }
      .hero h1 {
        font-size: 2.4rem;
      }
      .stats {
        grid-template-columns: 1fr;
      }
      .actions,
      .customize-actions {
        flex-direction: column;
        align-items: stretch;
      }
    }
  </style>
</head>
<body>
  <header>
    <nav class="nav">
      <div class="logo">PortalPro</div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#portal">Portal</a>
        <a href="#payments">Payments</a>
        <a href="#customize">Customize</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="menu-btn" id="menuBtn">Menu</button>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-inner">
        <div class="hero-copy">
          <div class="badge"><span class="pulse"></span> Customer portal with payment links</div>
          <h1>All-in-One Website for Customers, Payments, and Customization</h1>
          <p>
            Build a modern, animated website with a customer room, payment link manager, and easy branding controls.
          </p>
          <div class="actions">
            <button class="btn btn-primary" onclick="scrollToSection('portal')">Explore Portal</button>
            <button class="btn btn-secondary" onclick="scrollToSection('customize')">Customize</button>
          </div>
        </div>
        <div class="hero-card floating">
          <div class="mini-panel">
            <strong>Live Dashboard</strong>
            <p>Track customers, invoices, and payment activity.</p>
          </div>
          <div class="mini-panel">
            <strong>Payment Links</strong>
            <p>Add, open, and copy payment links instantly.</p>
          </div>
          <div class="stats">
            <div class="stat"><strong>24/7</strong><span>Access</span></div>
            <div class="stat"><strong>Fast</strong><span>Checkout</span></div>
            <div class="stat"><strong>Secure</strong><span>Portal</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="features">
      <div class="container">
        <h2 class="section-title">Core Features</h2>
        <p class="section-sub">A polished business website with customer access, branding tools, and payment link actions.</p>
        <div class="grid">
          <div class="card reveal"><h3>Animated UI</h3><p>Use smooth entrance effects, floating visuals, and hover transitions.</p></div>
          <div class="card reveal"><h3>Customer Room</h3><p>Reserve a secure-looking area for account views and support activity.</p></div>
          <div class="card reveal"><h3>Payment Manager</h3><p>Customers can paste, open, or copy payment links.</p></div>
          <div class="card reveal"><h3>Customization</h3><p>Change theme colors, welcome text, and button style.</p></div>
        </div>
      </div>
    </section>

    <section id="portal">
      <div class="container">
        <h2 class="section-title" id="portalTitle">Customer Portal</h2>
        <p class="section-sub">A private-style area for customer info, orders, invoices, and support.</p>
        <div class="portal">
          <div class="card reveal">
            <h3>Customer Rooms</h3>
            <ul class="list">
              <li>Account overview</li>
              <li>Invoices and receipts</li>
              <li>Order history</li>
              <li>Support requests</li>
              <li>Saved payment links</li>
            </ul>
          </div>
          <div class="card reveal">
            <h3>Portal Preview</h3>
            <div class="mini-panel"><strong>Welcome back</strong><p id="welcomePreview">You have 2 pending invoices and 1 new support message.</p></div>
            <div class="mini-panel"><strong>Recent Activity</strong><p>Payment link opened · invoice sent · support ticket updated.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section id="payments">
      <div class="container">
        <h2 class="section-title">Payment Link Area</h2>
        <p class="section-sub">Paste a payment link and use quick actions to open or copy it.</p>
        <div class="payment-box reveal">
          <h3>Set Payment Links</h3>
          <input class="link-input" type="text" id="paymentLink" placeholder="Paste payment link here..." />
          <div class="payment-list">
            <div class="payment-item">
              <div><strong>Open payment page</strong><small>Launch the entered link in a new tab.</small></div>
              <button class="btn btn-primary" onclick="openPaymentLink()">Open</button>
            </div>
            <div class="payment-item">
              <div><strong>Copy payment link</strong><small>Copy the link to clipboard for sharing.</small></div>
              <button class="btn btn-secondary" onclick="copyLink()">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="customize">
      <div class="container">
        <h2 class="section-title">Customization Room</h2>
        <p class="section-sub">Let customers personalize the look and feel of the portal and payment area.</p>
        <div class="grid">
          <div class="card reveal">
            <h3>Brand Colors</h3>
            <p>Choose the primary color for the theme.</p>
            <input type="color" id="primaryColor" value="#60a5fa" class="link-input" />
          </div>
          <div class="card reveal">
            <h3>Welcome Message</h3>
            <p>Set a custom welcome message.</p>
            <input type="text" id="welcomeText" class="link-input" placeholder="Welcome, valued customer!" />
          </div>
          <div class="card reveal">
            <h3>Button Style</h3>
            <p>Select a style for action buttons.</p>
            <select id="buttonStyle" class="link-input">
              <option value="rounded">Rounded</option>
              <option value="square">Square</option>
              <option value="soft">Soft Shadow</option>
            </select>
          </div>
          <div class="card reveal">
            <h3>Payment Page Name</h3>
            <p>Rename the payment section title.</p>
            <input type="text" id="paymentTitle" class="link-input" placeholder="Payments Center" />
          </div>
        </div>
        <div class="card reveal customize-actions">
          <button class="btn btn-primary" onclick="applyCustomization()">Apply Customization</button>
          <p id="customStatus" class="status"></p>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container">
        <h2 class="section-title">Contact and Support</h2>
        <div class="grid">
          <div class="card reveal"><h3>Email Support</h3><p>support@example.com</p></div>
          <div class="card reveal"><h3>Business Hours</h3><p>Monday to Friday, 9:00 AM - 6:00 PM</p></div>
          <div class="card reveal"><h3>Message</h3><textarea class="link-input" placeholder="Write your customer message here..."></textarea></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; 2026 PortalPro. Built for modern customer experiences.</p>
  </footer>

  <script>
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    function openPaymentLink() {
      const link = document.getElementById("paymentLink").value.trim();
      if (!link) {
        alert("Please paste a payment link first.");
        return;
      }
      window.open(link, "_blank");
    }

    function copyLink() {
      const input = document.getElementById("paymentLink");
      if (!input.value.trim()) {
        alert("Please paste a payment link first.");
        return;
      }
      input.select();
      document.execCommand("copy");
      alert("Payment link copied.");
    }

    function applyCustomization() {
      const primary = document.getElementById("primaryColor").value;
      const welcome = document.getElementById("welcomeText").value || "Welcome back!";
      const title = document.getElementById("paymentTitle").value || "Payments Center";
      const style = document.getElementById("buttonStyle").value;

      document.documentElement.style.setProperty("--primary", primary);
      document.querySelector("#payments .section-title").textContent = title;
      document.getElementById("welcomePreview").textContent = welcome;
      document.getElementById("customStatus").textContent = "Customization applied successfully.";

      document.querySelectorAll(".btn-primary").forEach((btn) => {
        btn.style.borderRadius =
          style === "rounded" ? "999px" :
          style === "square" ? "4px" : "14px";
      });
    }

    const cards = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    cards.forEach((card) => observer.observe(card));

    document.getElementById("menuBtn").addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("open");
    });
  </script>
</body>
</html>
