import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-04-11T09:36:44.600Z',
        user: {
          create: {
            email: 'String422315',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:36:44.600Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-04-11T09:36:44.600Z',
            updatedAt: '2024-04-11T09:36:44.600Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-04-11T09:36:44.600Z',
        user: {
          create: {
            email: 'String9786479',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:36:44.600Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-04-11T09:36:44.600Z',
            updatedAt: '2024-04-11T09:36:44.600Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
