# Mjolnir Website Audit

## Scope

This audit documents the current production website before any v2 design or content migration work. The production website is served from the repository root. The new development area is isolated under `website-v2/`.

## Repository State

- Remote: `https://github.com/bentpetersendk/mjolnir-ucph.github.io`
- Local path: `/Users/bentpetersen/GitHub/Mjolnir_Website`
- Current branch during setup: `website-v2-setup`
- `HEAD` and `origin/main`: `30e4b97773e0b325a25f8ded90a1b14635172934`
- Production files are tracked from the repository root.
- `docs/` and `website-v2/` are new development additions and are not used by the production site.

## Directory Structure

- Repository root: production static HTML files and GitHub Pages configuration.
- `assets/`: production CSS, JavaScript, fonts, images, and Mobirise-generated assets.
- `docs/`: setup and audit documentation for the v2 migration.
- `website-v2/`: isolated next-generation website development area.

## Current Sitemap

Primary production pages:

- `index.html` - home page and Mjolnir overview.
- `about.html` - about page.
- `about_mjolnir.html` - Mjolnir-specific background page.
- `Hardware.html` - hardware page with Airtable embed.
- `software.html` - software page.
- `databases.html` - databases page.
- `PI_area.html` - principal investigator area.
- `knowledgebase.html` - knowledgebase handoff page.
- `disruptions.html` - disruptions page with Airtable embed.
- `Usage_Statistics.html` - server usage landing page.
- `Usage Statistics.html` - alternate usage statistics filename.
- `cluster_utilization.html` - cluster utilization page.
- `current_cluster_utilization.html` - current utilization page.
- `cluster_utilization_over_time.html` - utilization history page.
- `job_statistics.html` - job statistics page.
- `api_test.html` - API test page.

Legacy or miscellaneous pages:

- `page1.html`
- `page2.html`
- `page3.html`
- `page5.html`
- `page30.html`

PI/user-specific pages:

- `Anders_Johannes_Hansen.html`
- `Antton_Alberdi_Estibaritz.html`
- `Carsten_Rahbek.html`
- `Christopher_James_Barnes.html`
- `David_Bravo_Nogues.html`
- `Eline_Lorenzen.html`
- `Enrico_Cappellini.html`
- `Frido_Welker.html`
- `Hannes_Schroeder.html`
- `Hernan_Eduardo_Morales_Villegas.html`
- `Ida_Hartvig.html`
- `Jazmin_Ramos_Madrigal.html`
- `Kristine_Bohmann.html`
- `Laurits_Skov.html`
- `Matthew_James_Collins.html`
- `Michael_Krabbe_Borregaard.html`
- `Morten_Tange_Olsen.html`
- `Morten_Tonsberg_Limborg.html`
- `Ostaizka_Aizpurua_Arrieta.html`
- `Peter_Andrew_Hosner.html`
- `Rute_Andreia_Rodrigues_da_Fonseca.html`
- `Sandra_Breum_Andersen.html`
- `Shyam_Gopalakrishnan.html`
- `Thomas_Sicheritz-Ponten.html`
- `Tom_Gilbert.html`

## Navigation Structure

The common production navigation includes:

- Home
- PI Area
- About
- Hardware
- Software
- Databases
- Server usage
- Cluster utilization
- Current utilization
- Utilization over time
- Job usage statistics
- Knowledgebase
- Account request
- Support ticket
- Discord icon link

The navigation markup is duplicated across pages rather than generated from a single source.

## Existing Functionality

- Static GitHub Pages website generated with Mobirise and Bootstrap.
- Responsive Bootstrap navigation with dropdown menus.
- Mjolnir overview content and branding.
- Hardware, software, databases, statistics, support, PI, and knowledgebase content areas.
- Airtable embeds for hardware, disruptions, and PI/user cost/accounting dashboards.
- Freshdesk links for support and account requests.
- Discord community link in the navigation and footer.
- Google Analytics / Google Tag Manager tracking on production pages.

## HTML Pages

- The site is a flat set of root-level HTML files.
- Most pages share nearly identical head, navigation, analytics, footer, and script blocks.
- Page-specific content is embedded directly in each HTML file.
- Several pages appear to be legacy generated pages or older versions of current sections.

## CSS Files

Production CSS files:

