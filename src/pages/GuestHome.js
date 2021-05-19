import React from 'react'
import AboutTrigger from '../components/guest/layout/AboutTrigger'
import Budgets from '../components/guest/layout/Budgets'
import ComposeBudgetBtn from '../components/guest/layout/ComposeBudgetBtn'
import DeleteAllBudgetsBtn from '../components/guest/layout/DeleteAllBudgetsBtn'
import GuestFilter from '../components/guest/layout/GuestFilter'

function GuestHome({theme}) {
    return (
        <div>
            <GuestFilter theme={theme} />
            <ComposeBudgetBtn />
            <Budgets theme={theme} />
            <DeleteAllBudgetsBtn />
            <AboutTrigger />
        </div>
    )
}

export default GuestHome
