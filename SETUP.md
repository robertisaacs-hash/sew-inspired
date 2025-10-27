# Environment Setup Guide

This guide will help you set up the environment variables needed to run Sew Inspired Embroidery website.

## 📚 Documentation Guide

**👋 Are you a business owner?** This is a technical setup guide for developers.

**📖 Start here instead:**
- **[BUSINESS-SETUP.md](./BUSINESS-SETUP.md)** - Complete business owner guide explaining what each service does
- **[QUICK-REFERENCE.md](./QUICK-REFERENCE.md)** - Daily operations cheat sheet

**👩‍💻 Developer?** Continue with the technical setup below.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/sew_inspired"

# NextAuth.js Configuration
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe Payment Configuration
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Email Configuration (Optional)
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-email@domain.com"
SMTP_PASS="your-email-password"

# File Upload Configuration (Optional)
CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

## Setup Instructions

### 1. Database Setup (PostgreSQL)

#### Option A: Local PostgreSQL
1. Install PostgreSQL on your system
2. Create a database named `sew_inspired`
3. Update the DATABASE_URL with your credentials

#### Option B: Cloud Database (Recommended for beginners)
1. Sign up for a free account at:
   - **Neon** (https://neon.tech) - Free PostgreSQL
   - **Supabase** (https://supabase.com) - Free tier available
   - **PlanetScale** (https://planetscale.com) - MySQL alternative

2. Create a new database and copy the connection string
3. Add it to your `.env.local` file

### 2. Stripe Payment Setup
1. Create a free Stripe account at https://stripe.com
2. Go to Developers > API Keys
3. Copy your publishable and secret keys (use test keys for development)
4. For webhooks:
   - Go to Developers > Webhooks
   - Add endpoint: `http://localhost:3000/api/webhooks/stripe`
   - Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`

### 3. Authentication Setup
1. Generate a secure secret key:
   ```bash
   openssl rand -base64 32
   ```
2. Add it as NEXTAUTH_SECRET in your `.env.local`

### 4. Initialize Database
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio to view data
npm run db:studio
```

## Business Owner Quick Setup

If you're not technical, here's the simplest setup:

### 1. Use Vercel + Neon (Free)

1. **Deploy to Vercel:**
   - Push your code to GitHub
   - Connect your GitHub to Vercel
   - Deploy automatically

2. **Setup Database:**
   - Sign up at https://neon.tech
   - Create a new database
   - Copy the connection string to Vercel environment variables

3. **Configure Stripe:**
   - Create Stripe account
   - Add keys to Vercel environment variables

### 2. Environment Variables in Vercel
Go to your Vercel project settings and add these variables:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (your vercel domain)
- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

## Testing Your Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit http://localhost:3000
3. Try the admin dashboard at http://localhost:3000/admin
4. Test adding a product
5. Test the custom design feature

## Troubleshooting

### Database Connection Issues
- Verify your DATABASE_URL is correct
- Check if your database service is running
- Ensure firewall allows connections

### Stripe Issues
- Make sure you're using test keys during development
- Verify webhook URL is accessible
- Check Stripe dashboard for failed events

### Build Issues
- Run `npm run build` to check for errors
- Ensure all environment variables are set
- Check console for specific error messages

## Production Deployment

### Required Changes for Production:
1. Use production Stripe keys
2. Set NEXTAUTH_URL to your domain
3. Use a production database
4. Enable SSL/HTTPS
5. Set up proper monitoring

### Security Checklist:
- [ ] Use strong passwords
- [ ] Enable two-factor authentication on all services
- [ ] Regularly backup your database
- [ ] Monitor error logs
- [ ] Keep dependencies updated

## Getting Help

If you need help with setup:
1. Check the main README.md for business owner guidance
2. Contact your developer
3. Join the Next.js Discord community
4. Post on Stack Overflow with specific error messages

Remember: Never commit your `.env.local` file to version control!