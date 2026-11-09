/* ==========================================================
   SCRIPT UPDATE — logika (meni igara + kopiranje)
   Ovaj fajl NE treba mijenjati — igre i skripte se mijenjaju
   samo u games.js.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const BRAND = (typeof SITE !== 'undefined' && SITE.brand) || 'Script Update';
  const viewMenu = document.getElementById('view-menu');
  const viewGame = document.getElementById('view-game');
  const grid = document.getElementById('game-grid');
  const deck = document.getElementById('deck');
  const toast = document.getElementById('toast');
  let toastTimeout = null;

  const escapeHtml = (s) => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  // ---------- Meni: tasteri za igre ----------
  grid.innerHTML = GAMES.map((g, i) => `
    <a class="game-btn" href="#${encodeURIComponent(g.id)}" style="animation-delay:${i * 0.06}s">
      <span class="game-btn__glow" aria-hidden="true"></span>
      <span class="game-btn__tag">GAME ${String(i + 1).padStart(2, '0')}</span>
      <span class="game-btn__name">${escapeHtml(g.name)}</span>
      <span class="game-btn__meta">${g.scripts.length} script${g.scripts.length === 1 ? '' : 's'} &rarr;</span>
    </a>`).join('');

  // ---------- Stranica igre ----------
  function renderGame(game) {
    document.getElementById('game-name').textContent = game.name;
    document.getElementById('game-subtitle').textContent = game.subtitle || '';
    document.title = `${game.name} — ${BRAND}`;

    deck.classList.toggle('deck--single', game.scripts.length === 1);
    deck.innerHTML = game.scripts.map((s, i) => `
      <section class="card">
        <div class="card-glow" aria-hidden="true"></div>
        <div class="card-head">
          <span class="card-tag">SLOT ${String(i + 1).padStart(2, '0')}</span>
          <h2 class="card-title">${escapeHtml(s.title)}</h2>
        </div>
        <div class="code-window">
          <div class="code-window__bar">
            <span class="dot dot--red"></span>
            <span class="dot dot--yellow"></span>
            <span class="dot dot--green"></span>
            <span class="code-window__label">${escapeHtml(s.label || game.name + ' Script')}</span>
          </div>
          <pre class="code-body">${escapeHtml(s.code)}</pre>
        </div>
      </section>`).join('');
  }

  // ---------- Prebacivanje između stranica (#id u linku) ----------
  function show(id) {
    const game = GAMES.find((g) => g.id === id);
    if (game) {
      renderGame(game);
      viewMenu.hidden = true;
      viewGame.hidden = false;
    } else {
      document.title = `${BRAND} — Choose Your Game`;
      viewGame.hidden = true;
      viewMenu.hidden = false;
    }
    window.scrollTo(0, 0);
  }

  function setUrl(id) {
    try {
      history.pushState(null, '', id ? '#' + encodeURIComponent(id) : location.pathname + location.search);
    } catch (e) { /* npr. pregled u editoru — nije bitno */ }
  }

  const route = () => show(decodeURIComponent(location.hash.slice(1)));

  grid.addEventListener('click', (e) => {
    const a = e.target.closest('a.game-btn');
    if (!a) return;
    e.preventDefault();
    const id = decodeURIComponent(a.getAttribute('href').slice(1));
    show(id);
    setUrl(id);
  });

  document.getElementById('back-btn').addEventListener('click', () => {
    show(null);
    setUrl(null);
  });

  window.addEventListener('popstate', route);
  window.addEventListener('hashchange', route);
  route();

  // ---------- Copy dugme: kopira sve skripte izabrane igre ----------
  const copyButton = document.getElementById('copy-all');
  copyButton.addEventListener('click', async () => {
    const text = Array.from(deck.querySelectorAll('.code-body'))
      .map((b) => b.textContent.trim())
      .filter(Boolean)
      .join('\n\n');

    if (await copyToClipboard(text)) {
      showCopiedState(copyButton);
      showToast('Kopirano u clipboard');
    } else {
      showToast('Kopiranje nije uspjelo — pokušaj ponovo');
    }
  });

  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.warn('navigator.clipboard nije uspio, koristim fallback.', err);
      }
    }
    try {
      const t = document.createElement('textarea');
      t.value = text;
      t.style.position = 'fixed';
      t.style.opacity = '0';
      document.body.appendChild(t);
      t.focus();
      t.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(t);
      return ok;
    } catch (err) {
      console.error('Kopiranje nije uspjelo:', err);
      return false;
    }
  }

  function showCopiedState(button) {
    const textEl = button.querySelector('.copy-btn__text');
    button.classList.add('is-copied');
    textEl.textContent = 'Copied!';
    setTimeout(() => {
      button.classList.remove('is-copied');
      textEl.textContent = 'Copy';
    }, 2000);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }
});
