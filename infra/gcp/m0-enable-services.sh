#!/usr/bin/env bash
set -euo pipefail

if [[ "${1:-}" == "" ]]; then
  echo "Usage: $0 <PROJECT_ID>"
  exit 1
fi

PROJECT_ID="$1"

echo "Setting active project to: ${PROJECT_ID}"
gcloud config set project "${PROJECT_ID}" >/dev/null

echo "Enabling required APIs for M0..."
gcloud services enable \
  run.googleapis.com \
  sqladmin.googleapis.com \
  secretmanager.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  iam.googleapis.com \
  billingbudgets.googleapis.com

echo "Enabled services:"
gcloud services list --enabled \
  --filter="name:run.googleapis.com OR name:sqladmin.googleapis.com OR name:secretmanager.googleapis.com OR name:artifactregistry.googleapis.com OR name:cloudbuild.googleapis.com OR name:iam.googleapis.com OR name:billingbudgets.googleapis.com" \
  --format="table(name,title)"

echo "M0 API enablement completed for ${PROJECT_ID}."
