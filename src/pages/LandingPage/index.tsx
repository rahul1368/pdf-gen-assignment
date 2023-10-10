import * as React from 'react';
import { useLandingPageStyles } from './LandingPage.style';
import { Desktop } from '../../components/Desktop/Desktop';
export const LandingPage = () => {
    const classes = useLandingPageStyles();
    return(
        <div>
            <Desktop />
            <nav>
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
            </nav>
        </div>
    );
}
