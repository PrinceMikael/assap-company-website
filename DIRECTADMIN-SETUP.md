# DirectAdmin Setup Guide - Step by Step

You have **TWO OPTIONS** for deploying to DirectAdmin:

---

## ✅ OPTION 1: Using Git (RECOMMENDED - Easier Updates)

### Step 1: Prepare Your GitHub Repository

**On Your Computer (Right Now):**

1. Open terminal in VS Code (or PowerShell)
2. Run these commands:

```bash
git add .
git commit -m "Prepare for DirectAdmin deployment"
git push origin main
```

> ⚠️ Make sure your GitHub repository is up to date!

---

### Step 2: Access DirectAdmin

1. Open your browser
2. Go to: `https://your-server-ip:2222` or `https://yourdomain.com:2222`
3. Login with your DirectAdmin credentials
   - Username: (provided by your hosting)
   - Password: (provided by your hosting)

---

### Step 3: Setup Your Domain

**In DirectAdmin Panel:**

1. Click **"Account Manager"** or **"Domain Setup"**
2. Click **"Add Domain"** or **"Domain Pointers"**
3. Enter your custom domain (e.g., `yourcompany.com`)
4. Click **"Add"**

---

### Step 4: Update DNS Settings

**At Your Domain Registrar (GoDaddy, Namecheap, etc.):**

1. Log in to where you bought your domain
2. Find **DNS Settings** or **Nameservers**
3. Add these records:
   - **A Record**: `@` → Your DirectAdmin Server IP
   - **CNAME Record**: `www` → `yourcompany.com`
4. Save changes (takes 10-60 minutes to propagate)

---

### Step 5: Enable SSH Access

**In DirectAdmin:**

1. Go to **"System Info & Files"** → **"SSH Access"**
2. Enable SSH if not already enabled
3. Note your SSH details:
   - Host: `your-server-ip` or `yourdomain.com`
   - Port: Usually `22`
   - Username: Your DirectAdmin username

---

### Step 6: Connect via SSH

**Open PowerShell on Your Computer:**

```powershell
ssh your-username@your-server-ip
# Example: ssh admin@192.168.1.100
```

Enter your password when prompted.

---

### Step 7: Find Your Domain Directory

**In SSH Terminal:**

```bash
# List your domains
ls ~/domains/

# Navigate to your domain folder
cd ~/domains/yourcompany.com/public_html

# Check if you're in the right place
pwd
```

> 📝 Common paths: `~/domains/yourcompany.com/public_html` or `~/public_html/yourcompany.com`

---

### Step 8: Install Node.js (If Not Installed)

**Check if Node.js is installed:**

```bash
node --version
```

**If not installed or version is below 18:**
- Contact your hosting provider support
- Ask them to enable **Node.js 18** or higher for your account
- Some hosts have a "Node.js Selector" in DirectAdmin

---

### Step 9: Clone Your GitHub Repository

**In SSH Terminal (in your domain folder):**

```bash
# Remove default files if any
rm -rf *
rm -rf .*
# Be careful! Make sure you're in the right directory (check with pwd)

# Clone your repository
git clone https://github.com/YOUR-USERNAME/assap-company-website.git .
# Don't forget the dot (.) at the end!
# Replace YOUR-USERNAME with your actual GitHub username
```

**If your repository is private:**
```bash
git clone https://YOUR-TOKEN@github.com/YOUR-USERNAME/assap-company-website.git .
```

---

### Step 10: Install Dependencies

```bash
npm install --production
```

This will take a few minutes.

---

### Step 11: Create Environment File

```bash
# Copy the example file
cp .env.example .env.production

# Edit the file
nano .env.production
```

**Update these values:**
```env
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_SITE_URL=https://yourcompany.com
EMAIL_HOST=mail.yourcompany.com
EMAIL_PORT=587
EMAIL_USER=noreply@yourcompany.com
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=noreply@yourcompany.com
EMAIL_TO=info@yourcompany.com
```

**Save and exit:**
- Press `Ctrl + X`
- Press `Y`
- Press `Enter`

---

### Step 12: Build the Project

```bash
npm run build
```

Wait for the build to complete (2-5 minutes).

---

### Step 13: Install PM2

```bash
npm install -g pm2
```

---

### Step 14: Start Your Application

```bash
pm2 start ecosystem.config.js
```

---

### Step 15: Configure Auto-Start on Reboot

```bash
pm2 startup
# Copy and run the command it shows you

pm2 save
```

---

### Step 16: Check if Running

```bash
pm2 status
pm2 logs assap-website
```

