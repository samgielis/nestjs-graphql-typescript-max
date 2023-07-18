import { registerEnumType } from "@nestjs/graphql";

export enum IconType {
    DESIGN_SYSTEM,
        IMAGE
  }

  registerEnumType(IconType, {
    name: 'IconType',
    description: 'The type of Icon'
  });