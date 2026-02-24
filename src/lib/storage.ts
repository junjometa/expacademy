export enum STORAGE_KEYS {
  PROGRESS = "EXP_PROGRESS",
  EXERCISES = "EXP_EXERCISES",
  STREAK = "EXP_STREAK",
  NOTIFICATIONS_ON = "EXP_NOTIFICATIONS_ON",
  CHALLENGE_RESPONSES = "EXP_CHALLENGE_RESPONSES",
  CHALLENGE_COMPLETIONS = "EXP_CHALLENGE_COMPLETIONS",
  STRATEGY_DOC = "EXP_STRATEGY_DOC",
  AUTH = "EXP_AUTH",
}

/* Keys that must NOT be prefixed with userId */
const GLOBAL_KEYS = new Set<string>([STORAGE_KEYS.AUTH]);

interface AuthSession {
  authenticated: boolean;
  userId: string;
  userName: string;
  expiresAt: number;
}

/**
 * Reads the current userId from the auth session.
 * Returns empty string if not logged in (keys won't be prefixed).
 */
function getCurrentUserId(): string {
  if (typeof window === "undefined") return "";
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.AUTH);
    if (!raw) return "";
    const session = JSON.parse(raw) as AuthSession;
    return session.userId || "";
  } catch {
    return "";
  }
}

/**
 * Returns the storage key, prefixed with userId for user-scoped data.
 */
function resolveKey(key: string): string {
  if (GLOBAL_KEYS.has(key)) return key;
  const userId = getCurrentUserId();
  return userId ? `${userId}_${key}` : key;
}

export function getStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  try {
    const resolved = resolveKey(key);
    const item = localStorage.getItem(resolved);
    return item ? (JSON.parse(item) as T) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setStorage(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    const resolved = resolveKey(key);
    localStorage.setItem(resolved, JSON.stringify(value));
  } catch {
    // localStorage full or unavailable
  }
}
