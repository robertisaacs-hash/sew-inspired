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

## 📖 How Your Website Works - Business Owner Guide

### 🏠 **Customer Journey Overview**

#### 1. **Homepage Experience**
Your customers will see:
- Professional hero section with your business story
- Featured products showcase
- Customer testimonials
- About your embroidery services
- Clear call-to-action buttons

#### 2. **Product Browsing**
- Clean product catalog with filtering options
- High-quality product images and descriptions
- Pricing clearly displayed
- "Customize This Product" buttons

#### 3. **Custom Design Process** ⭐ **KEY FEATURE**
```
Customer uploads image → Sees design on product → Adjusts placement → Adds to cart → Checkout
```

**Step-by-step process:**
1. Customer clicks "Start Custom Design"
2. Selects product type (T-shirt, Hoodie, Cap, etc.)
3. Uploads their image/logo (PNG, JPG, SVG supported)
4. **Real-time preview** shows design on selected product
5. Customer can adjust size and placement
6. Receives design guidelines and recommendations
7. Adds to cart with confidence

#### 4. **Checkout & Payment**
- Secure Stripe payment processing
- Multiple payment options (cards, digital wallets)
- Automatic order confirmation emails
- Order tracking capabilities

### 🎯 **Your Daily Workflow**

#### Morning (5-10 minutes)
1. **Check New Orders**: Log into admin dashboard
2. **Review Designs**: See customer uploads with product details
3. **Production Planning**: Organize orders by priority/ship date

#### During Production
1. **Download Design Files**: High-resolution files ready for embroidery
2. **Update Order Status**: Mark as "In Production" so customers know
3. **Quality Control**: Mark completed items

#### Shipping
1. **Mark as Shipped**: Updates customer automatically
2. **Add Tracking**: Customer receives tracking information
3. **Close Order**: Archive completed orders

### 💰 **Revenue Opportunities**

| Revenue Stream | Example Products | Typical Markup |
|---------------|------------------|----------------|
| **Basic Embroidery** | Simple text/logos | 200-300% |
| **Complex Designs** | Multi-color artwork | 300-500% |
| **Bulk Orders** | Corporate uniforms | 150-200% |
| **Rush Orders** | Same-day delivery | +50-100% |
| **Design Services** | Custom logo creation | $50-$200 |

### 📊 **Understanding Your Dashboard**

#### **Orders Section**
- **New Orders**: Require attention (red badge)
- **In Progress**: Currently being worked on
- **Shipped**: Completed and sent to customer
- **Revenue Summary**: Daily/weekly/monthly totals

#### **Products Section**  
- **Add Products**: Upload new items to sell
- **Edit Existing**: Update prices, descriptions, images
- **Inventory Tracking**: Monitor stock levels
- **Featured Products**: Control homepage display

#### **Customers Section**
- **Customer Database**: Contact information and order history
- **Design Gallery**: All customer uploads organized by date
- **Repeat Customers**: Identify your best customers

## 📱 User Interface Screenshots

### 🏠 **Homepage Layout**
```
┌─────────────────────────────────────────────┐
│  🎨 Sew Inspired Logo    🛒 Cart (2) 👤Menu │
├─────────────────────────────────────────────┤
│                                             │
│      "CUSTOM EMBROIDERY FOR EVERY          │
│             OCCASION"                       │
│                                             │
│  [Start Custom Design] [Browse Products]    │
│                                             │
├─────────────────────────────────────────────┤
│  Featured Products (with hover effects)     │
│  [T-Shirt] [Hoodie] [Cap] [Polo] [Bag]    │
├─────────────────────────────────────────────┤
│  Customer Testimonials (rotating carousel)  │
│  ⭐⭐⭐⭐⭐ "Amazing quality!" - Sarah J.      │
└─────────────────────────────────────────────┘
```

### 🎨 **Custom Design Interface** ⭐ **SIGNATURE FEATURE**
```
┌─────────────────────┬───────────────────────┐
│   Design Controls   │     Live Preview      │
├─────────────────────┼───────────────────────┤
│ 1. Choose Product:  │                       │
│   ○ T-Shirt         │       👕              │
│   ○ Hoodie          │   [Your Logo Here]    │
│   ○ Baseball Cap    │                       │
│   ○ Polo Shirt     │   Product mockup      │
│                     │   with customer's     │
│ 2. Upload Design:   │   design overlay      │
│   [📁 Choose File]   │                       │
│   ✓ logo.png        │   Real-time preview   │
│                     │   updates as you      │
│ 3. Preview Design:  │   make changes        │
│   Size: ●━━━━○━━━━   │                       │
│   Position: drag    │                       │
│                     │                       │
│ [Get Free Quote]    │ ✅ Ready for embroidery│
└─────────────────────┴───────────────────────┘
```

