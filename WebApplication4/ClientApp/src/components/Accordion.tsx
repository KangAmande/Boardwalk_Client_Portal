import * as React from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
type Props = {
    title: any;
    content: any;
}
export const CustomAccordion: React.FC<Props> = ({ title,content }) =>{
    return (
        <div>
            <Accordion style={{ width: 400 }}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 10,
                        }}
                    >
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{ content }</Typography>
                </AccordionDetails>
            </Accordion>
        </div>

    );
};

