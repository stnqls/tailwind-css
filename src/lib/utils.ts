import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// twMerge는 충돌하는 Tailwind 클래스를 자동으로 병합/덮어씀
// 예: "px-4 px-6" -> "px-6"만 남김
