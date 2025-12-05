# Deployment Guide for nonnatravel.com

## Step 1: Deploy to Vercel

1. Go to https://vercel.com and sign in with your GitHub account
2. Click **"Add New Project"**
3. Import your repository: `raragao87/nonnatravel`
4. Vercel will auto-detect Next.js settings - click **"Deploy"**
5. Wait for deployment to complete (about 2 minutes)

## Step 2: Connect Your Squarespace Domain

### Option A: Point DNS to Vercel (Recommended)

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `nonnatravel.com`
4. Vercel will show you DNS records to add

5. **In Squarespace:**
   - Log into your Squarespace account
   - Go to **Settings** → **Domains** → **nonnatravel.com**
   - Click **"Use a Third-Party Domain"** or **"DNS Settings"**
   - Add these DNS records (Vercel will provide exact values):
     - **A Record**: `@` → Vercel IP (usually `76.76.21.21`)
     - **CNAME Record**: `www` → `cname.vercel-dns.com`
   - Save changes

6. **Back in Vercel:**
   - Click **"Verify"** or **"Refresh"**
   - Wait for DNS propagation (can take up to 48 hours, usually 1-2 hours)

### Option B: Transfer Nameservers to Vercel

1. In Vercel, add your domain
2. Vercel will provide nameservers (e.g., `ns1.vercel-dns.com`)
3. In Squarespace:
   - Go to **Settings** → **Domains** → **nonnatravel.com**
   - Change nameservers to Vercel's nameservers
   - Save changes

## Step 3: SSL Certificate

Vercel automatically provides a free SSL certificate once the domain is connected. This may take a few minutes after DNS is verified.

## Step 4: Verify Everything Works

1. Visit https://nonnatravel.com (wait for DNS propagation)
2. Check that all pages load correctly
3. Verify SSL certificate is active (green lock in browser)

## Troubleshooting

- **DNS not propagating?** Wait up to 48 hours, or check DNS with: https://dnschecker.org
- **SSL not working?** Wait a few minutes after DNS verification
- **Domain not connecting?** Make sure DNS records are correct in Squarespace

## Need Help?

If you encounter issues, check:
- Vercel documentation: https://vercel.com/docs/concepts/projects/domains
- Squarespace DNS help: https://support.squarespace.com/hc/en-us/articles/205812378

