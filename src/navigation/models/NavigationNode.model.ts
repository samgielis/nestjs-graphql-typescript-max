import { Field, InterfaceType } from '@nestjs/graphql';
import { ActionItem } from 'src/atoms/models/ActionItem/ActionItem.model';
import { Node } from '../../common/models/Node/Node.model';
import { isNavigationCompositeNode, NavigationCompositeNode } from './NavigationCompositeNode.model';
import { NavigationLeafNode } from './NavigationLeafNode.model';

@InterfaceType({
  implements: () => [Node],
  resolveType(navigationNode: NavigationNode) {
      if (isNavigationCompositeNode(navigationNode)) {
        return NavigationCompositeNode;
      }
      return NavigationLeafNode;
}})
export abstract class NavigationNode {
  id: string;

  @Field(type => ActionItem, {nullable: true})
  content: ActionItem;
}