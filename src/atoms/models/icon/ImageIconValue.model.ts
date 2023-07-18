import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ImageIconValue {
  @Field({description: "Location of the icon's image file"})
  url: string;
}