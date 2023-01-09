import React from 'react'
import styles from './Navbar.module.css'
import  portrait from '../../images/portrait.png'





export default function Navbar() {
  return (
    <>
    <nav className=    {` ${styles.mainHeader} bg-white p-2 d-flex justify-content-start`}>
    
   

    
      <div className='d-flex align-items-center position-relative  '>
      <svg className='position-absolute start-25 mx-4' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
          <path d="M20.1196 18.3129L16.4118 14.6329C17.851 12.8373 18.548 10.5582 18.3594 8.26415C18.1708 5.97016 17.111 3.83564 15.3979 2.2995C13.6848 0.76336 11.4485 -0.0576363 9.14901 0.00532409C6.8495 0.0682845 4.66148 1.01042 3.03487 2.638C1.40825 4.26558 0.466683 6.45489 0.40376 8.75578C0.340837 11.0567 1.16134 13.2942 2.69657 15.0084C4.2318 16.7225 6.36505 17.783 8.65768 17.9717C10.9503 18.1604 13.2281 17.463 15.0226 16.0229L18.7004 19.7029C18.7933 19.7966 18.9039 19.871 19.0256 19.9217C19.1474 19.9725 19.2781 19.9987 19.41 19.9987C19.5419 19.9987 19.6726 19.9725 19.7943 19.9217C19.9161 19.871 20.0267 19.7966 20.1196 19.7029C20.2997 19.5164 20.4004 19.2672 20.4004 19.0079C20.4004 18.7485 20.2997 18.4993 20.1196 18.3129ZM9.41593 16.0229C8.03229 16.0229 6.67971 15.6123 5.52925 14.8431C4.37879 14.074 3.48212 12.9807 2.95262 11.7016C2.42312 10.4226 2.28458 9.01509 2.55451 7.65722C2.82445 6.29935 3.49074 5.05207 4.46912 4.07311C5.44751 3.09414 6.69405 2.42745 8.05111 2.15736C9.40817 1.88726 10.8148 2.02588 12.0931 2.5557C13.3714 3.08551 14.464 3.98272 15.2328 5.13386C16.0015 6.28501 16.4118 7.63838 16.4118 9.02285C16.4118 10.8794 15.6747 12.6598 14.3627 13.9726C13.0508 15.2854 11.2713 16.0229 9.41593 16.0229Z" fill="#7C7C8D"/>
          </svg>
        
          <input className="form-control  bg-light ms-3" type="search" placeholder="    Search or type" aria-label="Search"/>
      </div>
      

        <div className='ms-auto'>
        <svg className='d-none d-sm-inline me-4' xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
      
      <path d="M17.1999 13.449V9.62358C17.1982 7.91915 16.5948 6.27033 15.4966 4.9691C14.3985 3.66788 12.8764 2.79823 11.1999 2.51416V1.20295C11.1999 0.883906 11.0735 0.577931 10.8484 0.352335C10.6234 0.126739 10.3182 0 9.9999 0C9.68164 0 9.37642 0.126739 9.15137 0.352335C8.92633 0.577931 8.7999 0.883906 8.7999 1.20295V2.51416C7.12343 2.79823 5.60133 3.66788 4.50316 4.9691C3.405 6.27033 2.80163 7.91915 2.7999 9.62358V13.449C2.09964 13.6971 1.4931 14.1564 1.06343 14.7637C0.633757 15.371 0.40199 16.0967 0.399902 16.8413V19.2472C0.399902 19.5662 0.526331 19.8722 0.751374 20.0978C0.976418 20.3234 1.28164 20.4501 1.5999 20.4501H5.3679C5.64424 21.4694 6.2475 22.3693 7.08462 23.0109C7.92173 23.6524 8.94618 24 9.9999 24C11.0536 24 12.0781 23.6524 12.9152 23.0109C13.7523 22.3693 14.3556 21.4694 14.6319 20.4501H18.3999C18.7182 20.4501 19.0234 20.3234 19.2484 20.0978C19.4735 19.8722 19.5999 19.5662 19.5999 19.2472V16.8413C19.5978 16.0967 19.366 15.371 18.9364 14.7637C18.5067 14.1564 17.9002 13.6971 17.1999 13.449ZM5.1999 9.62358C5.1999 8.34741 5.70561 7.12351 6.60579 6.22113C7.50596 5.31874 8.72686 4.81179 9.9999 4.81179C11.2729 4.81179 12.4938 5.31874 13.394 6.22113C14.2942 7.12351 14.7999 8.34741 14.7999 9.62358V13.2324H5.1999V9.62358ZM9.9999 21.6531C9.58107 21.6505 9.17019 21.5381 8.8081 21.3271C8.44601 21.1161 8.14531 20.8137 7.9359 20.4501H12.0639C11.8545 20.8137 11.5538 21.1161 11.1917 21.3271C10.8296 21.5381 10.4187 21.6505 9.9999 21.6531ZM17.1999 18.0442H2.7999V16.8413C2.7999 16.5222 2.92633 16.2162 3.15137 15.9906C3.37642 15.7651 3.68164 15.6383 3.9999 15.6383H15.9999C16.3182 15.6383 16.6234 15.7651 16.8484 15.9906C17.0735 16.2162 17.1999 16.5222 17.1999 16.8413V18.0442Z" fill="#72767C"/>
      <svg className='position-absolute  ' xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
    <circle cx="4.8999" cy="4.5" r="3.75" fill="#FF5E6F" stroke="white" stroke-width="1.5"/>
    </svg>
      </svg>

          <img  className='rounded-circle ' src={portrait} />

        </div>

    
  </nav>

    </>

)}
