import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Walink = () => {
  return (
    <div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="nama" placeholder="nama kamu" />
            <label htmlFor="nama">Nama</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="hp" placeholder="62xxxxxxx" />
            <label htmlFor="hp">No. HP ( whatsapp )</label>
        </div>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Keluhan anda" id="keluhan"></textarea>
            <label htmlFor="keluhan">Keluhan</label>
        </div>
        <div className="mb-3">
            <button type="button" className="btn btn-primary">Confirm</button>
        </div>
        
    </div>
  )
}

export default Walink