### 🛒 **Shopping Cart & Checkout**
```
┌─────────────────────────────────────────────┐
│                Shopping Cart                │
├─────────────────────────────────────────────┤
│ 👕 Custom T-Shirt (Navy, Large)      $24.99│
│    └─ Custom Design: "company_logo.png"    │
│ 🧢 Baseball Cap (Black)              $19.99│
│    └─ Text: "Team Champions 2024"          │
├─────────────────────────────────────────────┤
│                              Subtotal: $44.98│
│                               Tax (8%): $3.60│
│                              Shipping: $8.99│
│                                Total: $57.57│
├─────────────────────────────────────────────┤
│ 💳 [Proceed to Secure Checkout]            │
└─────────────────────────────────────────────┘
```

### ⚙️ **Admin Dashboard** (Business Owner View)
```
┌─────────────────────────────────────────────┐
│  📊 Sew Inspired Admin Dashboard           │
├─────────────────────────────────────────────┤
│  Today's Summary:                           │
│  💰 Revenue: $342.50  📦 Orders: 8  👥 New: 3│
├─────────────────────────────────────────────┤
│ 🔴 New Orders (3)    📋 All Orders         │
│ 📦 Products          👥 Customers          │
│ 📊 Analytics         ⚙️ Settings           │
├─────────────────────────────────────────────┤
│ Recent Orders:                              │
│ #1001 - Custom Polo (John D.) - $34.99 NEW│
│ #1002 - Team Caps x5 (Sarah M.) - $89.95  │
│ #1003 - Logo T-Shirts (Corp.) - $156.00   │
└─────────────────────────────────────────────┘
```

## ❓ Frequently Asked Questions (FAQs)

### **For Business Owners**

#### 💰 **Business & Revenue**

**Q: How much can I expect to earn with this platform?**
A: Revenue depends on your pricing and volume. Many embroidery businesses charge $15-50 per item with 200-400% markup. Example: Buy blank t-shirt for $5, embroider custom design, sell for $25 = $20 profit per item.

**Q: What should I charge for custom embroidery?**
A: Typical pricing:
- Simple text/logo: $15-25
- Complex multi-color design: $25-45  
- Rush orders: Add 50-100% premium
- Bulk discounts: 10-20% off for 10+ items

**Q: How do I handle bulk orders?**
A: The system supports quantity discounts. Set up pricing tiers in your admin panel (e.g., 1-9 items: $25 each, 10-24 items: $22 each, 25+ items: $20 each).

#### 🎨 **Design & Production**

**Q: What file formats can customers upload?**
A: PNG, JPG, SVG, and GIF files up to 10MB. The system automatically optimizes images for embroidery and provides quality guidelines.

**Q: Can customers see exactly how their design will look?**
A: Yes! The real-time preview shows their design placed on the selected product with accurate sizing and positioning. This reduces misunderstandings and returns.

**Q: What if a customer's design won't embroider well?**
A: The system provides automatic feedback on design quality. You can also contact customers through the built-in messaging system to suggest improvements.

#### 📦 **Orders & Fulfillment**

**Q: How do I track inventory?**
A: Built-in inventory management tracks stock levels, sends low-stock alerts, and can automatically hide out-of-stock items.

**Q: Can I set different production times for different products?**
A: Yes, configure lead times per product type. Customers see estimated delivery dates before ordering.

**Q: How do customers track their orders?**
A: Automatic email notifications with tracking links. Customers can also log into their account to see order status in real-time.

### **Technical Questions**

#### 🖥️ **Website Management**

**Q: Do I need coding knowledge to manage my store?**
A: No! The admin interface is designed for non-technical users. Adding products, processing orders, and updating content is all done through user-friendly forms.

**Q: Can I customize the look of my website?**
A: Yes, easily change colors, fonts, logo, and content through the admin panel. For advanced customization, you can hire a developer to modify the code.

**Q: Is my customer data secure?**
A: Absolutely. The platform uses enterprise-grade security:
- SSL encryption for all data
- PCI compliant payment processing via Stripe
- Regular security updates
- GDPR compliant data handling

**Q: What happens if my website goes down?**
A: The platform is hosted on Vercel with 99.9% uptime guarantee. Automatic backups ensure no data loss. Most issues resolve automatically within minutes.

#### 💳 **Payments & Processing**

**Q: What payment methods are accepted?**
A: All major credit cards, debit cards, Apple Pay, Google Pay, and other digital wallets through Stripe integration.

