'use client'

// Axios
import axios from 'axios';
// Component
import ImageCard from './ImageCard';
// React hook
import { useMemo } from 'react';
// React Query
import { useQuery } from 'react-query';

const ImageList: React.FC<any> = () => {
  // 데이터 조회
  const { data } = useQuery('images', async () => {
    const { data } = await axios.get('http://localhost:3001/picture/info/list');
    return data;
  });

  const items = useMemo((): React.ReactNode => {
    if (data) {
      return data.map((elem: any): React.ReactNode => <ImageCard explanation={elem.explanation} imageSrc={elem.url} title={elem.title} />);
    } else {
      return (<></>)
    }
  }, [data]);

  return (
    <>{items}</>
  );
}

export default ImageList;