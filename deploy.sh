#!/bin/bash

# Configuration
S3_BUCKET_1="vinny.io"
S3_BUCKET_2="vinny.dev"
CLOUDFRONT_DISTRIBUTION_ID_1="E6H8E9ZFLB1QJ"
CLOUDFRONT_DISTRIBUTION_ID_2="E2OH97HIWZX2L9"
REGION="us-east-1"  # Change this to your AWS region if different

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "🚀 Starting deployment process..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    exit 1
fi

# Check if user is authenticated with AWS
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}Error: Not authenticated with AWS. Please run 'aws configure' first${NC}"
    exit 1
fi

# Check if out directory exists
if [ ! -d "out" ]; then
    echo -e "${RED}Error: 'out' directory not found. Please run 'npm run build' first${NC}"
    exit 1
fi

# Function to deploy to a single bucket
deploy_to_bucket() {
    local bucket=$1
    local distribution_id=$2
    
    echo "📤 Deploying to bucket: $bucket"
    
    # Change to out directory
    cd out

    # Sync files to S3 bucket with public read access
    echo "📤 Uploading HTML files..."
    if aws s3 sync . s3://$bucket \
        --exclude "*.git/*" \
        --exclude "deploy.sh" \
        --exclude "README.md" \
        --exclude ".DS_Store" \
        --exclude "node_modules/*" \
        --exclude "*.log" \
        --delete \
        --acl public-read \
        --cache-control "max-age=3600" \
        --content-type "text/html" \
        --exclude "*.css" \
        --exclude "*.js" \
        --exclude "*.png" \
        --exclude "*.jpg" \
        --exclude "*.ico" \
        --exclude "*.svg"; then
        echo -e "${GREEN}✅ HTML files uploaded successfully to $bucket${NC}"
    else
        echo -e "${RED}❌ Error uploading HTML files to $bucket${NC}"
        return 1
    fi

    # Upload CSS files with appropriate content type
    echo "📤 Uploading CSS files..."
    if aws s3 sync . s3://$bucket \
        --exclude "*" \
        --include "*.css" \
        --acl public-read \
        --cache-control "max-age=3600" \
        --content-type "text/css"; then
        echo -e "${GREEN}✅ CSS files uploaded successfully to $bucket${NC}"
    else
        echo -e "${RED}❌ Error uploading CSS files to $bucket${NC}"
        return 1
    fi

    # Upload JavaScript files with appropriate content type
    echo "📤 Uploading JavaScript files..."
    if aws s3 sync . s3://$bucket \
        --exclude "*" \
        --include "*.js" \
        --acl public-read \
        --cache-control "max-age=3600" \
        --content-type "application/javascript"; then
        echo -e "${GREEN}✅ JavaScript files uploaded successfully to $bucket${NC}"
    else
        echo -e "${RED}❌ Error uploading JavaScript files to $bucket${NC}"
        return 1
    fi

    # Upload image and icon files with appropriate content types
    echo "📤 Uploading image files..."
    if aws s3 sync . s3://$bucket \
        --exclude "*" \
        --include "*.png" \
        --include "*.jpg" \
        --include "*.ico" \
        --include "*.svg" \
        --acl public-read \
        --cache-control "max-age=86400"; then
        echo -e "${GREEN}✅ Image files uploaded successfully to $bucket${NC}"
    else
        echo -e "${RED}❌ Error uploading image files to $bucket${NC}"
        return 1
    fi

    # Invalidate CloudFront cache
    echo "🔄 Invalidating CloudFront cache for distribution: $distribution_id..."
    if aws cloudfront create-invalidation \
        --distribution-id $distribution_id \
        --paths "/*"; then
        echo -e "${GREEN}✅ CloudFront cache invalidation initiated for $distribution_id${NC}"
    else
        echo -e "${RED}❌ Error invalidating CloudFront cache for $distribution_id${NC}"
        return 1
    fi

    # Return to original directory
    cd ..
}

# Deploy to first bucket
echo "📦 Deploying to first bucket..."
if ! deploy_to_bucket $S3_BUCKET_1 $CLOUDFRONT_DISTRIBUTION_ID_1; then
    echo -e "${RED}❌ Deployment to first bucket failed${NC}"
    exit 1
fi

# Deploy to second bucket
echo "📦 Deploying to second bucket..."
if ! deploy_to_bucket $S3_BUCKET_2 $CLOUDFRONT_DISTRIBUTION_ID_2; then
    echo -e "${RED}❌ Deployment to second bucket failed${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Deployment completed successfully to both buckets!${NC}"
echo "Note: CloudFront cache invalidation may take a few minutes to complete" 