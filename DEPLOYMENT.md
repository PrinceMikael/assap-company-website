# DirectAdmin Deployment Guide for ASSAP Company Website

## Prerequisites on DirectAdmin Server
1. **Node.js** (v18 or higher) - Contact your hosting provider to enable
2. **PM2** - Process manager for Node.js
3. **Git** - For pulling code from GitHub
4. **SSH Access** - To run commands on the server

---

## Step-by-Step Deployment Process

### 1. Prepare Your Domain in DirectAdmin

1. Log in to your DirectAdmin panel
2. Go to **Account Manager** → **Domain Setup**
3. Add your custom domain (e.g., `yourcompany.com`)
4. Point your domain's DNS to the DirectAdmin server IP
   - A Record: `@` → `Your Server IP`
   - CNAME Record: `www` → `yourcompany.com`

### 2. SSH into Your Server

```bash
ssh username@yourserver.com
# Or use the SSH terminal in DirectAdmin if available
```

### 3. Navigate to Your Domain Directory

```bash
cd ~/domains/yourcompany.com/public_html
# Or the path specified by your hosting provider
```

### 4. Clone Your GitHub Repository

```bash
# If directory is not empty, remove default files first
rm -rf *

# Clone your repository
git clone https://github.com/yourusername/assap-company-website.git .
# The dot (.) at the end clones into current directory
```

### 5. Install Dependencies

```bash
npm install --production
```

### 6. Set Up Environment Variables

```bash
# Copy the example file
cp .env.example .env.production

# Edit the file with your production values
nano .env.production
# or
vi .env.production
```

Update the following values:
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://yourcompany.com`
- Email configuration (SMTP settings)
- Any other environment-specific variables

Press `Ctrl+X`, then `Y`, then `Enter` to save (in nano)

### 7. Build the Project

```bash
npm run build
```

This will create an optimized production build.

### 8. Install PM2 Globally (if not already installed)

```bash
npm install -g pm2
```

### 9. Create Logs Directory

```bash
mkdir -p logs
```

### 10. Start the Application with PM2

```bash
pm2 start ecosystem.config.js
```

### 11. Configure PM2 to Start on Server Reboot

```bash
pm2 startup
# Follow the instructions displayed
pm2 save
```

### 12. Check Application Status

```bash
pm2 status
pm2 logs assap-website
```

### 13. Configure Reverse Proxy (Important!)

Your DirectAdmin needs to proxy requests to your Next.js app running on port 3000.

**Option A: Using .htaccess** (in public_html)

Create or edit `.htaccess`:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

**Option B: Contact Your Hosting Provider**
Some hosts require server-level configuration. Ask them to set up a reverse proxy from your domain to `http://localhost:3000`.

### 14. Enable SSL Certificate

1. In DirectAdmin: **SSL Certificates** → **Let's Encrypt**
2. Select your domain
3. Click **Request Certificate**
4. Wait for certificate installation

---

## Updating Your Website (After Changes)

### When you make changes and push to GitHub:

1. **SSH into your server**
   ```bash
   ssh username@yourserver.com
   ```

2. **Navigate to project directory**
   ```bash
   cd ~/domains/yourcompany.com/public_html
   ```

3. **Pull latest changes**
   ```bash
   git pull origin main
   # Or: git pull origin master (depending on your branch name)
   ```

4. **Install any new dependencies**
   ```bash
   npm install --production
   ```

5. **Rebuild the project**
   ```bash
   npm run build
   ```

6. **Restart the application**
   ```bash
   pm2 restart assap-website
   ```

7. **Verify it's running**
   ```bash
   pm2 status
   pm2 logs assap-website --lines 50
   ```

---

## Automated Deployment (Optional but Recommended)

Create a deployment script on your server: `deploy.sh`

```bash
#!/bin/bash
cd ~/domains/yourcompany.com/public_html
git pull origin main
npm install --production
npm run build
pm2 restart assap-website
echo "Deployment completed at $(date)"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run updates with:
```bash
./deploy.sh
```

---

## Common PM2 Commands

```bash
# View all running apps
pm2 list

# View logs
pm2 logs assap-website

# Restart app
pm2 restart assap-website

# Stop app
pm2 stop assap-website

# Delete app from PM2
pm2 delete assap-website

# Monitor CPU/Memory
pm2 monit
```

---

## Troubleshooting

### App Not Starting
```bash
# Check logs
pm2 logs assap-website --lines 100

# Check if port 3000 is in use
netstat -tlnp | grep 3000
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Environment Variables Not Loading
```bash
# Verify .env.production exists
cat .env.production

# Restart PM2
pm2 restart assap-website --update-env
```

### Permission Issues
```bash
# Fix file permissions
chmod -R 755 ~/domains/yourcompany.com/public_html
```

---

## Important Notes

1. **Never commit .env files** - They contain sensitive information
2. **Always test locally first** - Run `npm run build` before pushing
3. **Keep dependencies updated** - Run `npm audit` regularly
4. **Monitor logs** - Check PM2 logs for errors
5. **Backup your database** - If you add one in the future
6. **Use HTTPS** - Always enable SSL certificates

---

## Quick Reference

| Task | Command |
|------|---------|
| Deploy updates | `./deploy.sh` |
| View logs | `pm2 logs assap-website` |
| Restart app | `pm2 restart assap-website` |
| Check status | `pm2 status` |
| Build locally | `npm run build` |
| Test locally | `npm run dev` |

---

## Support Contacts

- **DirectAdmin Support**: Contact your hosting provider
- **GitHub Issues**: Create an issue in your repository
- **Node.js Version**: Ensure server runs Node.js 18+

---

Good luck with your deployment! 🚀
