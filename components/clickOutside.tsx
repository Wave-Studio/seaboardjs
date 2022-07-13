import { useEffect, useRef } from 'react';

export default function ClickOutside(props: {show: boolean, children: any, className: string}) {
  const ref = useRef(null);
//@ts-expect-error
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (e: any) => {
			//@ts-expect-error
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  if(!props.show)
    return null;

  return (
    <div ref={ref} className={props.className}>
        {props.children}
    </div> 
	);
}