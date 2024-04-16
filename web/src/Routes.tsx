// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage

import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={InteriorLayout}>
        <Route path="/event/{id:String}" page={GroupInvitePage} name="groupInvite" />
      </Set>
      <PrivateSet unauthenticated="login">
        <Set wrap={AuthLayout}>
          <Route path="/event/new" page={NewEventPage} name="newEvent" />
        </Set>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </PrivateSet>
      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
