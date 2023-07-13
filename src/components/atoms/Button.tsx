"use client"

// Icon
import { FaChevronLeft, FaChevronRight, FaQuestion, FaXmark } from "react-icons/fa6";
// React hook
import { useCallback } from "react";
// Router
import { useRouter } from "next/navigation";
// Status
import { useDisplayInfoModal, useDisplayMainModal } from "@/status/modal";

/** [Properties] For BasicCircleButton */
interface BasicCircleButtonProps {
  children: React.ReactNode;
  onClick?: () => void
}

/**
 * [Internal Component] 기본 원형 버튼
 * @param properties BasicCircleButtonProps
 */
function BasicCircleButton({ children, onClick }: BasicCircleButtonProps): JSX.Element {
  /** [Event handler] 클릭 이벤트 (기본값) */
  const onClickForDefault = useCallback(() => {}, []);

  return (
    <button className="backdrop-blur-lg bg-black bg-opacity-30 duration-300 flex h-11 hover:bg-opacity-75 items-center justify-center rounded-full text-white w-11" onClick={onClick ?? onClickForDefault}>{children}</button>
  );
}

export function BackButton(): JSX.Element {
  // 라우터
  const router = useRouter();
  // 상태 변경 함수
  const { setShow } = useDisplayMainModal();

  /** [Event handler] 클릭 이벤트 */
  const onClick = useCallback(() => {
    setShow(false);
    router.push("/");
  }, [router, setShow]);

  return (
    <span className="absolute left-4 top-4 z-10">
      <BasicCircleButton onClick={onClick}>
        <FaXmark />
      </BasicCircleButton>
    </span>
  );
}

export function InfoButton(): JSX.Element {
  // 상태 변경 함수
  const { setShow } = useDisplayInfoModal();

  /** [Event handler] 클릭 이벤트 */
  const onClick = useCallback(() => setShow(true), [setShow]);

  return (
    <span className="absolute bottom-4 right-4 z-10">
      <BasicCircleButton onClick={onClick}>
        <FaQuestion />
      </BasicCircleButton>
    </span>
  );
}