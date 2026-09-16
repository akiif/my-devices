import laptops from "./laptops";
import phones from "./phones";
import tablets from "./tablets";
import type { Device } from "./types";

export type Category = "phones" | "tablets" | "laptops";

export interface CategorizedDevice extends Device {
  category: Category;
  key: string;
}

export const categoryLabels: Record<Category, string> = {
  phones: "Phone",
  tablets: "Tablet",
  laptops: "Laptop",
};

function tag(list: Device[], category: Category): CategorizedDevice[] {
  return list.map((d) => ({ ...d, category, key: `${category}-${d.id}` }));
}

export const devices: CategorizedDevice[] = [
  ...tag(phones, "phones"),
  ...tag(tablets, "tablets"),
  ...tag(laptops, "laptops"),
].sort((a, b) => b.acquired_year - a.acquired_year || b.id - a.id);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Data mixes "dd/mm/yyyy" with free-form dates like "January 2024".
export function formatDate(value?: string): string | null {
  if (!value) return null;
  const m = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return value;
  return `${Number(m[1])} ${months[Number(m[2]) - 1]} ${m[3]}`;
}
