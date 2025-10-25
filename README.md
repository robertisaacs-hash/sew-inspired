# Sew Inspired Embroidery & More - E-commerce Platform

A modern, full-stack e-commerce website built for embroidery businesses with custom design visualization capabilities.

## 🎯 Key Features

- **Product Catalog** - Manage apparel, accessories, and embroidery services
- **Custom Design Upload** - Customers can upload images and preview them on products
- **Real-time Visualization** - See designs placed on product mockups before purchase
- **Secure Payments** - Integrated Stripe payment processing
- **Order Management** - Complete order tracking and fulfillment system
- **Admin Dashboard** - Easy-to-use interface for managing products and orders
- **Customer Accounts** - User registration, order history, and design gallery
- **Mobile Responsive** - Works perfectly on all devices

## 🚀 Quick Start for Business Owners

### Prerequisites
- A computer with internet access
- Basic familiarity with using websites (no coding knowledge required)

### 1. Initial Setup (One-time only)

#### Option A: Professional Setup (Recommended)
Contact a web developer to handle the initial deployment using the instructions in the "Technical Setup" section below.

#### Option B: DIY Setup
1. Create accounts on these free services:
   - **Vercel** (hosting): [vercel.com](https://vercel.com)
   - **Supabase** (database): [supabase.com](https://supabase.com)
   - **Stripe** (payments): [stripe.com](https://stripe.com)
   - **Cloudinary** (image storage): [cloudinary.com](https://cloudinary.com)

2. Have your developer deploy the code and connect these services

### 2. Managing Your Store

#### Adding Products
1. Log into your admin dashboard at `yourdomain.com/admin`
2. Click "Products" → "Add New Product"
3. Fill in:
   - Product name (e.g., "Custom Embroidered T-Shirt")
   - Description
   - Base price
   - Available sizes/colors
   - Upload product photos
4. Click "Save Product"

#### Managing Orders
1. Go to "Orders" in your admin dashboard
2. View new orders, update status (Processing → Shipped → Delivered)
3. Print shipping labels and packing slips
4. Send customer notifications

#### Customizing Your Store
- **Logo**: Upload in Settings → Branding
- **Colors**: Modify in Settings → Theme
- **Shipping**: Configure rates in Settings → Shipping
- **Taxes**: Set up in Settings → Taxes

### 3. Daily Operations

#### Morning Routine
1. Check new orders from overnight
2. Review customer design uploads
3. Update order statuses for shipped items

#### Processing Custom Orders
1. Customer uploads design and selects product
2. System shows preview of design on product
3. Customer completes purchase
4. You receive order with customer's design file
5. Create the embroidered item
6. Update order status and ship

### 4. Customer Support
- Orders and customer info available in admin dashboard
- Built-in email notifications for order updates
- Customer can track orders from their account

## 💼 Business Features

### Revenue Streams
- **Standard Products**: Pre-made embroidered items
- **Custom Embroidery**: Customer-provided designs
- **Design Services**: Professional logo creation (add-on)
- **Bulk Orders**: Corporate/team orders with special pricing

### Marketing Tools
- **SEO Optimized**: Google-friendly product pages
- **Social Sharing**: Easy sharing of custom designs
- **Email Marketing**: Customer order notifications and promotions
- **Analytics**: Built-in sales and visitor tracking

## 🛠 Technical Setup (For Developers)

### Technologies Used
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (via Supabase)
- **Payments**: Stripe
- **Image Processing**: Canvas API, Cloudinary
- **Deployment**: Vercel
- **Authentication**: NextAuth.js

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/robertisaacs-hash/sew-inspired.git
   cd sew-inspired
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create `.env.local` file:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/sewinspired"
   
   # Authentication
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   
   # Stripe
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

### Production Deployment

#### Vercel Deployment (Recommended)

1. **Connect Repository**
   - Fork this repository to your GitHub account
   - Connect your GitHub to Vercel
   - Import the project in Vercel dashboard

2. **Configure Environment Variables**
   In Vercel dashboard → Settings → Environment Variables, add:
   - All variables from `.env.local`
   - Update URLs to production values

3. **Database Setup**
   - Create PostgreSQL database on Supabase
   - Add connection string to `DATABASE_URL`
   - Run migrations: `npx prisma db push`

4. **Stripe Configuration**
   - Switch to live keys in production
   - Configure webhooks pointing to your domain
   - Test payment flow

5. **Domain Setup**
   - Add custom domain in Vercel settings
   - Configure DNS records with your registrar
   - SSL certificate is automatically provided

#### Alternative Hosting Options

**Netlify**
- Similar process to Vercel
- Connect GitHub repository
- Configure environment variables
- Deploy with automatic builds

**Traditional Hosting (cPanel/VPS)**
- Build the application: `npm run build`
- Upload `out` folder contents
- Configure database and environment variables
- Set up SSL certificate

### Maintenance & Updates

#### Weekly Tasks
- Monitor error logs in hosting dashboard
- Check payment processing reports
- Backup database (automated in Supabase)
- Update product images/descriptions

#### Monthly Tasks
- Review analytics and sales data
- Update dependencies: `npm update`
- Test payment processing flow
- Review and respond to customer feedback

#### Security Best Practices
- Keep all dependencies updated
- Monitor for security vulnerabilities
- Use strong passwords for all accounts
- Enable two-factor authentication
- Regular database backups

## 📱 Mobile App (Future Enhancement)

Consider adding a React Native mobile app for:
- Push notifications for new orders
- Quick order status updates
- Mobile-optimized admin dashboard
- Customer loyalty program

## 🎨 Customization Options

### Branding
- Custom color schemes
- Logo placement and sizing
- Font selections
- Custom CSS for advanced styling

### Features
- Multi-language support
- Multi-currency pricing
- Advanced inventory tracking
- Subscription-based services
- Wholesale pricing tiers

## 📊 Analytics & Reporting

Built-in tracking for:
- Sales revenue and trends
- Popular products and designs
- Customer acquisition sources
- Order fulfillment times
- Customer lifetime value

## 🔧 Troubleshooting

### Common Issues

**Orders Not Appearing**
1. Check email spam folder
2. Verify Stripe webhook configuration
3. Check database connection

**Images Not Loading**
1. Verify Cloudinary configuration
2. Check image file sizes (max 10MB)
3. Ensure proper file formats (JPG, PNG, SVG)

**Payment Issues**
1. Test with Stripe test cards
2. Verify SSL certificate is active
3. Check webhook endpoints

### Getting Help
1. Check the GitHub Issues page
2. Contact your developer
3. Stripe and Vercel have excellent documentation
4. Community forums for Next.js and React

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For business inquiries: contact@sewinspiredembroidery.com
For technical issues: Create an issue on GitHub

---

**Sew Inspired Embroidery & More** - Bringing your designs to life! 🧵✨
