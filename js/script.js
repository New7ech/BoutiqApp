/* Script principal: navigation mobile, rendu produits et panier local (simple) */

// Catalogue complet dérivé des images présentes dans `assets/images`.
const PRODUCTS = [
  {id: 'p-laptop', title: 'Ordinateur Portable Pro', price: 899.00, img: 'assets/images/laptop.jpg'},
  {id: 'p-laptop1', title: 'Laptop 14"', price: 749.00, img: 'assets/images/laptop1.png'},
  {id: 'p-laptop2', title: 'Laptop 15"', price: 999.00, img: 'assets/images/laptop2.jpg'},

  {id: 'p-smartphone-1', title: 'Smartphone X', price: 699.00, img: 'assets/images/smartphone1.jpg'},
  {id: 'p-smartphone-2', title: 'Smartphone Y', price: 499.00, img: 'assets/images/smartphone2.jpg'},
  {id: 'p-smartphone-3', title: 'Smartphone Z', price: 349.00, img: 'assets/images/smartphone3.jpg'},
  {id: 'p-smartphone-4', title: 'Smartphone Mini', price: 279.00, img: 'assets/images/smartphone4.jpg'},
  {id: 'p-smartphone-svg', title: 'Smartphone Concept', price: 849.00, img: 'assets/images/smartphone.svg'},

  {id: 'p-speaker-1', title: 'Enceinte Bluetooth', price: 129.00, img: 'assets/images/speaker1.jpg'},
  {id: 'p-speaker-2', title: 'Enceinte Portable', price: 99.00, img: 'assets/images/speaker2.jpg'},
  {id: 'p-speaker-3', title: 'Mini Speaker', price: 59.00, img: 'assets/images/speaker3.jpg'},
  {id: 'p-speaker-svg', title: 'Enceinte Design', price: 149.00, img: 'assets/images/speaker.svg'},

  {id: 'p-tablet-1', title: 'Tablette 10"', price: 329.00, img: 'assets/images/tablet1.jpg'},
  {id: 'p-tablet-2', title: 'Tablette Lite', price: 219.00, img: 'assets/images/tablet2.jpg'},
  {id: 'p-tablet-3', title: 'Tablette Pro', price: 429.00, img: 'assets/images/tablet3.jpg'},
  {id: 'p-tablet-svg', title: 'Tablette Graphique', price: 259.00, img: 'assets/images/tablet.svg'},

  {id: 'p-bout1', title: 'Promo Accueil 1', price: 39.00, img: 'assets/images/boutiacceuil1.jpeg'},
  {id: 'p-bout2', title: 'Promo Accueil 2', price: 49.00, img: 'assets/images/boutiacceuil2.jpeg'},
  {id: 'p-bout3', title: 'Promo Accueil 3', price: 29.00, img: 'assets/images/boutiacceuil3.jpeg'},

  {id: 'p-camera', title: 'Appareil Photo', price: 459.00, img: 'assets/images/camera.svg'},
  {id: 'p-camera-2', title: 'Appareil Photo Pro', price: 799.00, img: 'assets/images/camera-2.svg'},
  {id: 'p-camera-3', title: 'Appareil Photo Compact', price: 299.00, img: 'assets/images/camera-3.svg'},

  {id: 'p-drone', title: 'Drone Explorer', price: 599.00, img: 'assets/images/drone.svg'},
  {id: 'p-drone-2', title: 'Drone Mini', price: 349.00, img: 'assets/images/drone-2.svg'},
  {id: 'p-drone-3', title: 'Drone Pro', price: 999.00, img: 'assets/images/drone-3.svg'},

  {id: 'p-headphones', title: 'Casque Hi-Fi', price: 199.00, img: 'assets/images/headphones.svg'},
  {id: 'p-headphones-2', title: 'Casque Sport', price: 89.00, img: 'assets/images/headphones-2.svg'},
  {id: 'p-headphones-3', title: 'Casque Studio', price: 249.00, img: 'assets/images/headphones-3.svg'},

  {id: 'p-smartwatch', title: 'Montre Connectée', price: 179.00, img: 'assets/images/smartwatch.svg'},
  {id: 'p-smartwatch-2', title: 'Montre Sport', price: 129.00, img: 'assets/images/smartwatch-2.svg'},
  {id: 'p-smartwatch-3', title: 'Montre Luxe', price: 299.00, img: 'assets/images/smartwatch-3.svg'},

  {id: 'p-product-1', title: 'Kit Accessoires', price: 59.00, img: 'assets/images/product-1.svg'},
  {id: 'p-product-2', title: 'Pack Découverte', price: 79.00, img: 'assets/images/product-2.svg'},
  {id: 'p-product-3', title: 'Lot Promo', price: 99.00, img: 'assets/images/product-3.svg'}
];

// Utilitaires
function formatCurrency(value){
  return (Number(value) || 0).toLocaleString('fr-FR', {style:'currency', currency:'EUR'});
}

