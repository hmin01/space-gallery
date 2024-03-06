// Hook
import { useCallback } from "react";
import { useRouter } from "next/navigation";

/**
 * [Hook] 모달 닫기
 * @param isHardNav 하드 내비게이션 여부
 * @returns Hook 핸들러
 */
export function useClose(isHardNav?: boolean): () => void {
  const router = useRouter();

  /** [Event handler] 모달 닫기 */
  return useCallback(() => (isHardNav ? () => {} : router.back()), [isHardNav]);
}
