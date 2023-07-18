import { createUnionType } from "@nestjs/graphql";
import { DesignSystemIconValue } from "./DesignSystemIconValue.model";
import { ImageIconValue } from "./ImageIconValue.model";

export const IconValue = createUnionType({
    name: 'IconValue',
    types: () => [ImageIconValue, DesignSystemIconValue],
  });