You should see your app running!

---

### Step 17: Configure Reverse Proxy

**Go back to DirectAdmin → File Manager:**

1. Navigate to your `public_html` folder
2. Create or edit `.htaccess` file
3. Add this content:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

4. Save the file

**OR contact your hosting support and say:**
> "Please configure a reverse proxy from my domain to http://localhost:3000"

---

### Step 18: Enable SSL Certificate

**In DirectAdmin:**

1. Go to **"SSL Certificates"**
2. Click **"Let's Encrypt"**
3. Select your domain
4. Click **"Request Certificate"**
5. Wait 1-2 minutes

---

### Step 19: Test Your Website

Open your browser and go to:
- `https://yourcompany.com`

🎉 Your website should be live!

---

## 🔄 UPDATING YOUR WEBSITE (After Making Changes)

Whenever you make changes to your code:

**1. On Your Computer:**
```bash
git add .
git commit -m "Your update message"
git push origin main
```

**2. SSH into Server:**
```bash
ssh your-username@your-server-ip
cd ~/domains/yourcompany.com/public_html
```

**3. Pull and Deploy:**
```bash
git pull origin main
npm install --production
npm run build
pm2 restart assap-website
```

**4. Check Status:**
```bash
pm2 logs assap-website
```

Done! Your changes are live.

---

---

## ❌ OPTION 2: Manual Upload (Not Recommended)

### Step 1: Build Your Project Locally

**On Your Computer:**

```bash
npm install
npm run build
```

---

### Step 2: Prepare Files to Upload

You need to upload these files/folders:
- ✅ `.next/` folder
- ✅ `public/` folder  
- ✅ `node_modules/` folder (WARNING: Very large!)
- ✅ `package.json`
- ✅ `package-lock.json`
- ✅ `next.config.mjs`
- ✅ `ecosystem.config.js`
- ✅ `.env.production` (create from .env.example)
- ✅ All other config files

---

### Step 3: Compress Files (Optional but Recommended)

```bash
# Create a zip file
Compress-Archive -Path * -DestinationPath website.zip
```

---

### Step 4: Upload to DirectAdmin

**Method A: Using File Manager**

1. Login to DirectAdmin
2. Go to **"File Manager"**
3. Navigate to `domains/yourcompany.com/public_html`
4. Click **"Upload"**
5. Upload your `website.zip` file
6. Right-click → **"Extract"**
7. Wait for extraction to complete

**Method B: Using FTP**

1. Download FileZilla: https://filezilla-project.org/
2. Connect to your server:
   - Host: `ftp.yourcompany.com`
   - Username: Your DirectAdmin username
   - Password: Your DirectAdmin password
   - Port: 21
3. Navigate to `domains/yourcompany.com/public_html`
4. Upload all files (this will take HOURS because of node_modules)

---

### Step 5: SSH into Server

```bash
ssh your-username@your-server-ip
cd ~/domains/yourcompany.com/public_html
```

---

### Step 6: Install Dependencies (if you didn't upload node_modules)

```bash
npm install --production
```

---

### Step 7-18: Follow Same Steps as Option 1

Continue from Step 11 in Option 1 above.

---

## ⚠️ Why Option 1 (Git) is Better:

| Feature | Git Method | Manual Upload |
|---------|-----------|---------------|
| Initial Setup | 5 minutes | 2-3 hours |
| Updates | 30 seconds | 1-2 hours |
| File Size | Small (code only) | Huge (includes node_modules) |
| Errors | Less likely | More likely |
| Version Control | ✅ Yes | ❌ No |
| Recommended | ✅ YES | ❌ NO |

---

## 🆘 Troubleshooting

### "Node.js not found"
- Contact hosting support to enable Node.js

### "Permission denied" when cloning
- Check if your GitHub repo is public or use access token

### "Port 3000 already in use"
- Change port in ecosystem.config.js
- Or kill existing process: `pm2 delete all`

### "Cannot connect to website"
- Check if app is running: `pm2 status`
- Check logs: `pm2 logs assap-website`
- Verify reverse proxy is configured

### "SSL Certificate failed"
- Make sure DNS is pointing to server
- Wait 10-60 minutes for DNS propagation
- Try again

---

## 📞 Need Help?

1. **Hosting Support**: Contact your DirectAdmin hosting provider
2. **GitHub Issues**: Check repository issues
3. **PM2 Logs**: Always check `pm2 logs assap-website` first

---

**Good luck! 🚀 Follow Option 1 (Git) for the smoothest experience!**
