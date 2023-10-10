import * as React from 'react';
import BannerSection from '../../components/Sections/BannerSection';
import StatsSection from '../../components/Sections/StatsSection';
import GroupSection from '../../components/Sections/GroupSection';
import SupportSection from '../../components/Sections/SupportSection';
import BottomSection from '../../components/Sections/BottomSection';
import { useMediaQuery } from '@mui/material';
import { Desktop } from '../../components/Desktop/Desktop';

export const LandingPage = () => {
    const matches = useMediaQuery('(min-width:600px)');
    if(matches){
        return <Desktop />;
    }
    return(
        <div>
            <BannerSection />
            <GroupSection />
            <SupportSection />
            <StatsSection />
            <BottomSection />
        </div>
    );
}
