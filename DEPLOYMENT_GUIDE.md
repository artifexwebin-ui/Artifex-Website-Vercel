# 🚀 Deployment Guide for Artifex Web

This guide covers deploying your **Frontend to Vercel** and **Backend to Railway**, and connecting your **Hostinger Domain** (`artifexweb.in`). This combination is excellent for performance, scalability, and ease of use.

---

## 📋 Prerequisites
1.  **GitHub Repository**: Ensure your project is pushed to GitHub.
    *   Ideally, `frontend` and `backend` should be in the same repo (monorepo) or separate repos. This guide assumes they are in **one repository** with `frontend/` and `backend/` folders.

---

## 🛠️ Step 1: Deploy Backend (Railway)

Railway is great for Node.js backends because it handles the server setup automatically.

1.  **Sign Up/Login**: Go to [Railway.app](https://railway.app/) and login with GitHub.
2.  **New Project**: Click **New Project** > **Deploy from GitHub repo**.
3.  **Select Repo**: Choose your `Artifex-Web` repository.
4.  **Configure Service**:
    *   Railway will likely detect the folders. If not, add a service.
    *   Go to **Settings** > **Root Directory**: Set this to `/backend`.
    *   **Build Command**: `npm install` (default is usually fine).
    *   **Start Command**: `npm start` (which runs `node server.js`).
5.  **Environment Variables**:
    *   Go to the **Variables** tab.
    *   Add your secrets (from your local `.env` file):
        *   `EMAIL_USER`: `your-email@gmail.com`
        *   `EMAIL_PASS`: `your-app-password`
        *   `PORT`: `5000` (Optional, Railway provides its own PORT variable automatically, but good to have).
6.  **Generate Domain**:
    *   Go to **Settings** > **Networking**.
    *   Click **Generate Domain**. You will get a URL like `artifex-backend-production.up.railway.app`.
    *   **Copy this URL**. You will need it for the Frontend.

---

## 🎨 Step 2: Deploy Frontend (Vercel)

Vercel is the creators of Next.js and provides the best hosting for React/Vite apps.

1.  **Sign Up/Login**: Go to [Vercel.com](https://vercel.com/) and login with GitHub.
2.  **Add New Project**: Click **Add New...** > **Project**.
3.  **Import Repo**: Select your `Artifex-Web` repository.
4.  **Configure Project**:
    *   **Framework Preset**: Select **Vite**.
    *   **Root Directory**: Click **Edit** and select the `frontend` folder.
5.  **Environment Variables**:
    *   Expand the **Environment Variables** section.
    *   Key: `VITE_API_URL`
    *   Value: **Paste the Railway URL** you copied in Step 1 (e.g., `https://artifex-backend-production.up.railway.app`).
    *   *Note: Do not add a trailing slash `/` at the end.*
6.  **Deploy**: Click **Deploy**.
    *   Vercel will build your site. Once done, you will get a `vercel.app` URL (e.g., `artifex-web.vercel.app`).
    *   Test the form submission to ensure it connects to the backend.

---

## 🌐 Step 3: Connect Domain (Hostinger)

Now, let's point `www.artifexweb.in` to your Vercel deployment.

1.  **Vercel Settings**:
    *   Go to your project dashboard on Vercel.
    *   Go to **Settings** > **Domains**.
    *   Enter `www.artifexweb.in` and click **Add**.
    *   Also add `artifexweb.in` (without www) to ensure redirection works.
    *   Vercel will show you some **DNS Records** (A Record and CNAME/CNAME).

2.  **Hostinger DNS**:
    *   Log in to **Hostinger** > **Domains** > Manage `artifexweb.in`.
    *   Go to **DNS / Nameservers**.
    *   **Delete** any existing defaults for `A` (@) or `CNAME` (www) if they point to Hostinger parking pages.
    *   **Add Records** (copy exactly what Vercel tells you):
        *   **Type**: `A` | **Name**: `@` | **Points to**: `76.76.21.21` (Verify this on Vercel dashboard).
        *   **Type**: `CNAME` | **Name**: `www` | **Points to**: `cname.vercel-dns.com` (Verify this on Vercel dashboard).
3.  **Propagation**:
    *   It might take 15 mins to 24 hours for the domain to work globally.
    *   Vercel will automatically generate an SSL certificate (HTTPS) for you.

---

## ✅ Final Checklist
- [ ] Backend is running on Railway (check logs for specific "Server running" message).
- [ ] Frontend environment variable `VITE_API_URL` is set on Vercel.
- [ ] DNS records on Hostinger match Vercel's requirements.
- [ ] Contact form works on the live site (emails are received).
