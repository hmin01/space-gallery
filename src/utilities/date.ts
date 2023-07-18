import dayjs from "dayjs";

/**
 * [Function] 1일 후 날짜 구하기
 * @param timestamp 기준일 타임스탬프
 * @returns 유닉스 타임스탬프
 */
export function getNextDate(timestamp: number): number {
  return dayjs.unix(timestamp).add(1, "day").unix();
}
/**
 * [Function] 1일 전 날짜 구하기
 * @param timestamp 기준일 타임스탬프
 * @returns 유닉스 타임스탬프
 */
export function getPrevDate(timestamp: number): number {
  return dayjs.unix(timestamp).subtract(1, "day").unix();
}
/**
 * [Function] 목록 API 호출 유효 시간
 * @returns 캐시 유효 시간 (초 단위)
 */
export function getRevalidateTime(): number {
  // 현재 시간
  const currentTime: dayjs.Dayjs = dayjs();
  // UTC 시간
  const standardHour: number = currentTime.get("hour") - (currentTime.utcOffset() / 60);
  // API 재호출 유효 시간 계산을 위한 기준 시간
  const standard: dayjs.Dayjs = standardHour >= 4 ? currentTime.add(1, "day").set("hour", 13).set("minute", 0).set("second", 0) : currentTime.set("hour", 13).set("minute", 0).set("second", 0);
  // 계산된 초(second) 값 반환
  return standard.unix() - currentTime.unix();
}
/**
 * [Function] 오늘 날짜 여부 확인
 * @param timestamp 타임스탬프
 * @returns 일치 여부
 */
export function isToday(timestamp: number): boolean {
  return dayjs().format("YYYY-MM-DD") === dayjs.unix(timestamp).format("YYYY-MM-DD");
}