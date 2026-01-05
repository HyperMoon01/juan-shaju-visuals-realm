# GitHub Pages Deployment Instructions for Custom Domain

1. **Set the correct `base` in `vite.config.ts`:**
   - If your custom domain is e.g. `https://mydomain.com`, set:
     ```ts
     base: '/',
     ```
   - If you use a subdomain or subpath, adjust accordingly.

2. **Add a `CNAME` file to the `public` folder:**
   - Create a file named `CNAME` (no extension) in `public/`.
   - The file should contain only your custom domain, e.g.:
     ```
     mydomain.com
     ```

3. **Push your changes to GitHub.**

4. **Configure your GitHub repository:**
   - Go to your repo's Settings > Pages.
   - Set the source branch to `gh-pages` (or the branch your deploy script uses).
   - Set the custom domain to your domain (e.g., `mydomain.com`).

5. **Update your DNS settings:**
   - Add a CNAME record pointing your domain to `<your-github-username>.github.io`.
   - For root domains, you may need to use A records as per GitHub Pages documentation.

6. **Deploy:**
   - Run `npm run deploy` to publish your site.

---

If you provide your actual domain, I can generate the exact `CNAME` file for you.