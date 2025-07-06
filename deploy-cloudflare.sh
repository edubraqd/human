#!/bin/bash

# Automated Cloudflare DNS setup for $HUMAN Token Website
# Requires CF_API_TOKEN, CF_ZONE_ID, DOMAIN and SERVER_IP environment variables.
# Creates or updates A records for the root domain and www.

set -e

if [ -z "$CF_API_TOKEN" ] || [ -z "$CF_ZONE_ID" ] || [ -z "$DOMAIN" ] || [ -z "$SERVER_IP" ]; then
  echo "Missing environment variables. Please set CF_API_TOKEN, CF_ZONE_ID, DOMAIN and SERVER_IP."
  exit 1
fi

if ! command -v curl >/dev/null; then
  echo "curl is required but not installed."
  exit 1
fi

if ! command -v jq >/dev/null; then
  echo "jq is required but not installed."
  exit 1
fi

api() {
  curl -s -H "Authorization: Bearer $CF_API_TOKEN" \
       -H "Content-Type: application/json" "$@"
}

create_or_update() {
  local record_name="$1"
  local record_ip="$2"
  existing_id=$(api "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/dns_records?type=A&name=$record_name" | jq -r '.result[0].id')
  if [ "$existing_id" = "null" ]; then
    echo "Creating A record $record_name -> $record_ip"
    api -X POST "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/dns_records" \
      --data '{"type":"A","name":"'"$record_name"'","content":"'"$record_ip"'","ttl":1,"proxied":true}' > /dev/null
  else
    echo "Updating A record $record_name -> $record_ip"
    api -X PUT "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/dns_records/$existing_id" \
      --data '{"type":"A","name":"'"$record_name"'","content":"'"$record_ip"'","ttl":1,"proxied":true}' > /dev/null
  fi
}

create_or_update "$DOMAIN" "$SERVER_IP"
create_or_update "www.$DOMAIN" "$SERVER_IP"

echo "✅ Cloudflare DNS records configured."
echo "Remember to update your domain registrar nameservers to Cloudflare's values."
echo "Next, run ./deploy-with-nginx.sh to deploy the website on your server."
