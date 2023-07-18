import { registerEnumType } from "@nestjs/graphql";

export enum NavigationTheme {
    default,
    ketnet,
    ketnetJunior,
  }

  registerEnumType(NavigationTheme, {
    name: 'NavigationTheme',
    description: 'The theme of the application'
  });