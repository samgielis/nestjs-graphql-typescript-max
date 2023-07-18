import { Field, InterfaceType } from '@nestjs/graphql';
import { ActionItem } from 'src/atoms/models/ActionItem/ActionItem.model';
import { Node } from '../../common/models/Node/Node.model';
import { NavigationNode } from './NavigationNode.model';

@InterfaceType({implements: () => [Node, NavigationNode]})
export abstract class NavigationLeafNode implements NavigationNode, Node {
  id: string;
  
  @Field(type => ActionItem, {nullable: false})
  content: ActionItem | undefined;
}