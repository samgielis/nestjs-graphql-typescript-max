import { Module } from '@nestjs/common';
import { NavigationResolver } from './navigation.resolvers';

@Module({
    providers: [NavigationResolver],
  })
export class NavigationModule {}
