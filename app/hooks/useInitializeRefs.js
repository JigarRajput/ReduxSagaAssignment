import {useRef} from 'react';

const useInitializeRefs = count => {
  const formRefs = useRef(Array(count).fill(null));
  return formRefs;
};
export default useInitializeRefs;
