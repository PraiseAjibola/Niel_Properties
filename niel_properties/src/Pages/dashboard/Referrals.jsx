import React from 'react'
import ReferralHeader from '../../components/ReferralHeader'
import ReferralLink from '../../components/ReferralLink'
import ReferralStat from '../../components/ReferralStat'
import ReferralList from '../../components/ReferralList'

const Referrals = () => {
    
    return (
        <div className='w-full'>
            <ReferralHeader />
            <ReferralLink />
            <ReferralStat />
            <ReferralList />
        </div>
    )
}

export default Referrals