// Rendu des produits sur la page d'accueil (featured)
function renderFeaturedProducts(){
  const el = document.getElementById('featured-products');
  if(!el) return;
  const featured = PRODUCTS.slice(0, 6);
  el.innerHTML = featured.map(p=>`
    <article class="card" data-id="${p.id}">
      ${p.price < 50 ? '<div class="badge">Promo</div>' : p.id.includes('svg') ? '<div class="badge">Nouveau</div>' : ''}
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <h3>${p.title}</h3>
      <div class="meta">
        <div class="price">${formatCurrency(p.price)}</div>
        <button class="btn btn--primary add-to-cart" data-id="${p.id}" aria-label="Ajouter ${p.title} au panier">Ajouter</button>
      </div>
          <div class="overlay">
            <div class="actions">
              <button class="btn btn--ghost quickview-btn" data-id="${p.id}" aria-label="Voir ${p.title}">Voir</button>
            </div>
          </div>
    </article>
  `).join('');
}

// Rendu complet pour la page produits
function renderProductsPage(){
  const el = document.getElementById('products-list');
  if(!el) return;
  el.innerHTML = PRODUCTS.map(p=>`
    <article class="card" data-id="${p.id}">
      ${p.price < 50 ? '<div class="badge">Promo</div>' : p.id.includes('svg') ? '<div class="badge">Nouveau</div>' : ''}
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <h3>${p.title}</h3>
      <div class="meta">
        <div class="price">${formatCurrency(p.price)}</div>
        <button class="btn btn--primary add-to-cart" data-id="${p.id}" aria-label="Ajouter ${p.title} au panier">Ajouter</button>
      </div>
      <div class="overlay">
        <div class="actions">
          <button class="btn btn--ghost quickview-btn" data-id="${p.id}" aria-label="Voir ${p.title}">Voir</button>
        </div>
      </div>
    </article>
  `).join('');
}

// --- Quick View modal functionality ---
let _previouslyFocused = null;
let _currentQuickviewId = null;
function openQuickView(id){
  const prod = PRODUCTS.find(p=>p.id===id);
  if(!prod) return;
  const modal = document.getElementById('quickview');
  if(!modal) return;
  document.getElementById('quickview-img').src = prod.img;
  document.getElementById('quickview-img').alt = prod.title;
  document.getElementById('quickview-title').textContent = prod.title;
  document.getElementById('quickview-desc').textContent = prod.title + ' — ' + (prod.description || 'Découvrez ce produit.');
  document.getElementById('quickview-price').textContent = formatCurrency(prod.price);
  document.getElementById('quickview-qty').value = 1;
  _currentQuickviewId = prod.id;
  modal.setAttribute('aria-hidden', 'false');
  const backdrop = modal.querySelector('.quickview-backdrop');
  if(backdrop) backdrop.classList.add('open');
  _previouslyFocused = document.activeElement;
  // focus first actionable element
  const btn = document.getElementById('quickview-add');
  if(btn) btn.focus();
  // attach keyboard handler
  document.addEventListener('keydown', _quickviewKeyHandler);
}

function closeQuickView(){
  const modal = document.getElementById('quickview');
  if(!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  const backdrop2 = modal.querySelector('.quickview-backdrop');
  if(backdrop2) backdrop2.classList.remove('open');
  document.removeEventListener('keydown', _quickviewKeyHandler);
  if(_previouslyFocused && _previouslyFocused.focus) _previouslyFocused.focus();
  _previouslyFocused = null;
  _currentQuickviewId = null;
}

function _quickviewKeyHandler(e){
  if(e.key === 'Escape'){
    closeQuickView();
    return;
  }
  // basic focus trap: keep Tab inside modal when open
  if(e.key === 'Tab'){
    const modal = document.getElementById('quickview');
    if(!modal || modal.getAttribute('aria-hidden') === 'true') return;
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if(focusable.length === 0) return;
    const arr = Array.prototype.slice.call(focusable).filter(el => !el.hasAttribute('disabled'));
    const first = arr[0];
    const last = arr[arr.length-1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
}

function setupQuickViewHandlers(){
  // open quickview when clicking Voir
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest && e.target.closest('.quickview-btn');
    if(btn){ const id = btn.dataset.id; openQuickView(id); }
  });

  // close handlers for backdrop and close buttons
  document.addEventListener('click', (e)=>{
    const actionEl = e.target.closest && e.target.closest('[data-action]');
    if(actionEl && actionEl.dataset.action === 'close'){
      closeQuickView();
    }
  });

  // add to cart from quickview
  const addBtn = document.getElementById('quickview-add');
  if(addBtn){
    addBtn.addEventListener('click', ()=>{
      const useId = _currentQuickviewId;
      const qty = Math.max(1, parseInt(document.getElementById('quickview-qty').value,10) || 1);
      if(!useId) return;
      const prod = PRODUCTS.find(p=>p.id===useId) || {title:'Produit'};
      addToCartMultiple(useId, qty);
      showToast(`${prod.title} ajouté (${qty})`);
      closeQuickView();
    });
  }
}

function addToCartMultiple(id, qty){
  const cart = getCart();
  cart[id] = (cart[id] || 0) + Number(qty);
  saveCart(cart);
  updateCartCount();
}

// Panier simple stocké dans localStorage
function getCart(){ try{ return JSON.parse(localStorage.getItem('cart')||'{}'); }catch(e){ return {}; } }
function saveCart(cart){ localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); }

