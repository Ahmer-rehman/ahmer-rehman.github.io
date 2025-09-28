#!/bin/bash

# Build the project
echo "Building portfolio..."
npm run build

# Copy contents of out folder to a temporary directory
echo "Preparing files for deployment..."
cp -r out/* ../portfolio-deploy/

# Navigate to deploy directory
cd ../portfolio-deploy

# Add all files to git
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy portfolio - $(date)"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "Deployment complete! Your portfolio will be available at:"
echo "https://yourusername.github.io/portfolio-web"
