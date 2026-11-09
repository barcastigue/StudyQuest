export const XP_PER_LEVEL = 100;

export function levelInfo(xp) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const withinLevel = xp % XP_PER_LEVEL;
  return { level, withinLevel, nextLevelXp: XP_PER_LEVEL, percent: (withinLevel / XP_PER_LEVEL) * 100 };
}

export const firstName = (name) => name.trim().split(/\s+/)[0] || "";

export const initials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export const plural = (count, one, many = `${one}s`) => `${count} ${count === 1 ? one : many}`;

export const padIndex = (n) => String(n).padStart(2, "0");
