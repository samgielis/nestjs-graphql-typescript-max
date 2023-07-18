import { ObjectType } from "@nestjs/graphql";
import { Icon } from "./Icon.model";
import { IconType } from "./IconType.model";
import { ImageIconValue } from "./ImageIconValue.model";

@ObjectType({
    implements: () => [Icon],
  })
  export class ImageIcon implements Icon {
    type: IconType = IconType.IMAGE
    value: ImageIconValue;
    activeValue: ImageIconValue;
  }