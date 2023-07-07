import dayjs from "dayjs";

/**
 * [Function] 1일 전 날짜 구하기
 * @param date 기준일 (YYYY-MM-DD)
 * @returns 날짜 형식 문자열 (YYYY-MM-DD)
 */
export function getPrevDate(date: string): string {
  return dayjs(date).subtract(1, "day").format("YYYY-MM-DD");
}
/**
 * [Function] 1일 후 날짜 구하기
 * @param date 기준일 (YYYY-MM-DD)
 * @returns 날짜 형식 문자열 (YYYY-MM-DD)
 */
export function getNextDate(date: string): string {
  return dayjs(date).add(1, "day").format("YYYY-MM-DD");
}
/**
 * [Function] 오늘 날짜 여부 확인
 * @param date 날짜 형식 문자열 (YYYY-MM-DD)
 * @returns 일치 여부
 */
export function isToday(date: string): boolean {
  return dayjs().format("YYYY-MM-DD") === date;
}