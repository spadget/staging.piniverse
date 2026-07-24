# 🧪 Piniverse Staging

> **DEVELOPMENT AND TESTING REPOSITORY**
>
> Changes pushed here update the staging website only. They do not update the live Piniverse site.

## Staging site

https://spadget.github.io/staging.piniverse/

## Purpose

This repository is the safe development copy of Piniverse.

Use it to:

- build new pages and features
- test design changes
- experiment with code
- check changes before publishing them to production
- break things without affecting the live site 😄

## Environments

### Staging

- Repository: `spadget/staging.piniverse`
- Branch: `main`
- Website: https://spadget.github.io/staging.piniverse/
- Hosting: GitHub Pages
- Local folder: `staging.piniverse`

### Production

- Repository: `spadget/piniverse`
- Branch: `main`
- Website: https://piniverse.co.uk
- Hosting: GitHub Pages
- Local folder: `piniverse`

## Development process

1. Open the `staging.piniverse` folder in VS Code.
2. Make and test changes locally.
3. Commit and push changes to this repository.
4. Wait for GitHub Pages to update the staging website.
5. Test the changes on the staging website.
6. Copy the approved files into the production `piniverse` folder.
7. Review the production changes carefully.
8. Commit and push production only when ready.

Changes in staging do not automatically move into production.

## Staging differences

The staging repository deliberately differs from production in a few places:

- It does not contain the production `CNAME` file.
- It does not run the production notification workflow.
- It does not contain the production notification state file.
- It uses a different favicon so staging tabs are easy to recognise.

Do not copy these staging differences into production.

## Important safety rules

- Check that VS Code shows `STAGING.PINIVERSE` before starting development.
- Test unfinished work here, not in production.
- Never add the production `CNAME` file.
- Never commit passwords, private keys or Supabase service-role keys.
- Be careful when testing anything that writes to Supabase, as staging may still connect to production data.
- Review every file before copying it into production.

## Technology

Piniverse currently uses:

- HTML
- CSS
- JavaScript
- GitHub Pages
- Supabase
- GitHub Actions
