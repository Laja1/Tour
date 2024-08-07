import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { assetsLinks } from '../../assets/assetsLinks';

type labelProps ={
    labelDescription:string,label:string
}

export default function CustomAccordion({labelDescription,label}:labelProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion sx={{backgroundColor:"#0F1012",paddingY:1 }}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                  
          expandIcon={expanded === 'panel1' ? <RemoveIcon sx={{color:'white'}}/> : <AddIcon sx={{color:'white'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
                  <Typography className='text-[10px] lg:text-lg poppins-semibold text-white font-medium flex-row flex items-center gap-3 space-x-3'><img src={assetsLinks.star} className="size-4"/>{label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-[#fff]  poppins-medium text-[9px]'>
            {labelDescription}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
     </div>
  );
}