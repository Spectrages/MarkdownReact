import * as React from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';

export default function MenuPopupState() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    
  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: '15%', flexShrink: 0 }}>
        Menu
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.
      </Typography>
    </AccordionDetails>
  </Accordion>
  );
}

