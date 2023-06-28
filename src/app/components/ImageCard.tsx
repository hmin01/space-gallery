'use client'

import Image from 'next/image';
// Chakra Component
import { Card, CardBody, Stack } from '@chakra-ui/react';
// Component
import ImageCardText from './atoms/ImageCardText';
import ImageCardTitle from './atoms/ImageCardTitle';

const ImageCard: React.FC<any> = ({ explanation, imageSrc, title }) => {
  return (
    <Card>
      <CardBody>
        <Image alt='picture' height={400} src={imageSrc} width={400} />
        <Stack mt='6' spacing='3'>
          <ImageCardTitle>{title}</ImageCardTitle>
          <ImageCardText>{explanation}</ImageCardText>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ImageCard;