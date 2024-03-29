import SvgIcon from '@mui/material/SvgIcon';

const NpmIcon = props => (
  <SvgIcon {...props}>
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20,4H4V20h8V8h4V20h4V4" fill="currentColor" />
      <rect width="24" height="24" fill="none" />
    </svg>
  </SvgIcon>
);

export default NpmIcon;
