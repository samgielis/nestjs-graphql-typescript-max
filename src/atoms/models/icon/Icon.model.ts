import { NotFoundException } from "@nestjs/common";
import { Field, InterfaceType } from "@nestjs/graphql";
import { DesignSystemIcon } from "./DesignSystemIcon.model";
import { IconType } from "./IconType.model";
import { IconValue } from "./IconValue.model";
import { ImageIcon } from "./ImageIcon.model";

@InterfaceType({
    resolveType(icon: Icon) {
        switch(icon.type) {
            case IconType.DESIGN_SYSTEM: return DesignSystemIcon
            case IconType.IMAGE: return ImageIcon
            default: throw new NotFoundException('Unknown Icon type')
        }
  }})
export abstract class Icon {
  @Field((type) => IconType)
  type: IconType;

  @Field((type) => IconValue, {description: 'Default representation of the Icon '})
  value: typeof IconValue;

  @Field((type) => IconValue, {description: 'Representation of the Icon in an active state'})
  activeValue: typeof IconValue;
}