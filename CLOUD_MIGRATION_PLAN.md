# Mon Petit Bazaar - Cloud Migration Plan

Last updated: 2026-02-15  
Status: In progress

## 1. Goal
Migrate from GitHub Pages to a production-ready cloud setup with:
- Reliable SPA routing
- Custom domain + SSL
- Backend-ready architecture (API + PostgreSQL + optional Redis)
- CI/CD and observability
- Controlled monthly costs

## 2. Scope
In scope:
- Frontend hosting migration
- DNS cutover
- Backend foundation on cloud
- Database provisioning
- Deployment automation

Out of scope (for now):
- Full order/payment workflow redesign
- Multi-region architecture
- Advanced WAF tuning

## 3. Current State
- Frontend: React/Vite SPA on GitHub Pages
- Domain: `monpetitbazaar.fr` managed via OVH
- App routing: React Router (`/product/:slug`, etc.)
- Local infra references: Docker, PostgreSQL, Redis

## 4. Target Architecture (Recommended)
- Frontend: Firebase Hosting (CDN + SPA rewrites)
- API: Cloud Run (containerized backend)
- DB: Cloud SQL for PostgreSQL
- Cache (optional): Memorystore (Redis)
- Assets (optional but recommended): Cloud Storage for product images
- Secrets: Secret Manager
- Monitoring: Cloud Logging + Cloud Monitoring + budget alerts

## 5. Milestones

## M0 - Project Setup
Owner:  
Target date:  
Status: `IN_PROGRESS`

- [x] Create M0 implementation runbook and setup scripts in repo
- [ ] Create GCP project(s): `prod` (and optional `staging`)
- [ ] Enable billing + set budget alerts
- [ ] Enable APIs: Cloud Run, Cloud SQL Admin, Secret Manager, Artifact Registry
- [ ] Create IAM groups/users and least-privilege roles

Acceptance criteria:
- [ ] Team can access project with correct roles
- [ ] Budget alerts are active

## M1 - Frontend Migration (GitHub Pages -> Firebase Hosting)
Owner:  
Target date:  
Status: `TODO`

- [ ] Add Firebase project and Hosting config
- [ ] Configure SPA rewrite to `/index.html`
- [ ] Configure CI/CD deploy (GitHub Actions)
- [ ] Deploy preview and validate all deep links (`/product/...`, `/shop`, etc.)
- [ ] Configure custom domain (`monpetitbazaar.fr`, `www.monpetitbazaar.fr`)
- [ ] Validate SSL issuance and redirect policy

Acceptance criteria:
- [ ] Direct open of product URL works without 404
- [ ] Lighthouse and performance baseline captured
- [ ] DNS cutover completed with no downtime

## M2 - Backend Foundation on Cloud Run
Owner:  
Target date:  
Status: `TODO`

- [ ] Finalize backend runtime choice (Spring Boot expected)
- [ ] Containerize backend for production
- [ ] Push image to Artifact Registry
- [ ] Deploy service to Cloud Run
- [ ] Configure env vars and secrets
- [ ] Add health endpoint and readiness checks

Acceptance criteria:
- [ ] API responds on cloud URL
- [ ] Logs and error reporting visible in GCP

## M3 - Database Migration to Cloud SQL (PostgreSQL)
Owner:  
Target date:  
Status: `TODO`

- [ ] Create Cloud SQL PostgreSQL instance
- [ ] Configure private/public connectivity strategy
- [ ] Run schema migration scripts
- [ ] Load initial product data
- [ ] Wire Cloud Run to Cloud SQL
- [ ] Configure backup + retention

Acceptance criteria:
- [ ] App reads/writes correctly to Cloud SQL
- [ ] Backups are verified and recoverable

## M4 - Email and Contact Flow Hardening
Owner:  
Target date:  
Status: `TODO`

- [ ] Decide: keep EmailJS vs move to backend mail service
- [ ] If backend mail: implement API endpoint + provider (e.g., SendGrid/Postmark)
- [ ] Add anti-spam protections (rate limiting + basic captcha/honeypot)

Acceptance criteria:
- [ ] Contact flow tested from production URL
- [ ] Delivery success metrics available

## M5 - Observability, Security, and Reliability
Owner:  
Target date:  
Status: `TODO`

- [ ] Centralized logging and dashboards
- [ ] Uptime checks + alerting
- [ ] Secret rotation process documented
- [ ] Dependency and image vulnerability scanning
- [ ] Rollback procedure documented and tested

Acceptance criteria:
- [ ] Incident response basics documented
- [ ] Alerts verified by test incident

## M6 - Decommission GitHub Pages
Owner:  
Target date:  
Status: `TODO`

- [ ] Remove GitHub Pages DNS records
- [ ] Disable old GitHub Pages deployment workflow
- [ ] Archive legacy routing workaround notes

Acceptance criteria:
- [ ] No production traffic served via GitHub Pages

## 6. Progress Tracker
Update weekly.

| Milestone | Status | Owner | Target Date | Notes |
|---|---|---|---|---|
| M0 Project Setup | IN_PROGRESS |  |  | Runbook and API enable script added in `infra/gcp/` |
| M1 Frontend Migration | TODO |  |  |  |
| M2 Backend Foundation | TODO |  |  |  |
| M3 Database Migration | TODO |  |  |  |
| M4 Email Hardening | TODO |  |  |  |
| M5 Ops/Security | TODO |  |  |  |
| M6 Decommission Old Hosting | TODO |  |  |  |

## 7. Risks and Mitigations
- DNS propagation delay
  - Mitigation: low TTL before cutover, off-peak switch
- Unexpected Cloud SQL costs
  - Mitigation: start small, set budget alerts, monitor storage/egress
- Cloud Run cold starts
  - Mitigation: tune min instances only if needed
- Misconfigured secrets/env
  - Mitigation: staged rollout and smoke tests before production

## 8. Decision Log
Track key decisions with date and rationale.

| Date | Decision | Rationale | Owner |
|---|---|---|---|
| 2026-02-15 | Use GCP (Firebase Hosting + Cloud Run + Cloud SQL) | Best fit for current SPA + backend roadmap with low ops overhead |  |

## 9. Definition of Done
- [ ] Production frontend served from Firebase Hosting with domain + SSL
- [ ] Backend API deployed to Cloud Run
- [ ] PostgreSQL on Cloud SQL in active use
- [ ] CI/CD in place for frontend and backend
- [ ] Monitoring, alerts, and rollback runbook available
