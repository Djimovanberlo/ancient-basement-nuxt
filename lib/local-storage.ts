import type { Reward } from "~/types/reward";

const SECRET_SALT = process.env.NUXT_ENV_SECRET_SALT;
const REWARDS_KEY = "rewards";
const REWARDS_HASH_KEY = "rewardsHash";

const hashRewards = async (rewards: Reward[]) => {
  const saltedString = JSON.stringify(rewards) + SECRET_SALT; // Combine rewards with a secret salt
  const data = new TextEncoder().encode(saltedString); // Convert to binary format
  const hashBuffer = await crypto.subtle.digest("SHA-256", data); // Hash the data

  // Convert the hash buffer to a hexadecimal string
  return [...new Uint8Array(hashBuffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export const getRewards = async (): Promise<Reward[] | null> => {
  const storedRewards = localStorage.getItem(REWARDS_KEY);
  const storedHash = localStorage.getItem(REWARDS_HASH_KEY);

  if (!storedRewards || !storedHash) {
    console.warn("No rewards found in local storage");
    return null;
  }

  const rewards = JSON.parse(storedRewards);
  const hash = await hashRewards(rewards);

  if (hash !== storedHash) {
    console.warn("Stored rewards have been tampered with");
    return null;
  }

  return rewards;
};

export const storeRewards = async (rewards: Reward[]) => {
  const rewardsString = JSON.stringify(rewards);
  const hash = await hashRewards(rewards);
  localStorage.setItem(REWARDS_KEY, rewardsString);
  localStorage.setItem(REWARDS_HASH_KEY, hash);
};
