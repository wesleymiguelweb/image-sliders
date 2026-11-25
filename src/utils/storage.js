export function getStoredValue(key, fallback = null) {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    // localStorage pode estar indisponível (modo privado ou políticas do navegador).
    return fallback;
  }
}

export function setStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Sem persistência disponível: o valor continua válido apenas nesta sessão.
  }
}
