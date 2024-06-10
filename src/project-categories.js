const projectCategories = [
  { value: "graphics", icon: "gamepad", label: "Graphics" },
  { value: "embedded", icon: "microchip", label: "Embedded" },
  { value: "blockchain", icon: "link", label: "Blockchain" },
  { value: "frontend", icon: "image", label: "Frontend" },
  { value: "backend", icon: "database", label: "Backend" },
  { value: "machine-learning", icon: "head-side-gear", label: "ML" },
  { value: "database", icon: "database", label: "Database" },
].sort((a, b) => a.label - b.label);

export default projectCategories;
