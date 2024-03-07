// Hook
import { useCallback, useState } from "react";

/**
 * [Hook] 클릭 이벤트
 * @returns Hook 변수 및 함수
 */
export function useVisible() {
  // UI 표시 여부
  const [visible, setVisible] = useState<boolean>(false);

  /** [Event handler] 표시 이벤트 핸들러 */
  const onVisible = useCallback(() => setVisible(true), []);
  /** [Event handler] 미표시 이벤트 핸들러 */
  const onUnVisible = useCallback(() => setVisible(false), []);

  return {
    visible,
    onVisible,
    onUnVisible,
  };
}
