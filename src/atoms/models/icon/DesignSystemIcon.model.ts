import { ObjectType } from "@nestjs/graphql";
import { DesignSystemIconValue } from "./DesignSystemIconValue.model";
import { Icon } from "./Icon.model";
import { IconType } from "./IconType.model";

@ObjectType({
    implements: () => [Icon],
  })
  export class DesignSystemIcon implements Icon {
    type: IconType = IconType.DESIGN_SYSTEM;
    value: DesignSystemIconValue;
    activeValue: DesignSystemIconValue;
  }