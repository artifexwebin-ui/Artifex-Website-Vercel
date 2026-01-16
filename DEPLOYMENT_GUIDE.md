# 🚀 Deployment Guide for Artifex Web (Vercel Edition)

This guide covers deploying **BOTH Frontend and Backend to Vercel** for free. This assumes you have pushed your project to GitHub.

---

## 📋 Prerequisites
1.  **GitHub Repository**: Ensure your project is pushed to GitHub.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).

---

## 🛠️ Step 1: Deploy Backend (Vercel)

We will deploy the backend first to get the API URL.

1.  **Go to Vercel Dashboard**: Click **Add New...** > **Project**.
2.  **Import Repo**: Select your `Artifex-Web` repository.
3.  **Configure Project**:
    *   **Project Name**: something like `artifex-backend`.
    *   **Framework Preset**: Select **Other**.
    *   **Root Directory**: Click **Edit** and select the `backend` folder.
4.  **Environment Variables**:
    *   Expand the **Environment Variables** section.
    *   Add your secrets (from your local `.env` file):
        *   `EMAIL_USER`: `your-email@gmail.com`
        *   `EMAIL_PASS`: `your-app-password`
5.  **Deploy**: Click **Deploy**.
    *   Once finished, Vercel will give you a domain (e.g., `artifex-backend.vercel.app`).
    *   **Copy this URL**.

---

## 🎨 Step 2: Deploy Frontend (Vercel)

Now we deploy the frontend and connect it to the backend.

1.  **Go to Vercel Dashboard**: Click **Add New...** > **Project**.
2.  **Import Repo**: Select **the SAME repository** again.
3.  **Configure Project**:
    *   **Project Name**: `artifex-web` (or your preferred name).
    *   **Framework Preset**: Select **Vite**.
    *   **Root Directory**: Click **Edit** and select the `frontend` folder.
4.  **Environment Variables**:
    *   Expand the **Environment Variables** section.
    *   Key: `VITE_API_URL`
    *   Value: **Paste the Backend URL** from Step 1 (e.g., `https://artifex-backend.vercel.app`).
    *   *Note: Ensure it starts with https:// and has NO trailing slash.*
5.  **Deploy**: Click **Deploy**.
    *   Your site is now live!
    *   Test the contact form to verify it sends emails via the backend.

---

## 🌐 Step 3: Connect Domain to Frontend

1.  **Vercel Settings (Frontend Project)**:
    *   Go to your `artifex-web` project settings > **Domains**.
    *   Add `www.artifexweb.in`.
    *   Follow the instructions to update your DNS records on Hostinger (A Record and CNAME).

---

## ✅ Final Checklist
- [ ] Backend deployed on Vercel (visit the URL to see "Artifex Backend is Running").
- [ ] Frontend deployed on Vercel with `VITE_API_URL` set.
- [ ] Contact form successfully sends emails.
