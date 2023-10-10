import * as React from 'react';
import { useLandingPageStyles } from './LandingPage.style';
import BannerSection from '../../components/Sections/BannerSection';
import StatsSection from '../../components/Sections/StatsSection';
import GroupSection from '../../components/Sections/GroupSection';
import SupportSection from '../../components/Sections/SupportSection';
import BottomSection from '../../components/Sections/BottomSection';

export const LandingPage = () => {
    const classes = useLandingPageStyles();
    return(
        <div>
            {/* <nav>
                <div className={classes.wrapperDiv}>
                    <div className={classes.navHeaderDiv}>
                        ghfgf
                    </div>
                    <div className={classes.navItemsDiv}>
                        <div className={classes.payOnePersonDiv}>
                            Pay One Person Salary, Reap the Results of Five!
                        </div>
                        <div>
                            Hire Best-in-Class Digital Doctors as Your Team & Skyrocket Your Leads
                        </div>
                    </div>
                </div>
            </nav> */}
            <BannerSection />
            <GroupSection />
            <SupportSection />
            <StatsSection />
            <BottomSection />
        </div>
    );
}
