# 🚀 Quick Start Guide

Your personal website is ready! Here's everything you need to know.

## ✅ What's Been Created

1. **React Website** with TypeScript and Tailwind CSS
2. **Routing** with React Router (Home, Courses, About, Contact)
3. **Derivative Course** with the Options Trading presentation integrated
4. **Presentation Viewer** that loads your HTML presentation
5. **Cloudflare Pages** configuration ready for deployment

## 🏃 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd website
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:5173

### 3. Deploy to Cloudflare Pages
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📁 Key Files

- **`src/data/courses.ts`** - Add/edit courses and presentations here
- **`public/presentation-options-trading.html`** - Your presentation file
- **`src/pages/PresentationViewer.tsx`** - Presentation viewer component
- **`src/components/Header.tsx`** - Navigation header (customize your name here)
- **`src/components/Footer.tsx`** - Footer (update social links here)

## 🎨 Customize Your Site

1. **Change Your Name**: Edit `src/components/Header.tsx` (line 11)
2. **Update Footer**: Edit `src/components/Footer.tsx` (social links, email)
3. **Change Colors**: Edit `src/index.css` (CSS variables)
4. **Add More Courses**: Edit `src/data/courses.ts`

## 📚 Current Courses

- **Derivatives**
  - Introduction to Options Trading (your presentation)

## 🔗 Routes

- `/` - Homepage
- `/courses` - All courses
- `/course/derivatives` - Derivative course page
- `/course/derivatives/presentation/options-trading-intro` - Your presentation

## 🚢 Deployment Checklist

- [ ] Push code to Git repository
- [ ] Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
- [ ] Create new Pages project
- [ ] Connect Git repository
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `dist`
- [ ] Set root directory: `website` (if in monorepo)
- [ ] Deploy!

## 📖 Need More Help?

- **Setup details**: See [SETUP.md](./SETUP.md)
- **Deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Full documentation**: See [README.md](./README.md)

## 🎉 You're All Set!

Your website is ready to go. Just install dependencies, customize it, and deploy!

