import type { SectionId } from "@/shared/config";

export type DrawerProps = {
  visible: boolean;
  links: SectionId[];
  handleClose: () => void;
};
