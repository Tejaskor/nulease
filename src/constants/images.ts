/**
 * Centralized imagery. These are Unsplash placeholders standing in for the
 * final brand photography — swap the `unsplash(...)` values for `/images/*`
 * paths once the real Figma-exported assets are downloaded into /public.
 */
function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const images = {
  services: {
    physicians: unsplash("photo-1537368910025-700350fe46c7", 1000),
    outpatient: unsplash("photo-1576765608535-5f04d1e3f289", 1000),
    confidential: unsplash("photo-1666214280557-f1b5022eb634", 1000),
  },
  investing: {
    main: unsplash("photo-1522071820081-009f0129c71c", 1400),
    card1: unsplash("photo-1612349317150-e413f6a5b16d", 800),
    card2: unsplash("photo-1579684385127-1ef15d508118", 800),
    card3: unsplash("photo-1582750433449-648ed127bb54", 800),
  },
  cta: unsplash("photo-1516574187841-cb9cc2ca948b", 1400),
  testimonials: [
    unsplash("photo-1438761681033-6461ffad8d80", 320),
    unsplash("photo-1500648767791-00dcc994a43e", 320),
    unsplash("photo-1633332755192-727a05c4013d", 320),
    unsplash("photo-1544005313-94ddf0286df2", 320),
  ],
} as const;
