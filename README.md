# 🏏 Weekend Cricket Availability

Track your office squad's availability for weekend cricket matches.

---

## Deploy in 4 steps

### Step 1 — Set up Supabase (database)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **New Project**, name it `cricket-app`
3. Once created, go to **SQL Editor** in the left sidebar
4. Paste the contents of `supabase-setup.sql` and click **Run**
5. Go to **Settings → API** and copy:
   - **Project URL**
   - **anon / public** key

### Step 2 — Add your credentials

Open `config.js` and replace the placeholders:

```js
const SUPABASE_URL = 'https://xxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGci...';
```

### Step 3 — Push to GitHub

1. Create a new repository on [github.com](https://github.com) called `cricket-app`
2. Push these files:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/cricket-app.git
git push -u origin main
```

### Step 4 — Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **Add new site → Import from Git**
3. Connect your GitHub account and select `cricket-app`
4. Leave all settings as default, click **Deploy site**
5. Netlify gives you a free URL like `cricket-squad.netlify.app`

**Share this URL with your team on WhatsApp — done!**

---

## Customising weekends

Edit the `WEEKENDS` array in `index.html`:

```js
const WEEKENDS = [
  { id: 'w1', label: 'Weekend 1', date: 'Sat 14 Jun' },
  { id: 'w2', label: 'Weekend 2', date: 'Sat 21 Jun' },
  ...
];
```

---

## Tech stack

- **Frontend**: Plain HTML/CSS/JS — no build step needed
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Netlify (free tier)
- **Version control**: GitHub
