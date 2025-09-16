# Cloudflare Pages Deployment Guide

This guide explains how to deploy the 8GPI website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. A GitHub account with access to this repository
3. Node.js 20+ and npm installed locally

## Environment Variables

Make sure to set the following environment variables in your Cloudflare Pages project settings:

- `RESEND_API_KEY` - Your Resend API key for email functionality
- `NEXT_PUBLIC_EMAIL_RECIPIENT` - The email address that will receive contact form submissions

## Deployment Setup

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Set up GitHub Secrets**:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Add the following secrets:
     - `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token with `Account:Cloudflare Pages:Edit` and `Zone:Read` permissions
     - `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare Account ID
     - `RESEND_API_KEY` - Your Resend API key
     - `NEXT_PUBLIC_EMAIL_RECIPIENT` - The email address for contact form submissions

2. **Push to main branch**:
   The GitHub Actions workflow will automatically deploy your site to Cloudflare Pages.

### Option 2: Manual Deployment

1. Install the Cloudflare Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Log in to your Cloudflare account:
   ```bash
   wrangler login
   ```

3. Build the project:
   ```bash
   npm install
   npm run build
   npm run build:cf
   ```

4. Deploy to Cloudflare Pages:
   ```bash
   npx wrangler pages deploy .vercel/output/static --project-name=8gpi-website
   ```

## Custom Domain Setup (Optional)

1. In the Cloudflare Pages dashboard, select your project
2. Click on "Custom domains"
3. Click "Set up a custom domain" and follow the instructions

## Environment Variables in Production

Make sure to set the following environment variables in your Cloudflare Pages project settings:

1. Go to your Cloudflare Pages project
2. Navigate to Settings > Environment variables
3. Add the following variables:
   - `RESEND_API_KEY` - Your Resend API key
   - `NEXT_PUBLIC_EMAIL_RECIPIENT` - The email address for contact form submissions

## Troubleshooting

- If you encounter build issues, check the build logs in the Cloudflare Pages dashboard
- Make sure all environment variables are properly set in both GitHub Secrets and Cloudflare Pages
- For API route issues, verify that the `_routes.json` file is correctly configured
