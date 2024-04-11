import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2024-04-11T09:36:27.610Z',
        updatedAt: '2024-04-11T09:36:27.610Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2024-04-11T09:36:27.610Z',
        updatedAt: '2024-04-11T09:36:27.610Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
