import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-04-11T09:37:42.320Z',
            updatedAt: '2024-04-11T09:37:42.320Z',
          },
        },
        user: {
          create: {
            email: 'String4112575',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:37:42.320Z',
          },
        },
        toUser: {
          create: {
            email: 'String4558906',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:37:42.320Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-04-11T09:37:42.320Z',
            updatedAt: '2024-04-11T09:37:42.320Z',
          },
        },
        user: {
          create: {
            email: 'String1341875',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:37:42.320Z',
          },
        },
        toUser: {
          create: {
            email: 'String2325404',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:37:42.320Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
