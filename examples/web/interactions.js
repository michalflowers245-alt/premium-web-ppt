/* Local-only navigation behavior shared by the three original examples. */
document.querySelectorAll('.menu-toggle').forEach((button) => {
  const nav = document.getElementById(button.getAttribute('aria-controls'));
  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    button.textContent = '目录 ＋';
    nav.dataset.open = 'false';
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '收起 −' : '目录 ＋';
    nav.dataset.open = String(open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      close();
      button.focus();
    }
  });
});
