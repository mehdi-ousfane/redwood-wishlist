import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewEventPage = () => {
  return (
    <>
      <MetaTags title="NewEvent" description="NewEvent page" />

      <h1>NewEventPage</h1>
      <p>
        Find me in <code>./web/src/pages/NewEventPage/NewEventPage.tsx</code>
      </p>
      <p>
        My default route is named <code>newEvent</code>, link to me with `
        <Link to={routes.newEvent()}>NewEvent</Link>`
      </p>
    </>
  )
}

export default NewEventPage
