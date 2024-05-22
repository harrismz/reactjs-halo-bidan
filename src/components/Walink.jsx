import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

const Walink = () => {
    const [pasien_type, setPasienType] = useState('pasien_type');
    const pasienTypeChange = (event)  => {
        setPasienType(event.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const nama = e.target.nama.value;
        const hp = e.target.hp.value;
        const email = e.target.email.value;
        const pasien = e.target.pasien_type.value;
        // const noPasien = e.target.no_pasien.value ? e.target.no_pasien.value : 0;
        const noPasien = e.target.no_pasien.value;
        const keluhan = e.target.keluhan.value;
        
        // https://api.whatsapp.com/send?phone=6282111460050&text=*Appointment%20Bidan*%20%3A%0A%0ASaya%20*NAMA*%20adalah%20pasien%20*lama*%20dengan%20nomor%20pasien%20*nomorpasien*%20akan%20berkonsultasi%20dengan%20bidan%20*namabidan*%0Apada%20tanggal%20*2024-05-22%2018%3A00%3A00*.%20%0AKeluhan%20%3A%20IsiKeluhan

        const url = "https://api.whatsapp.com/send?phone=6282111460050&text=*Appointment%20Bidan*%20%3A%0A%0ASaya%20*"+nama+"*%20adalah%20pasien%20*"+pasien_type+"*%20dengan%20nomor%20pasien%20*"+noPasien+"*%20akan%20berkonsultasi%20dengan%20bidan%20*namabidan*%0Apada%20tanggal%20*2024-05-22%2018%3A00%3A00*.%20%0AKeluhan%20%3A%20"+keluhan;
        
        window.open(url, '_blank');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    id="nama" 
                    placeholder="nama kamu" 
                    required
                />
                <label htmlFor="nama">Nama</label>
            </div>
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="hp" 
                    placeholder="62xxxxxxx" 
                    required
                />
                <label htmlFor="hp">No. HP ( whatsapp )</label>
            </div>
            <div className="form-floating mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="name@example.com" 
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className='form-floating mb-3'>
                <select 
                    name="pasien_type" 
                    id="pasien_type" 
                    value={pasien_type} 
                    onChange={pasienTypeChange}
                >
                    <option value="Baru">Baru</option>
                    <option value="Lama">Lama</option>
                </select>
                <label htmlFor="pasien_type"></label>
            </div>
            {(pasien_type == 'Lama') ? 
            <div className='form-floating mb-3'>
                <input 
                    type="no_pasien" 
                    className="form-control" 
                    id="no_pasien" 
                    placeholder="Nomor Pasien" 
                />
                <label htmlFor="no_pasien">No. Pasien</label>
            </div> : null}
            <div className="form-floating mb-3">
                <textarea 
                    className="form-control" 
                    placeholder="Keluhan anda" 
                    id="keluhan"
                    required
                ></textarea>
                <label htmlFor="keluhan">Keluhan</label>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary" >Confirm</button>
            </div>
        </form>
    </div>
  )
}

export default Walink
