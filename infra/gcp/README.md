# GCP M0 Setup Runbook

This runbook executes Milestone M0 from `CLOUD_MIGRATION_PLAN.md`.

## What M0 delivers
- GCP project baseline (`prod`, optional `staging`)
- Billing linked
- Required APIs enabled
- IAM model defined (least privilege)
- Budget alerts configured

## Prerequisites
- `gcloud` CLI installed and authenticated
- `PROJECT_CREATOR` and `BILLING_ADMIN` rights in your Google Cloud org/account
- Billing account ID

Verify:
```bash
gcloud --version
gcloud auth list
gcloud config list account
```

## Naming convention
- Production project ID: `mpb-prod`
- Staging project ID: `mpb-staging`
- Region: `europe-west9` (Paris)

Adjust names if IDs are not available.

## Step 1 - Create/select project
```bash
gcloud projects create mpb-prod --name="Mon Petit Bazaar Prod"
gcloud config set project mpb-prod
```

Optional staging:
```bash
gcloud projects create mpb-staging --name="Mon Petit Bazaar Staging"
```

## Step 2 - Link billing
```bash
gcloud billing accounts list
gcloud billing projects link mpb-prod --billing-account=YOUR_BILLING_ACCOUNT_ID
```

## Step 3 - Enable required APIs
From repo root:
```bash
bash infra/gcp/m0-enable-services.sh mpb-prod
```

## Step 4 - Create IAM groups and role bindings
Create Google Groups first (example):
- `mpb-admins@yourdomain.com`
- `mpb-devops@yourdomain.com`
- `mpb-dev@yourdomain.com`
- `mpb-viewers@yourdomain.com`

Then bind roles (examples):
```bash
gcloud projects add-iam-policy-binding mpb-prod \
  --member="group:mpb-admins@yourdomain.com" \
  --role="roles/owner"

gcloud projects add-iam-policy-binding mpb-prod \
  --member="group:mpb-devops@yourdomain.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding mpb-prod \
  --member="group:mpb-devops@yourdomain.com" \
  --role="roles/artifactregistry.admin"

gcloud projects add-iam-policy-binding mpb-prod \
  --member="group:mpb-devops@yourdomain.com" \
  --role="roles/cloudsql.admin"

gcloud projects add-iam-policy-binding mpb-prod \
  --member="group:mpb-dev@yourdomain.com" \
  --role="roles/run.developer"

gcloud projects add-iam-policy-binding mpb-prod \
  --member="group:mpb-viewers@yourdomain.com" \
  --role="roles/viewer"
```

Use tighter roles over time and avoid long-term `roles/owner`.

## Step 5 - Configure budget alerts
Budget setup can be done in Console:
- Billing -> Budgets & alerts -> Create budget
- Scope: `mpb-prod`
- Alerts at: 50%, 80%, 100%
- Add email recipients (owners/devops)

CLI alternative:
- Use `gcloud beta billing budgets ...` commands if available in your installed SDK.

## Step 6 - Collect evidence for tracker
Save outputs/screenshots for:
- Project created
- Billing linked
- APIs enabled
- IAM bindings
- Budget alerts

Suggested command evidence:
```bash
gcloud config get-value project
gcloud services list --enabled
gcloud projects get-iam-policy mpb-prod
```

## Done checklist (M0)
- [ ] Project(s) exist and selected
- [ ] Billing is linked
- [ ] Required APIs enabled
- [ ] IAM groups/roles applied
- [ ] Budget alerts active
