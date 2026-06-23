/**
 * Image data array — the single source of truth for the gallery.
 * Adding a new object here will automatically render a new card
 * in the UI without changing any JSX structure.
 */
const imageData = [
  {
    id: 1,
    title: "Mountain Sunrise",
    description:
      "Golden light pierces through misty mountain peaks, painting the sky in vibrant hues of amber and violet at dawn.",
    imageUrl: "/images/mountain_sunrise.png",
    category: "Mountains",
  },
  {
    id: 2,
    title: "Tropical Paradise",
    description:
      "Crystal-clear turquoise waters embrace pristine white sand beaches, fringed by swaying palms under an endless blue sky.",
    imageUrl: "/images/tropical_coast.png",
    category: "Coastal",
  },
  {
    id: 3,
    title: "Enchanted Forest",
    description:
      "Sunbeams stream through towering ancient trees, illuminating a mossy wonderland of lush green tranquility.",
    imageUrl: "/images/enchanted_forest.png",
    category: "Forests",
  },
  {
    id: 4,
    title: "Aurora Borealis",
    description:
      "The northern lights dance across the night sky in brilliant waves of green and purple, reflected perfectly in a serene mountain lake.",
    imageUrl: "/images/aurora_borealis.png",
    category: "Night Sky",
  },
  {
    id: 5,
    title: "Desert Majesty",
    description:
      "Towering red sandstone formations bask in golden-hour light under a vast, dramatic sky dotted with wispy clouds.",
    imageUrl: "/images/desert_landscape.png",
    category: "Desert",
  },
  {
    id: 6,
    title: "Cherry Blossoms",
    description:
      "Delicate pink cherry blossoms frame a traditional Japanese garden path, as petals gently drift across a calm reflecting pond.",
    imageUrl: "/images/cherry_blossoms.png",
    category: "Gardens",
  },
];

export default imageData;
