const artworkCategories = [
  { value: "digital", icon: "computer", label: "Digital" },
  { value: "traditional", icon: "paintbrush", label: "Traditional" },
  { value: "pencil", icon: "pencil", label: "Pencil" },
  { value: "watercolor", icon: "image", label: "Watercolor" },
  { value: "ink", icon: "ink", label: "Ink" },
].sort((a, b) => a.label - b.label);

export default artworkCategories;
