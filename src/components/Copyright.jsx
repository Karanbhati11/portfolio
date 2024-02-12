import React from 'react';

export default function Copyright() {
     const currentYear = new Date().getFullYear();
     return (
          <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
               <span>© {currentYear} All Rights Reserved
                    {/* by <a href="#"
                         target="_blank" rel="noopener noreferrer">i3F Enterprises Ltd</a> */}
                    .</span>
          </div>
     );
}
