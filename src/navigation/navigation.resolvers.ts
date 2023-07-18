import { Query, Resolver } from "@nestjs/graphql";
import { Navigation } from "./models/Navigation.model";
import { NavigationTheme } from "./models/NavigationTheme.model";

@Resolver(of => Navigation)
export class NavigationResolver {
  constructor() {}

  @Query(returns => Navigation)
  async navigation(): Promise<Navigation> {
    const navigation: Navigation = {
        id: 'webnac',
        theme: NavigationTheme.default,
        nodes: [],
    }

    return navigation;
  }

}