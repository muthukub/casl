import type { Prisma } from '@prisma/client';
import type { Abilities, Ability } from '@casl/ability';

import type { PrismaModel, PrismaQueryFactory, PrismaTypes } from './runtime';

export type * from './runtime';
export { accessibleBy, ParsingQueryError, prismaQuery, createPrismaAbility, createCaslExtension } from './runtime';
export type WhereInput<TModelName extends Prisma.ModelName> =
  PrismaTypes<Prisma.TypeMap>['WhereInput'][TModelName];
export type PrismaQuery<T extends PrismaModel = PrismaModel> =
  PrismaQueryFactory<Prisma.TypeMap, T>;
export type PrismaAbility<T extends Abilities, TConditions extends PrismaQuery = PrismaQuery> =
  Ability<T, TConditions>;
