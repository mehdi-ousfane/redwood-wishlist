import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String8719917',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-04-11T09:32:56.710Z',
      },
    },
    two: {
      data: {
        email: 'String4050162',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-04-11T09:32:56.710Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
