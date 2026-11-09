export const MIN_PASSWORD_LENGTH = 8;
export const MAX_FILE_SIZE = 10 * 1024 * 1024;
export const ALLOWED_EXTENSIONS = ["pdf", "docx"];

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
export const isPassword = (value) => value.length >= MIN_PASSWORD_LENGTH;

/** Returns an error message for an invalid study file, or "" when it is fine. */
export function validateStudyFile(file) {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    return "That file type is not supported. Please choose a PDF or DOCX file.";
  }
  if (file.size > MAX_FILE_SIZE) {
    return "That file is over 10 MB. Choose a smaller file and try again.";
  }
  return "";
}
