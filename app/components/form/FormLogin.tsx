import React from 'react'
import style from "./form.module.css"
export default function FormLogin() {
  return (
    <div className={style.form}>
        <div className={style.title}>Form Sign up</div>
    <div className={style.sortInp}>
        <div className={style.formInp}>
          <label className={style.lable} htmlFor="">Name</label>
          <input className={style.inp} type="text" placeholder='Your name'/>
        </div>
        <div className={style.formInp}>
          <label className={style.lable} htmlFor="">Email.com</label>
          <input className={style.inp} type="text" placeholder='you@gmail.com'/>
        </div>
        <div className={style.formInp}>
          <label className={style.lable} htmlFor="">Phone number</label>
          <div className={style.stylePhone}>
            <select name="" id="">
              <option value="">US</option>
            </select>
            <input className={style.inpPhone} type="number" placeholder='+84 (123) 456-789'/>
          </div>
        </div>
        <div className={style.formInp}>
          <label className={style.lable} htmlFor="">Address</label>
          <input className={style.inpAD} type="text" placeholder='Tell us a little the project'/>
        </div>
        </div>
        <div>
          <div className={style.lables}>Skill</div>
          <div className={style.checkForm}>
          <div>
          <div><input type="checkbox" />HTML</div>
          <div><input type="checkbox" />Ux design</div>
          <div><input type="checkbox" />CSS</div>
          </div>
          <div>
          <div><input type="checkbox" />JavaScript</div>
          <div><input type="checkbox" />ReactJS</div>
          <div><input type="checkbox" />Java</div>
          </div>
          </div>
        </div>

        <button className={style.btn}>Sign up</button>
    </div>
  )
}
