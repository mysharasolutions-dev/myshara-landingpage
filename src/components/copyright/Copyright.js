import React from 'react'
import './copyright.css'

function Copyright() {
  return (
    <div className="copyright">
        <p>
            {`Copyright © ${new Date().getFullYear()} `}
            <a href="https://victor-githui.netlify.app/">MyShara Solutions</a>
        </p>

        {/* <p>
            {`Copyright © `}
            <a href="https://victor-githui.netlify.app/">Myashara Solutions</a>
            {` ${new Date().getFullYear()} | Designed and Developed by `}
            <a href="https://victor-githui.netlify.app/">Victor Githui</a>
        </p> */}
    </div>
  )
}

export default Copyright