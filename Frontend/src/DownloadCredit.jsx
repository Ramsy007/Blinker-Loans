import styles from './DownloadCredit.module.css'
import { FaCloudUploadAlt } from "react-icons/fa";

const DownLoadCredit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Download Your Credit Report <br /> & Get Eligibility</h2>
        <button> <span>Download </span>  <FaCloudUploadAlt /></button>
      </div>
      <div className={styles.img_con}>
        <img src="./credit_img.png" alt="credit" />
      </div>
    </div>
  )
}

export default DownLoadCredit