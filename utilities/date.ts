import dayjs from "dayjs";

/**
 * [Function] 1일 전 날짜 구하기
 * @param timestamp 기준일 타임스탬프
 * @returns 유닉스 타임스탬프
 */
export function getPrevDate(timestamp: number): number {
  return dayjs.unix(timestamp).subtract(1, "day").unix();
}
/**
 * [Function] 1일 후 날짜 구하기
 * @param timestamp 기준일 타임스탬프
 * @returns 유닉스 타임스탬프
 */
export function getNextDate(timestamp: number): number {
  return dayjs.unix(timestamp).add(1, "day").unix();
}
/**
 * [Function] 오늘 날짜 여부 확인
 * @param timestamp 타임스탬프
 * @returns 일치 여부
 */
export function isToday(timestamp: number): boolean {
  return dayjs().format("YYYY-MM-DD") === dayjs.unix(timestamp).format("YYYY-MM-DD");
}