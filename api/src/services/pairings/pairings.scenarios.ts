import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2024-04-11T09:33:45.293Z',
        event: {
          create: {
            name: 'String',
            date: '2024-04-11T09:33:45.293Z',
            updatedAt: '2024-04-11T09:33:45.293Z',
          },
        },
        santa: {
          create: {
            email: 'String4962323',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:33:45.293Z',
          },
        },
        person: {
          create: {
            email: 'String5268944',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:33:45.293Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-04-11T09:33:45.293Z',
        event: {
          create: {
            name: 'String',
            date: '2024-04-11T09:33:45.293Z',
            updatedAt: '2024-04-11T09:33:45.293Z',
          },
        },
        santa: {
          create: {
            email: 'String1597561',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:33:45.293Z',
          },
        },
        person: {
          create: {
            email: 'String3650165',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-04-11T09:33:45.293Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
