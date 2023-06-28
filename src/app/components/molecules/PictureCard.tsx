"use client"

import Image from "next/image";
// Chakra Component
import { Card, CardBody, Stack } from "@chakra-ui/react";
// Component
import PictureCardText from "../atoms/PictureCardText";
import PictureCardTitle from "../atoms/PictureCardTitle";
// Type
import type { Picture } from "../../../../servers/picture/type";

const PictureCard: React.FC<any> = ({ info }: { info: Picture }) => {
  return (
    <Card>
      <CardBody>
        <Image alt="picture" height={400} src={info.url} width={400} />
        <Stack mt="6" spacing="3">
          <PictureCardTitle>{info.title}</PictureCardTitle>
          <PictureCardText>{info.explanation}</PictureCardText>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default PictureCard;