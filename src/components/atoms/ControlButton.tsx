"use client"

// Icon
import { FaChevronLeft, FaChevronRight, FaQuestion, FaXmark } from "react-icons/fa6";
// React hook
import { useCallback, useMemo } from "react";
// Router
import { useRouter } from "next/navigation";
// Utilities
import { getNextDate, getPrevDate, isToday } from "../../utilities/date";

function CarouselButton({ children, onClick }: { children?: React.ReactNode, onClick?: () => void }): JSX.Element {
  /** [Event handler] 기본 이벤트 */
  const onDefault = useCallback(() => {}, []);

  return (
    <button className="backdrop-blur-lg bg-black bg-opacity-30 duration-300 flex h-11 hover:bg-opacity-75 items-center justify-center rounded-full text-white w-11" onClick={onClick ? onClick : onDefault}>{children}</button>
  );
}

export function BackButton(): JSX.Element {
  // 라우터
  const router = useRouter();
  /** [Event handler] 클릭 이벤트 */
  const onClick = useCallback(() => router.push("/"), [router]);

  return (
    <span className="absolute left-4 top-4 z-10">
      <CarouselButton onClick={onClick}>
        <FaXmark />
      </CarouselButton>
    </span>
  );
}

export function NextCarouselButton({ timestamp }: { timestamp: number }): JSX.Element {
  // 라우터
  const router = useRouter();
  // UI 컴포넌트 표시 여부
  const isView: boolean = useMemo(() => !isToday(timestamp), [timestamp]);
  /** [Event handler] 클릭 이벤트 */
  const onClick = useCallback(() => router.push(`/picture/${getNextDate(timestamp)}`), [timestamp, router]);

  return isView ? (
    <CarouselButton onClick={onClick}>
      <FaChevronLeft />
    </CarouselButton>
  ) : (<span />);
}

export function PrevCarouselButton({ timestamp }: { timestamp: number }): JSX.Element {
  // 라우터
  const router = useRouter();
  /** [Event handler] 클릭 이벤트 */
  const onClick = useCallback(() => router.push(`/picture/${getPrevDate(timestamp)}`), [timestamp, router]);

  return (
    <CarouselButton onClick={onClick}>
      <FaChevronRight />
    </CarouselButton>
  );
}

export function ShowInfoButton({ onClick }: { onClick: () => void }): JSX.Element {
  return (
    <span className="absolute bottom-4 right-4 z-10">
      <CarouselButton onClick={onClick}>
        <FaQuestion />
      </CarouselButton>
    </span>
  );
}