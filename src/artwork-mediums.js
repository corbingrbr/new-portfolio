const artworkMediums = [
  { value: "digital", icon: "computer", label: "Digital" },
  { value: "acrylic", icon: "paintbrush", label: "Acrylic" },
  { value: "pencil", icon: "pencil", label: "Pencil" },
  { value: "pen", icon: "pen", label: "Pen" },
  { value: "watercolor", icon: "image", label: "Watercolor" },
].sort((a, b) => a.label - b.label);

export default artworkMediums;
