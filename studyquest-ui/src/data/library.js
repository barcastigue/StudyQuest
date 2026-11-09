export const INITIAL_SUBJECTS = [
  {
    name: "Biology 101",
    icon: "book",
    materials: [{ name: "Cell Biology Notes.pdf", date: "Uploaded today" }],
  },
  { name: "Chemistry 110", icon: "flask", materials: [] },
];

export const INITIAL_UPLOADS = [
  { name: "Cell Biology Notes.pdf", subject: "Biology 101", status: "Ready", progress: 100 },
  { name: "Lab Review.docx", subject: "Biology 101", status: "Processing", progress: 72 },
];
