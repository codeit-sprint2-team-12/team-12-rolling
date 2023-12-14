const ROOT_URL = 'https://rolling-api.vercel.app/2-12';

/* ==================== */
// GET
/* ==================== */
async function getRecipients() {
  const response = await fetch(`${ROOT_URL}/recipients/`);
  const body = await response.json();

  return body;
}

/* ==================== */
// POST
/* ==================== */
async function postRecipients(data) {
  const response = await fetch(`${ROOT_URL}/recipients/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const body = await response.json();

  return body;
}
