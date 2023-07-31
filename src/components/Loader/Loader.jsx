import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;

// import React from 'react';
// import * as Loader from 'react-loader-spinner';
// import styles from './Loader.module.css';

// const CustomLoader = () => {
//   return (
//     <div className={styles.loader}>
//       <Loader type="Oval" color="#00BFFF" height={80} width={80} />
//     </div>
//   );
// };

// export default CustomLoader;