**Q: When do I receive payment?**
A: Stripe typically deposits funds within 2-7 business days. You can see pending and completed payouts in your Stripe dashboard.

**Q: What about refunds and chargebacks?**
A: Handle refunds directly through your Stripe dashboard. The system automatically updates order status and inventory when refunds are processed.

#### 📱 **Mobile & Accessibility**

**Q: Does the website work on mobile phones?**
A: Yes, fully responsive design works perfectly on all devices. The custom design tool is optimized for both desktop and mobile use.

**Q: Can customers place orders from their phones?**
A: Absolutely! The entire shopping experience is mobile-optimized, including image upload and design preview.

### **Getting Started Questions**

#### 🚀 **Setup & Launch**

**Q: How long does it take to set up?**
A: Technical setup: 2-4 hours for a developer. Content setup (adding your products, images, policies): 4-8 hours for you to complete.

**Q: What do I need to provide?**
A: 
- Product photos (high quality, multiple angles)
- Product descriptions and pricing
- Business information and policies
- Logo and branding materials
- Stripe and hosting account setup

**Q: Can I migrate from my existing website?**
A: Yes, product data can typically be imported from CSV files. Customer data may require manual setup for security reasons.

#### 📈 **Marketing & Growth**

**Q: How do customers find my website?**
A: The site is SEO-optimized for search engines. You'll also want to promote through:
- Social media marketing
- Google Ads
- Local business directories
- Word-of-mouth referrals

**Q: Can I offer discount codes?**
A: Yes, built-in coupon system allows percentage or fixed-amount discounts, minimum order amounts, and expiration dates.

**Q: How do I get more custom design orders?**
A: The preview feature is your best sales tool! Consider:
- Offering free design consultations
- Showcasing example designs on social media
- Partnering with local businesses and teams
- Seasonal promotion campaigns

## 🔗 Helpful Resources

