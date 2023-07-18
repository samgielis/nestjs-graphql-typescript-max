import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from '../../../common/models/Node/Node.model';
import { Icon } from "../icon/Icon.model";

@ObjectType({
    implements: () => [Node],
  })
  export class ActionItem {
    id: string;
    
    @Field(type => Icon, {nullable: true})
    leftIcon: Icon;

    @Field(type => Icon, {nullable: true})
    rightIcon: Icon;
    
    @Field({nullable: true})
    title: string
  }