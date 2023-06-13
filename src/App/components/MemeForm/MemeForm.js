import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
export const initialStateMemeForm={};

const MemeForm = (props) => {
  const [state, setState] = useState(initialStateMemeForm);

  useEffect(()=>{
    //cmp didMount
    console.log(`composant memeForm monté`);
    //cleanup
    return () => {
      console.log(`composant memeForm démonté`);
    };
  });

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  )
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
