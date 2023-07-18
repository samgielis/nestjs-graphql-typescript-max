import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DesignSystemIconValue {
    @Field({description: "Key of the icon in the design system."})
    name: string;
}   