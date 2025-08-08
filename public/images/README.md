# Image Setup Guide

## Hero Background Image
To use your photo as the background:

1. Save your photo as: `public/images/lucas-hero-bg.jpg`
2. The image should be high quality (at least 1920x1080) for best results
3. The CSS is already configured to:
   - Use the image as a background cover
   - Add a dark overlay for better text readability
   - Blend the image with the gradient

## Artist Profile Picture
To add your profile picture:

1. Save your profile photo as: `public/images/lucas-profile.jpg`
2. Recommended specs:
   - Square aspect ratio (1:1) works best
   - High quality (at least 800x800)
   - Good lighting and clear subject
3. The image will be:
   - Displayed in a rounded container with gold border
   - Automatically cropped to fit the container
   - Include hover effects for interactivity

## Current Setup
- **Hero background**: `/images/lucas-hero-bg.jpg`
- **Profile picture**: `/images/lucas-profile.jpg`
- Both images have fallback placeholders if files are missing
- Responsive design for mobile and desktop
- Next.js Image optimization for better performance

## To replace the images:
Simply overwrite the respective files with your desired photos. The website will automatically detect and display them.
