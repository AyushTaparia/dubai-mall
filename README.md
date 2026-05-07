# Dubai Mall Interactive Pitch Deck

This project is a high-end, browser-based interactive sales deck built for Dubai Mall. It acts as a cinematic storytelling presentation tool designed to create instant impact for potential retail tenants, sponsors, and event partners.

## Features

- **Cinematic Experience:** Immersive intro video, slow-zooming background images, and premium gradient overlays.
- **Single-Screen UI:** Optimized 1080p slide layouts (no vertical scrolling) that feel like a real pitch deck.
- **Fluid Navigation:** Custom dot navigation, slide transitions using Framer Motion, and a seamless presentation loop.
- **Interactive UI Elements:** Glassmorphism (`backdrop-blur`), dynamic responsive layouts, and interactive components.

## Technologies Used

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- `npm` or `pnpm` (the project uses `pnpm-lock.yaml`, so `pnpm` is recommended).

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Add the Intro Video**:
   To enable the cinematic intro, place your MP4 video file at the following path:
   `public/videos/intro.mp4`

   *(Note: If the video is not present, the app gracefully falls back to a CSS-animated background image.)*

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the presentation.

## Usage & Navigation

- **Intro Sequence**: Plays automatically on load. You can click "Skip Intro" or toggle the sound using the mute/unmute button.
- **Top Navigation**: Available on the Hero slide to jump directly to key sections (Retail, Luxury, Dining, Events).
- **Slide Controls**: Navigate through slides using the elegant dot navigation indicator at the bottom.
- **Return to Home**: A global "Return to Home" button appears on the bottom left (after the first two slides) to quickly restart the presentation.

## Project Structure

- `/app`: Next.js App Router configuration and main page entry.
- `/components`: Contains all slide components (`hero-section.tsx`, `retail-section.tsx`, etc.) and global UI wrappers.
- `/hooks`: Custom React hooks, including `use-slide.ts` for handling presentation state and URL routing.
- `/lib`: Data files (`deck-data.ts`) containing the textual data used in the slides.
- `/public`: Static assets including images and videos.

## Design Identity

The application strictly adheres to a premium dark-mode aesthetic (`bg-neutral-950`) combined with `amber-500` accents for a luxurious, high-end feel. All components use Tailwind CSS `backdrop-blur` utilities to achieve deep, rich glassmorphism.
