import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String9785301',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:33:28.369Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-04-11T09:33:28.369Z',
            updatedAt: '2024-04-11T09:33:28.369Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String6509828',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:33:28.369Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-04-11T09:33:28.369Z',
            updatedAt: '2024-04-11T09:33:28.369Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
