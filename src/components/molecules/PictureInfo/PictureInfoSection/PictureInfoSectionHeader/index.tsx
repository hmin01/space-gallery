"use client";

// Component
import { CloseButton } from "@chakra-ui/react";
// Type
import type PictureInfoSectionHeaderProps from "./PictureInfoSectionHeader.types";

export default function PictureInfoSectionHeader({ children, onClose }: PictureInfoSectionHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-3 text-white">
      <h3 className="font-semibold md:text-xl text-lg text-white">{children}</h3>
      <CloseButton onClick={onClose} />
    </div>
  );
}
