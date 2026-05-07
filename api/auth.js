// Validates the access passcode and sets an auth cookie.
// Reads ACCESS_PASSWORD and ACCESS_TOKEN from env vars.

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  const submitted = (body && typeof body.password === 'string') ? body.password.trim() : '';
  const expected = process.env.ACCESS_PASSWORD || '';

  if (!expected) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  // Constant-time compare to prevent timing attacks
  if (submitted.length !== expected.length) {
    return res.status(401).json({ error: 'Invalid' });
  }

  let mismatch = 0;
  for (let i = 0; i < submitted.length; i++) {
    mismatch |= submitted.charCodeAt(i) ^ expected.charCodeAt(i);
  }

  if (mismatch !== 0) {
    return res.status(401).json({ error: 'Invalid' });
  }

  // Set the access cookie. 30 days. HttpOnly so JS can't read it.
  res.setHeader(
    'Set-Cookie',
    `cheqout_access=${process.env.ACCESS_TOKEN}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`
  );

  return res.status(200).json({ success: true });
}
