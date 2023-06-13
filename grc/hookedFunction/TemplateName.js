import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';
export const initialStateTemplateName={};

const TemplateName = (props) => {
  const [state, setState] = useState(initialStateTemplateName);

  useEffect(()=>{
    //cmp didMount
    console.log(`composant templateName monté`);
    //cleanup
    return () => {
      console.log(`composant templateName démonté`);
    };
  });

  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  )
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