### **Business Resources**
- [Embroidery Business Startup Guide](https://www.embroiderytoday.com/business-guide)
- [Pricing Your Embroidery Work](https://printwear.com/pricing-embroidery/)
- [Small Business Administration](https://www.sba.gov/) - Loans and business advice
- [SCORE Mentors](https://www.score.org/) - Free business mentoring

### **Technical Resources**
- [Stripe Documentation](https://stripe.com/docs) - Payment processing
- [Vercel Documentation](https://vercel.com/docs) - Website hosting
- [Next.js Documentation](https://nextjs.org/docs) - Framework information
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling reference

### **Design Resources**  
- [Canva](https://www.canva.com/) - Create marketing graphics
- [Unsplash](https://unsplash.com/) - Free stock photos
- [Font Awesome](https://fontawesome.com/) - Icons and graphics
- [Adobe Express](https://express.adobe.com/) - Design tools

### **Marketing Resources**
- [Google My Business](https://www.google.com/business/) - Local search visibility
- [Facebook Business](https://business.facebook.com/) - Social media marketing
- [Mailchimp](https://mailchimp.com/) - Email marketing (integrates easily)
- [Google Analytics](https://analytics.google.com/) - Website traffic analysis

### **Industry Resources**
- [Embroidery Trade Association](https://www.embroiderytradeassociation.com/)
- [Printwear Magazine](https://printwear.com/) - Industry news and tips
- [ISS Long Beach](https://www.impressionsexpo.com/) - Trade show information
- [Decorated Apparel Expo](https://www.decoratedapparelexpo.com/) - Industry events

## 📞 Support Contacts

### **Immediate Help**
- **Technical Issues**: Create issue on [GitHub](https://github.com/robertisaacs-hash/sew-inspired/issues)
- **Payment Problems**: [Stripe Support](https://support.stripe.com/)
- **Hosting Issues**: [Vercel Support](https://vercel.com/help)

### **Business Development**
- **E-commerce Strategy**: Schedule consultation with web developer
- **Marketing Advice**: Local SCORE chapter or small business center
- **Legal/Tax**: Consult business attorney or accountant

### **Community Forums**
- [Reddit r/entrepreneur](https://reddit.com/r/entrepreneur) - Business advice
- [Facebook Embroidery Groups](https://www.facebook.com/groups/embroiderylovers) - Industry networking
- [Next.js Discord](https://discord.com/invite/bUG2bvbtHy) - Technical questions

## ✅ Pre-Launch Checklist

### **Business Setup**
- [ ] Business license and tax ID obtained
- [ ] Business bank account opened
- [ ] Business insurance purchased
- [ ] Stripe account verified and activated
- [ ] Product photos taken (high-resolution, multiple angles)
- [ ] Product descriptions written
- [ ] Pricing strategy finalized
- [ ] Shipping rates calculated
- [ ] Return/refund policy created
- [ ] Terms of service and privacy policy written

### **Website Setup** 
- [ ] Domain name purchased and connected
- [ ] SSL certificate active (automatic with Vercel)
- [ ] All products added with correct pricing
- [ ] Test orders completed successfully
- [ ] Payment processing tested with test cards
- [ ] Email notifications working (order confirmations, shipping updates)
- [ ] Contact forms functioning
- [ ] Mobile responsiveness verified
- [ ] Load speed optimized (should be under 3 seconds)
- [ ] SEO basics completed (meta titles, descriptions)

### **Marketing Preparation**
- [ ] Google My Business profile created
- [ ] Social media accounts established
- [ ] Business cards and promotional materials designed
- [ ] Launch announcement prepared
- [ ] Email list started (friends, family, initial contacts)
- [ ] Photography of sample embroidered products
- [ ] Before/after design examples created

## 📊 Success Metrics to Track

### **Week 1-4 (Launch Phase)**
- **Website Traffic**: 100-500 unique visitors
- **Conversion Rate**: 1-3% (1-3 orders per 100 visitors)
- **Average Order Value**: $25-45 per order
- **Customer Inquiries**: 5-15 per week
- **Design Uploads**: 10-30 per week

### **Month 2-3 (Growth Phase)**
- **Monthly Revenue**: $1,000-5,000
- **Repeat Customers**: 15-25%
- **Social Media Followers**: 100-500
- **Google Search Ranking**: Top 10 for local embroidery searches
- **Customer Reviews**: 4.5+ star average

### **Month 6+ (Established Phase)**
- **Monthly Revenue**: $5,000-15,000+
- **Customer Base**: 200-1,000 customers
- **Repeat Customer Rate**: 30%+
- **Bulk Orders**: 20%+ of revenue
- **Referral Rate**: 25%+ new customers from referrals

## 🎯 Business Growth Strategies

### **Year 1: Foundation**
1. **Perfect Your Process**: Focus on quality and customer satisfaction
2. **Build Local Presence**: Partner with local businesses, schools, sports teams
3. **Gather Reviews**: Encourage satisfied customers to leave reviews
4. **Refine Offerings**: Track which products and designs are most popular

### **Year 2: Expansion**
1. **Add Product Lines**: Expand beyond basic apparel (bags, uniforms, promotional items)
2. **Corporate Partnerships**: Develop B2B relationships for bulk orders
3. **Seasonal Campaigns**: Holiday designs, back-to-school, sports seasons
4. **Hire Help**: Consider part-time employees or contractors

### **Year 3+: Scale**
1. **Multiple Revenue Streams**: Wholesale, licensing designs, embroidery classes
2. **Additional Services**: Screen printing, vinyl cutting, promotional products
3. **Geographic Expansion**: Ship nationwide, additional locations
4. **Automation**: Invest in more automated embroidery equipment

## 🔄 Maintenance Schedule

### **Daily (5 minutes)**
- Check for new orders
- Respond to customer messages
- Update order statuses

### **Weekly (30 minutes)**
- Review sales analytics
- Update inventory levels  
- Post social media content
- Backup important files

### **Monthly (2 hours)**
- Analyze revenue and expenses
- Review customer feedback
- Update product photos/descriptions
- Plan promotional campaigns
- Review and respond to reviews

### **Quarterly (Half day)**
- Deep analytics review
- Update business strategy
- Review and update pricing
- Plan seasonal promotions
- Technology updates and improvements

## 💡 Pro Tips for Success

### **Customer Service Excellence**
1. **Respond Quickly**: Aim for under 2 hours during business hours
2. **Over-Communicate**: Keep customers updated throughout the process
3. **Quality Photos**: Send preview photos before shipping custom orders
4. **Follow Up**: Check satisfaction after delivery
5. **Handle Issues Gracefully**: Quick resolution builds loyalty

### **Design Quality**
1. **Educate Customers**: Provide clear guidelines for uploadable designs
2. **Offer Alternatives**: Suggest improvements for problematic designs
3. **Show Examples**: Display gallery of successful custom work
4. **Set Expectations**: Clear timelines and limitations
5. **Quality Control**: Never compromise on embroidery standards

### **Business Growth**
1. **Document Everything**: Keep records of successful strategies
2. **Network Actively**: Join local business groups and industry associations
3. **Stay Current**: Keep up with embroidery trends and techniques
4. **Invest in Quality**: Better equipment leads to better results
5. **Plan Ahead**: Anticipate seasonal demands and prepare inventory

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
