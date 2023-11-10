// API
import { getPhotos } from "@/apis/photo";

export async function usePhotos() {
  // Data fetch
  const data = await getPhotos();

  return {
    /**
     * 사진 데이터
     */
    photos: data,
  };
}
