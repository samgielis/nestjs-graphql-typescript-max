import { Field, InterfaceType } from '@nestjs/graphql';
import { ActionItem } from 'src/atoms/models/ActionItem/ActionItem.model';
import { Node } from '../../common/models/Node/Node.model';
import { NavigationNode } from './NavigationNode.model';

@InterfaceType({implements: () => [Node, NavigationNode]})
export abstract class NavigationCompositeNode implements NavigationNode, Node {
  id: string;
  content: ActionItem;

  @Field(type => [NavigationNode])
  nodes: NavigationNode[]
}

export function isNavigationCompositeNode(node: any): node is NavigationCompositeNode {
  return node && node.nodes;
}