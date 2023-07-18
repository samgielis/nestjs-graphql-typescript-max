import { Field, ObjectType } from '@nestjs/graphql';
import { Node } from '../../common/models/Node/Node.model';
import { NavigationNode } from './NavigationNode.model';
import { NavigationTheme } from './NavigationTheme.model';

@ObjectType({ description: 'Main Navigation of the app', implements: () => [Node], })
export class Navigation {
  id: string;

  @Field(type => NavigationTheme)
  theme: NavigationTheme;

  @Field(type => [NavigationNode]) 
  nodes: NavigationNode[];
}