function addToCart(id){
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  // Animation + notification
  const prod = PRODUCTS.find(p=>p.id===id);
  if(prod){ showToast(`${prod.title} ajouté au panier — ${formatCurrency(prod.price)}`); }
  const el = document.getElementById('cart-count');
  if(el){ el.classList.add('pulse'); setTimeout(()=>el.classList.remove('pulse'), 500); }
}

// Toast util
function showToast(message, duration=2500){
  let container = document.querySelector('.toast-container');
  if(!container){ container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = message; container.appendChild(t);
  // force reflow then show
  requestAnimationFrame(()=> t.classList.add('show'));
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=> t.remove(), 300); }, duration);
}

function updateCartCount(){
  const el = document.getElementById('cart-count');
  if(!el) return;
  const cart = getCart();
  const count = Object.values(cart).reduce((s,n)=>s+Number(n),0);
  el.textContent = count;
}

// Event delegation pour boutons "Ajouter"
function setupAddToCart(){
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest && e.target.closest('.add-to-cart');
    if(btn){ const id = btn.dataset.id; addToCart(id); }
  });
}

// Mobile nav toggle
function setupMobileNav(){
  const btn = document.getElementById('mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    const open = nav.style.display === 'block';
    nav.style.display = open ? '' : 'block';
  });
}

// Page "cart.html" : renderer
function renderCartPage(){
  const list = document.getElementById('cart-items');
  if(!list) return;
  const cart = getCart();
  const rows = Object.keys(cart).map(id=>{
    const prod = PRODUCTS.find(p=>p.id===id) || {title:id, price:0};
    const qty = cart[id];
    return `
      <div class="card" data-id="${id}">
        <div style="display:flex;gap:12px;align-items:center">
          <img src="${prod.img}" alt="${prod.title}" style="width:80px;height:80px;object-fit:cover;border-radius:8px" loading="lazy">
          <div>
            <h3 style="margin:0">${prod.title}</h3>
            <p class="text-muted">${formatCurrency(prod.price)}</p>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;justify-content:space-between">
          <div>
            <label>Quantité: <input type="number" min="0" value="${qty}" data-id="${id}" class="cart-qty" style="width:70px"></label>
          </div>
          <div class="price">${formatCurrency(prod.price * qty)}</div>
        </div>
      </div>
    `;
  });
  list.innerHTML = rows.join('') || '<p>Votre panier est vide.</p>';
  // total
  const totalEl = document.getElementById('cart-total');
  if(totalEl){
    const total = Object.keys(cart).reduce((sum,id)=>{
      const prod = PRODUCTS.find(p=>p.id===id) || {price:0};
      return sum + prod.price * Number(cart[id]);
    },0);
    totalEl.textContent = formatCurrency(total);
  }
}

// Update quantities from cart page
function setupCartPageHandlers(){
  document.addEventListener('change', (e)=>{
    if(e.target && e.target.classList && e.target.classList.contains('cart-qty')){
      const id = e.target.dataset.id; const val = parseInt(e.target.value,10);
      const cart = getCart();
      if(val <= 0){ delete cart[id]; } else { cart[id] = val; }
      saveCart(cart); renderCartPage();
    }
  });
}

// Initialisation
document.addEventListener('DOMContentLoaded', ()=>{
  renderFeaturedProducts();
  renderProductsPage();
  updateCartCount();
  setupAddToCart();
  setupMobileNav();
  setupCartPageHandlers();
  setupQuickViewHandlers();
  renderCartPage();
  initHeroSlideshow();
});

// Hero slideshow: cycle through slides, pause on hover
function initHeroSlideshow(){
  const container = document.getElementById('hero-slideshow');
  if(!container) return;
  const slides = Array.from(container.querySelectorAll('.slide'));
  if(slides.length <= 1) return;
  let idx = slides.findIndex(s=>s.classList.contains('active'));
  if(idx < 0) idx = 0;
  let interval = 4500;
  let timer = null;

  function show(i){
    slides.forEach((s, j)=> s.classList.toggle('active', j===i));
  }

  function next(){ idx = (idx + 1) % slides.length; show(idx); }

  timer = setInterval(next, interval);

  // pause on hover/focus for accessibility
  container.addEventListener('mouseenter', ()=>{ if(timer){ clearInterval(timer); timer = null; } });
  container.addEventListener('mouseleave', ()=>{ if(!timer) timer = setInterval(next, interval); });
  container.addEventListener('focusin', ()=>{ if(timer){ clearInterval(timer); timer = null; } });
  container.addEventListener('focusout', ()=>{ if(!timer) timer = setInterval(next, interval); });
}