- `assets/bootstrap/css/bootstrap.min.css`
- `assets/bootstrap/css/bootstrap-grid.min.css`
- `assets/bootstrap/css/bootstrap-reboot.min.css`
- `assets/dropdown/css/style.css`
- `assets/socicon/css/styles.css`
- `assets/theme/css/style.css`
- `assets/mobirise/css/mbr-additional.css`
- `assets/web/assets/mobirise-icons2/mobirise2.css`
- `assets/web/assets/mobirise-icons-bold/mobirise-icons-bold.css`

The CSS footprint is generated and broad. Much of the page-specific styling appears bundled into `mbr-additional.css`.

## JavaScript Files

Production JavaScript files:

- `assets/bootstrap/js/bootstrap.bundle.min.js`
- `assets/dropdown/js/navbar-dropdown.js`
- `assets/smoothscroll/smooth-scroll.js`
- `assets/theme/js/script.js`
- `assets/ytplayer/index.js`

The production site relies on Bootstrap and Mobirise helper scripts for menu behavior, smooth scrolling, and generated theme behavior.

## Assets

Production assets include:

- Image assets under `assets/images/`, including logos, metadata images, screenshots, and hero imagery.
- Socicon fonts under `assets/socicon/fonts/`.
- Mobirise icon fonts under `assets/web/assets/`.
- `project.mobirise`, indicating the site was generated from Mobirise.
- `CNAME`, used by GitHub Pages for the production domain.

## Documentation Links

Known documentation and support destinations:

- Freshdesk support home: `https://mjolnirucph-help.freshdesk.com/support/home`
- Freshdesk new user request article: `https://mjolnirucph-help.freshdesk.com/support/solutions/articles/154000139735-new-user-request`
- Read the Docs legacy documentation: `https://mjolnir-ucph.readthedocs.io/en/latest/index.html`

## Statistics Integrations

- Production statistics pages are static HTML pages.
- Server usage navigation groups cluster utilization and job usage statistics.
- Some usage pages appear to use embedded or generated content rather than a shared local data model.
- Google Analytics measurement ID: `G-8NTK66PPBM`.

## Existing Forms

- No native first-party HTML form workflow was identified in the repository.
- Account requests and support tickets are handled through Freshdesk links.
- Several Airtable views are embedded or linked, including PI-specific accounting and current active user views.

## External Dependencies

- Google Fonts: Jost font family.
- Google Tag Manager / Google Analytics.
- Airtable embeds and shared views.
- Freshdesk support and account request workflows.
- Discord invite link.
- Read the Docs legacy documentation.
- Bootstrap and Mobirise assets vendored locally in `assets/`.

## Technical Debt

- Duplicated navigation, analytics, footer, and dependency markup across many files.
- Flat root-level structure makes ownership and migration boundaries hard to see.
- Generated CSS is large and difficult to reason about manually.
- PI/user-specific pages duplicate almost all structure and differ mainly by Airtable links.
- External content dependencies are scattered through static HTML.
- Mixed filename casing and spaces make URLs harder to manage.
- `Usage Statistics.html` and `Usage_Statistics.html` indicate duplicate or transitional content.
- Legacy pages such as `page1.html`, `page2.html`, `page3.html`, `page5.html`, and `page30.html` need ownership review.

## Duplicate Content

- Common navigation repeated across production pages.
- Common analytics snippet repeated across production pages.
- Common asset imports repeated across production pages.
- Common footer and Discord link repeated across production pages.
- PI/user pages repeat the same explanatory text and layout with different Airtable links.
- Knowledgebase messaging appears in both `knowledgebase.html` and `page5.html`.

## Migration Opportunities

- Build all new work in `website-v2/` until launch readiness.
- Convert root-level page concepts into a smaller, intentional navigation model.
- Create one source of truth for navigation.
- Move repeated PI/user data into structured JSON or a managed data source.
- Replace duplicate static statistics pages with data-driven components.
- Create a documented dependency inventory before recreating embeds.
- Keep Freshdesk, Discord, Airtable, and analytics decisions explicit during migration.
- Preserve production URLs until redirects or launch routing are planned.

## Decisions

- Do not edit, delete, rename, or move production files during v2 setup.
- Keep v2 assets, CSS, JavaScript, data, and docs inside `website-v2/`.
- Treat `docs/site-audit.md` as the only root-level documentation addition for the setup audit.
- Use placeholder v2 pages until design and content migration begins.
