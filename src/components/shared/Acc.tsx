import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { assetsLinks } from '../../assets/assetsLinks';

type CustomAccordionProps = {
  expanded: string | false;
  handleChange: (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => void;
  panel: string;
  labelDescription: string;
  label: string;
};

export default function CustomAccordion({
  expanded,
  handleChange,
  panel,
  labelDescription,
  label,
}: CustomAccordionProps) {
  return (
    <div>
      <Accordion
        sx={{ backgroundColor: "#0F1012", paddingY: 1 }}
        expanded={expanded === panel}
        onChange={handleChange(panel)}
      >
        <AccordionSummary
          expandIcon={expanded === panel ? <RemoveIcon sx={{ color: 'white' }} /> : <AddIcon sx={{ color: 'white' }} />}
          aria-controls={`${panel}-content`}
          id={`${panel}-header`}
        >
          <Typography
            sx={{ fontFamily: 'poppins-semibold' }}
            className='text-[10px] lg:text-lg poppins-semibold text-white font-medium flex-row flex items-center gap-3 space-x-3'
          >
            <img src={assetsLinks.star} className="size-4" />
            {label}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'poppins-medium' }} className='text-[#fff] poppins-medium text-[9px]'>
            {labelDescription}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
