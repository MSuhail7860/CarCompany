#!/bin/bash

# Create placeholder SVG images for all car models
cd /home/mukeshyadav/Development/CarCompany/public/cars

# Array of car names
cars=("gt-r" "phantom" "volt" "titan" "viper" "cruiser" "detail-1" "detail-2" "detail-3")
titles=("GT-R Sports" "Phantom Luxury" "Volt Electric" "Titan SUV" "Viper Hypercar" "Cruiser Convertible" "Interior Detail" "Engine Detail" "Exterior Detail")

# Generate SVG for each car
for i in "${!cars[@]}"; do
  cat > "${cars[$i]}.png" << EOF
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad$i" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#7b2ff7;stop-opacity:0.3" />
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="#0a0a0a"/>
  <rect width="1200" height="800" fill="url(#grad$i)"/>
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="56" fill="#00d4ff" text-anchor="middle" font-weight="bold">${titles[$i]}</text>
  <text x="600" y="440" font-family="Arial, sans-serif" font-size="24" fill="#c0c0c0" text-anchor="middle">APEX MOTORS</text>
  <text x="600" y="480" font-family="Arial, sans-serif" font-size="16" fill="#707070" text-anchor="middle">Replace with professional car photography</text>
</svg>
EOF
done

echo "Placeholder images created successfully!"
