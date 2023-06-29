"use client"

// Chakra Component
import { Box, Card, CardBody, Stack } from "@chakra-ui/react";
// Component
import { Picture } from "../atoms/Picture";
import PictureCardText from "../atoms/PictureCardText";
import PictureCardTitle from "../atoms/PictureCardTitle";
// Type
import type { PictureInfo } from "../../../../servers/picture/type";

export default function PictureCard({ info }: { info?: PictureInfo }): JSX.Element {
  return (
    <Card>
      <CardBody p="0">
        <div className="rounded-t-md overflow-hidden">
          <Picture ratio={16 / 9} src={info?.url} />
        </div>
        <Stack my="4" spacing="2">
          <Box px="6">
            <PictureCardTitle>{info?.title}</PictureCardTitle>
          </Box>
          <Box maxH={40} px="6" overflowY="scroll">
            <PictureCardText>{info?.explanation}</PictureCardText>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}