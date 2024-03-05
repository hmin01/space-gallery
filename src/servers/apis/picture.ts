// Type
import type { PictureInfo } from "@/types/picture";

const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

/**
 * [API Caller] 이미지 목록 조회
 * @returns 조회 결과
 */
export async function getPictures(): Promise<PictureInfo[]> {
  // 데이터 조회
  const res: Response = await fetch(`${API_SERVER}/photos`, {
    cache: "no-cache",
  });
  // 예외 처리
  if (!res.ok) throw new Error("Failed to fetch data");
  // 결과 반환
  return res.json();
}
/**
 * [API Caller] 이미지 조회
 * @param id 이미지 ID (= 타임스탬프)
 * @returns 조회 결과
 */
export async function getPicture(id: number): Promise<PictureInfo> {
  // 데이터 조회
  const res: Response = await fetch(`${API_SERVER}/photo/${id}`);
  // 예외 처리
  if (!res.ok) throw new Error("Failed to fetch data");
  // 결과 반환
  return res.json();
}

// /**
//  * [API Caller] 이미지 목록 조회
//  * @returns 조회 결과
//  */
// export async function getPhotos(): Promise<PhotoInfoProps[]> {
//   // 데이터 조회
//   const res: Response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_SERVER}/photos`,
//     { cache: "no-cache" }
//   );
//   // 예외 처리
//   if (!res.ok) throw new Error("Failed to fetch data");
//   // 결과 반환
//   return res.json();
// }
// /**
//  * [API Caller] 이미지 정보 조회
//  * @param timestamp 유닉스 타임스탬프
//  * @returns 조회 결과
//  */
// export async function getPhotoInfo(timestamp: number): Promise<PhotoInfoProps> {
//   // 데이터 조회
//   const res: Response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_SERVER}/photo/${timestamp}`
//   );
//   // 예외 처리
//   if (!res.ok) throw new Error("Failed to fetch data");
//   // 결과 반환
//   return res.json();
// }
// /**
//  * [API Caller] 이미지에 대한 타임스탬프 목록 조회
//  * @returns 조회 결과
//  */
// export async function getTimestampList(): Promise<number[]> {
//   // 데이터 조회 ({ next: { revalidate: getRevalidateTime() } })
//   const res: Response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_SERVER}/photos/timestamp`
//   );
//   // 예외 처리
//   if (!res.ok) throw new Error("Failed to fetch data");
//   // 결과 반환
//   return res.json();
// }
