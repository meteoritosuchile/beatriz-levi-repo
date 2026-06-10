# Beatriz Levi Repository — Web App

Interactive web application for the Beatriz Levi meteorite repository at Universidad de Chile.
Browse 59 samples, read the paper, upload photos and IR spectra (.dpt), and add observations
collaboratively with your team.

## 🚀 Quick Start (5 steps)

### 1. Create a Supabase account (free)

Go to https://supabase.com and click **"Start your project"**.
Sign in with your GitHub account or email.
Create a new organization (name it e.g. "UChile-Meteoritos").

### 2. Create a Supabase project

- Click **"New project"**
- Name: `meteoritos-repo` (or whatever you like)
- Set a secure database password (save it somewhere)
- Choose a region close to Chile (e.g., `us-east-1`)
- Wait ~2 minutes for the project to spin up

### 3. Get your API keys

In your Supabase project dashboard:
- Go to **Project Settings** → **API**
- Copy the **Project URL** (looks like `https://xxxxx.supabase.co`)
- Copy the **anon public key** (starts with `eyJ...`)
- Open `js/supabase-config.js` in this folder and paste both values:

```js
const SUPABASE_CONFIG = {
  url: "https://your-project.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIs..."
};
```

### 4. Create the database tables

- In Supabase dashboard, go to **SQL Editor**
- Click **"New query"**
- Copy and paste the entire contents of `supabase-setup.sql`
- Click **"Run"**

### 5. Create a storage bucket

- In Supabase dashboard, go to **Storage**
- Click **"New bucket"**
- Name: `sample-files`
- Check **"Public bucket"**
- Click **"Create bucket"**

---

## 🌐 Deploy online (free)

### Option A: Deploy with Vercel (recommended, 5 min)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com and sign in with GitHub
3. Click **"Add New"** → **"Project"**
4. Select your repo
5. **Deploy** — no configuration needed

Vercel will give you a URL like `meteoritos-repo.vercel.app`

### Option B: Deploy with GitHub Pages

1. Push this folder to a GitHub repository
2. Go to repo **Settings** → **Pages**
3. Source: **Deploy from a branch**, branch: `main`, folder: `/docs`
4. Save and wait 2 minutes

---

## 🔗 Domain (optional)

1. Buy a domain from NIC Chile (www.nic.cl) — e.g., `meteoritos.cl` (~$10/year)
2. Or from Namecheap, GoDaddy, etc.
3. In Vercel: go to your project → **Settings** → **Domains** → add your domain
4. Follow the DNS instructions (usually add a CNAME record)

---

## 📁 Project structure

```
meteoritos-app/
├── index.html              # Main app (SPA)
├── css/style.css           # Styles
├── js/
│   ├── supabase-config.js  # ← EDIT THIS with your keys
│   ├── data.js             # Sample data (59 specimens)
│   └── app.js              # App logic + Supabase integration
├── supabase-setup.sql      # SQL to create tables
└── README.md               # This file
```

## 💡 Usage

- **Home**: Dashboard with stats
- **Samples**: Browse all 59 specimens, search by name/code/locality
- **Sample detail**: Click any sample to:
  - View metadata (type, KLY5, weathering, IR status)
  - Upload photos and .dpt files
  - Write and save observations
- **Paper**: Full scientific article

All uploads and observations are stored in your Supabase project and visible to
anyone with the link.
