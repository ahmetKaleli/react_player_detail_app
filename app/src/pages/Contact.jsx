import axios from "axios"
import { useState } from "react"

const api = "https://strapidevelopment.onrender.com/api/forms"
export default function Contact() {

  const valuesForm={
    name:"",
    surname:"",
    phone:"",
    mail:"",
    description:""
  }
  
  const [form, setForm] = useState(valuesForm)

  const formChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form);
  }

  const ContactMessage = async(e) => {
    e.preventDefault();

    const formData = {
      data: {
          name: form.name,
          surname: form.surname,
          phone: form.phone,
          mail: form.mail,
          description: form.description
      }
    }

    console.log(formData);

    try {
      const response = await axios.post(api, formData, { 
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      alert("successfully")
      console.log('successfully');

      if(response.status === 200){
        setForm(valuesForm)
      }
    } catch (error) {
      alert("Your form could not be sent. There should be no empty space")
      console.log(error);
    }
  }

  return (
    <div >
     <div className="form">
        <label>Name</label>
        <input value={form.name} name="name" onChange={formChange} />
        <br/><br/>
        <label>Surname</label>
        <input value={form.surname} name="surname" onChange={formChange}  />
        <br/><br/>
        <label>Phone</label>
        <input value={form.phone} name="phone" onChange={formChange} />
        <br/><br/>
        <label>Mail</label>
        <input value={form.mail} name="mail" onChange={formChange} />
        <br/><br/>
        <label>Description</label>
        <textarea value={form.description} name="description" onChange={formChange}/>
        <br/><br/>
        <button onClick={ContactMessage}>Submit</button>
     </div>
    </div>
  )
}
